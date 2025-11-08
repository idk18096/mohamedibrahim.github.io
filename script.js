// Smooth scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', function(e){
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (!target) return;
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

// IntersectionObserver for fade-in elements
const observerOptions = { threshold: 0.15 };
const observer = new IntersectionObserver((entries, obs) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('appear');
      obs.unobserve(entry.target);
    }
  });
}, observerOptions);

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// Contact form client-side UX: show a quick inline message on submit (works with Formspree)
// Replace form action with your Formspree endpoint to actually collect messages.
const form = document.getElementById('contact-form');
if (form) {
  form.addEventListener('submit', (e) => {
    // let the browser handle submission; show a small "sending..." UI if desired
    const submitBtn = form.querySelector('button[type="submit"]');
    if (submitBtn) {
      submitBtn.disabled = true;
      const old = submitBtn.textContent;
      submitBtn.textContent = 'Sending…';
      // restore button after short delay if page doesn't navigate (useful for mailto fallback)
      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.textContent = old;
      }, 2200);
    }
  });
}
