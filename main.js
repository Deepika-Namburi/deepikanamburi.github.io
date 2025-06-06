// Smooth scroll behavior
document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".nav-links a");

  navLinks.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const targetId = link.getAttribute("href").substring(1);
      document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
    });
  });
});
document.querySelector('.resume-btn').addEventListener('click', function(e) {
  e.preventDefault();
  const link = document.createElement('a');
  link.href = 'assets/NamburiDurgaDeepika.pdf';
  link.download = 'NamburiDurgaDeepika.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});
