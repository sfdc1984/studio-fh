const WHATSAPP_NUMBER = '971567874295';

const progress = document.getElementById('progress');
const topbar = document.getElementById('topbar');
window.addEventListener('scroll', () => {
  topbar?.classList.toggle('scrolled', window.scrollY > 48);
}, { passive: true });
window.addEventListener('scroll', () => {
  const h = document.documentElement;
  const denominator = h.scrollHeight - h.clientHeight;
  progress.style.width = (denominator ? (h.scrollTop / denominator) * 100 : 0) + '%';
}, { passive: true });

/* Reality → AI reveal */
const compare = document.getElementById('aiCompare');
const compareReal = document.getElementById('compareReal');
const handle = document.getElementById('compareHandle');
let reveal = 50;
let draggingReveal = false;

function syncCompareImage() {
  const realImage = compareReal?.querySelector('img');
  if (realImage && compare) realImage.style.width = compare.clientWidth + 'px';
}
function setReveal(value) {
  reveal = Math.max(0, Math.min(100, value));
  // AI is the full base image on the right; the real photo overlays from the left.
  // Increasing reveal moves the divider right and exposes more of the AI concept.
  compareReal.style.width = (100 - reveal) + '%';
  handle.style.left = reveal + '%';
  handle.setAttribute('aria-valuenow', Math.round(reveal));
  syncCompareImage();
}
function pointerPercent(e) {
  const r = compare.getBoundingClientRect();
  return ((e.clientX - r.left) / r.width) * 100;
}
compare.addEventListener('pointerdown', e => {
  compare.classList.add('is-interacted');
  draggingReveal = true;
  compare.setPointerCapture?.(e.pointerId);
  setReveal(pointerPercent(e));
});
compare.addEventListener('pointermove', e => { if (draggingReveal) setReveal(pointerPercent(e)); });
compare.addEventListener('pointerup', () => { draggingReveal = false; });
compare.addEventListener('pointercancel', () => { draggingReveal = false; });
setReveal(50);

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
setReveal(50);
window.addEventListener('resize', syncCompareImage, { passive: true });

/* WhatsApp enquiry + contextual CTAs */
function openWhatsApp(message) {
  const text = encodeURIComponent(message);
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank', 'noopener,noreferrer');
}

document.querySelectorAll('[data-wa-message]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    openWhatsApp(link.getAttribute('data-wa-message') || 'Hi, I found Unit 404 at FH Residency and would like to know more.');
  });
});

const form = document.getElementById('viewingForm');
form.addEventListener('submit', e => {
  e.preventDefault();
  const fd = new FormData(form);
  const name = String(fd.get('name') || '').trim();
  const phone = String(fd.get('phone') || '').trim();
  const message = String(fd.get('message') || '').trim();

  const body = `Hi, I've explored Unit 404 at FH Residency and I'd like to arrange a private viewing.\n\nName: ${name}\nMy WhatsApp number: ${phone}\n\n${message}`;
  openWhatsApp(body);
});
