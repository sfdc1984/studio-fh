const EMAIL = 'YOUR-EMAIL@example.com';

// Reading progress
const progress = document.getElementById('progress');
window.addEventListener('scroll', () => {
  const h = document.documentElement;
  const denominator = h.scrollHeight - h.clientHeight;
  progress.style.width = (denominator ? (h.scrollTop / denominator) * 100 : 0) + '%';
}, { passive: true });

// AI concept carousel — this section intentionally contains AI imagery only.
const viewport = document.getElementById('aiCarouselViewport');
const track = document.getElementById('aiCarouselTrack');
const slides = [...document.querySelectorAll('.ai-slide')];
const prev = document.getElementById('aiPrev');
const next = document.getElementById('aiNext');
const dots = document.getElementById('aiDots');
let current = 0;
let startX = 0;
let dragging = false;

function renderDots() {
  dots.innerHTML = slides.map((_, i) => `<button type="button" aria-label="Go to AI concept ${i + 1}" aria-current="${i === current}"></button>`).join('');
  dots.querySelectorAll('button').forEach((b, i) => b.addEventListener('click', () => goTo(i)));
}

function goTo(index) {
  current = (index + slides.length) % slides.length;
  track.style.transform = `translateX(-${current * 100}%)`;
  slides.forEach((slide, i) => slide.classList.toggle('is-active', i === current));
  renderDots();
}

prev.addEventListener('click', () => goTo(current - 1));
next.addEventListener('click', () => goTo(current + 1));

viewport.addEventListener('pointerdown', e => { startX = e.clientX; dragging = true; viewport.setPointerCapture?.(e.pointerId); });
viewport.addEventListener('pointerup', e => {
  if (!dragging) return;
  const delta = e.clientX - startX;
  dragging = false;
  if (Math.abs(delta) > 45) goTo(current + (delta < 0 ? 1 : -1));
});
viewport.addEventListener('pointercancel', () => { dragging = false; });

renderDots();

// Private viewing enquiry
const form = document.getElementById('viewingForm');
form.addEventListener('submit', e => {
  e.preventDefault();
  const fd = new FormData(form);
  const subject = encodeURIComponent('Private viewing — FH Residency Unit 404');
  const body = encodeURIComponent(`Hello,\n\nI am interested in a private viewing of FH Residency, Unit 404.\n\nName: ${fd.get('name')}\nPhone/WhatsApp: ${fd.get('phone')}\nEmail: ${fd.get('email') || ''}\n\nSent from the FH Residency private listing page.`);
  window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
});
