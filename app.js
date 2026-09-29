const EMAIL = 'YOUR-EMAIL@example.com';

const progress = document.getElementById('progress');
window.addEventListener('scroll', () => {
  const h = document.documentElement;
  const denominator = h.scrollHeight - h.clientHeight;
  progress.style.width = (denominator ? (h.scrollTop / denominator) * 100 : 0) + '%';
}, { passive: true });

// Reality → AI reveal. The first state is 100% real; dragging the line right reveals the AI furnishing concept.
const compare = document.getElementById('aiCompare');
const compareAi = document.getElementById('compareAi');
const handle = document.getElementById('compareHandle');
const gallery = document.getElementById('aiGallery');
const galleryTrack = document.getElementById('aiGalleryTrack');
const aiSlides = [...document.querySelectorAll('.ai-gallery-slide')];
const prev = document.getElementById('aiPrev');
const next = document.getElementById('aiNext');
const dots = document.getElementById('aiDots');
const counter = document.getElementById('aiCounter');
let reveal = 0;
let current = 0;
let draggingReveal = false;
let draggingGallery = false;
let galleryStartX = 0;

function syncCompareImage() {
  const aiImage = compareAi.querySelector('img');
  if (aiImage) aiImage.style.width = compare.clientWidth + 'px';
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

const form = document.getElementById('viewingForm');
form.addEventListener('submit', e => {
  e.preventDefault();
  const fd = new FormData(form);
  const subject = encodeURIComponent('Private viewing — FH Residency Unit 404');
  const body = encodeURIComponent(`Hello,\n\nI am interested in a private viewing of FH Residency, Unit 404.\n\nName: ${fd.get('name')}\nPhone/WhatsApp: ${fd.get('phone')}\nEmail: ${fd.get('email') || ''}\n\nSent from the FH Residency private listing page.`);
  window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
});
