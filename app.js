const WHATSAPP_NUMBER = '971567874295';

const progress = document.getElementById('progress');
window.addEventListener('scroll', () => {
  const h = document.documentElement;
  const denominator = h.scrollHeight - h.clientHeight;
  progress.style.width = (denominator ? (h.scrollTop / denominator) * 100 : 0) + '%';
}, { passive: true });

/* Reality → AI reveal */
const compare = document.getElementById('aiCompare');
const compareAi = document.getElementById('compareAi');
const handle = document.getElementById('compareHandle');
let reveal = 0;
let draggingReveal = false;

function syncCompareImage() {
  const aiImage = compareAi?.querySelector('img');
  if (aiImage && compare) aiImage.style.width = compare.clientWidth + 'px';
}
function setReveal(value) {
  reveal = Math.max(0, Math.min(100, value));
  compareAi.style.width = reveal + '%';
  handle.style.left = reveal + '%';
  handle.setAttribute('aria-valuenow', Math.round(reveal));
  syncCompareImage();
}
function pointerPercent(e) {
  const r = compare.getBoundingClientRect();
  return ((e.clientX - r.left) / r.width) * 100;
}
compare.addEventListener('pointerdown', e => {
  draggingReveal = true;
  compare.setPointerCapture?.(e.pointerId);
  setReveal(pointerPercent(e));
});
compare.addEventListener('pointermove', e => { if (draggingReveal) setReveal(pointerPercent(e)); });
compare.addEventListener('pointerup', () => { draggingReveal = false; });
compare.addEventListener('pointercancel', () => { draggingReveal = false; });

/* AI concept carousel */
const gallery = document.getElementById('aiGallery');
const galleryTrack = document.getElementById('aiGalleryTrack');
const aiSlides = [...document.querySelectorAll('.ai-gallery-slide')];
const prev = document.getElementById('aiPrev');
const next = document.getElementById('aiNext');
const dots = document.getElementById('aiDots');
const counter = document.getElementById('aiCounter');
let current = 0;
let galleryStartX = 0;
let draggingGallery = false;

function renderDots() {
  dots.innerHTML = aiSlides.map((_, i) => `<button type="button" aria-label="Go to AI concept ${i + 1}" aria-current="${i === current}"></button>`).join('');
  dots.querySelectorAll('button').forEach((b, i) => b.addEventListener('click', () => goTo(i)));
  counter.textContent = String(current + 1).padStart(2,'0') + ' / ' + String(aiSlides.length).padStart(2,'0');
}
function goTo(index) {
  current = (index + aiSlides.length) % aiSlides.length;
  galleryTrack.style.transform = `translateX(-${current * 100}%)`;
  renderDots();
}
prev.addEventListener('click', e => { e.stopPropagation(); goTo(current - 1); });
next.addEventListener('click', e => { e.stopPropagation(); goTo(current + 1); });
gallery.addEventListener('pointerdown', e => {
  if (e.target.closest('button')) return;
  draggingGallery = true;
  galleryStartX = e.clientX;
  gallery.setPointerCapture?.(e.pointerId);
});
gallery.addEventListener('pointerup', e => {
  if (!draggingGallery) return;
  const delta = e.clientX - galleryStartX;
  draggingGallery = false;
  if (Math.abs(delta) > 45) goTo(current + (delta < 0 ? 1 : -1));
});
gallery.addEventListener('pointercancel', () => { draggingGallery = false; });
renderDots();
syncCompareImage();
setReveal(0);
window.addEventListener('resize', syncCompareImage, { passive: true });


/* Contextual WhatsApp CTAs */
document.querySelectorAll('.wa-link').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const message = link.dataset.waMessage || "Hi, I'm interested in Unit 404 at FH Residency and would like to know more.";
    window.location.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  });
});

/* WhatsApp enquiry */
const form = document.getElementById('viewingForm');
form.addEventListener('submit', e => {
  e.preventDefault();
  const fd = new FormData(form);
  const name = String(fd.get('name') || '').trim();
  const phone = String(fd.get('phone') || '').trim();
  const message = String(fd.get('message') || '').trim();

  if (!/^\d{8,15}$/.test(WHATSAPP_NUMBER)) {
    alert('The WhatsApp destination number still needs to be configured in app.js.');
    return;
  }

  const body = encodeURIComponent(`Hi, I found Unit 404 at FH Residency and I'd like to take the next step.\n\nName: ${name}\nMy WhatsApp number: ${phone}\n\n${message}`);
  window.location.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${body}`;
});
