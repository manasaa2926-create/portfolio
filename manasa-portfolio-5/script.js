// Highlights the current section's link in the navigation bar
const links = document.querySelectorAll('.links a');
const sections = [...links].map(a => document.querySelector(a.getAttribute('href')));
function update() {
  const y = window.scrollY + 120;
  let current = null;
  sections.forEach((sec, i) => { if (sec && sec.offsetTop <= y) current = links[i]; });
  links.forEach(a => { a.style.color = ''; });
  if (current) current.style.color = 'var(--accent)';
}
window.addEventListener('scroll', update, { passive: true });
update();
