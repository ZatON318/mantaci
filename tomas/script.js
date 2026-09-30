document.getElementById('cta-btn').addEventListener('click', () => {
  document.getElementById('message').textContent = 'Button clicked! Boilerplate is working.';
});

document.getElementById('contact-form').addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Form submitted (demo only).');
  e.target.reset();
});
