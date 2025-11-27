const links = document.querySelectorAll('.nav a');
const sections = document.querySelectorAll('section');

function showSection(id) {
  sections.forEach(sec => sec.classList.remove('active'));
  document.getElementById(id).classList.add('active');

  links.forEach(link => link.classList.remove('active'));
  event.target.classList.add('active');
}
