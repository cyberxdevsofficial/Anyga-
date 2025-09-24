// Theme toggle
const themeToggle = document.getElementById("theme-toggle");
if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("light");
    themeToggle.textContent = document.body.classList.contains("light") ? "🌞" : "🌙";
  });
}

// Mobile menu toggle
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");

if (menuBtn) {
  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });
}

// About Us form
const aboutForm = document.getElementById("about-form");
if (aboutForm) {
  aboutForm.addEventListener("submit", function(e) {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const description = document.getElementById("description").value;

    const mailtoLink = `mailto:cyberxdevsofficial@gmail.com?subject=About Us Form Submission&body=Name: ${encodeURIComponent(name)}%0D%0ADescription: ${encodeURIComponent(description)}`;
    window.location.href = mailtoLink;
  });
}
