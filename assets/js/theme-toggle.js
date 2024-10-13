const toggleButton = document.getElementById('theme-toggle');

// Check for saved theme in localStorage
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  document.body.classList.add(savedTheme);
}

// Toggle between dark and light mode
toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  document.body.classList.toggle('light-mode');

  const currentTheme = document.body.classList.contains('dark-mode') ? 'dark-mode' : 'light-mode';
  localStorage.setItem('theme', currentTheme);
});
