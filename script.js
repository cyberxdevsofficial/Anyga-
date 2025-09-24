// Theme toggle
const themeToggle = document.getElementById("theme-toggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light");
  themeToggle.textContent = document.body.classList.contains("light") ? "🌞" : "🌙";
});

// Email form
document.getElementById("about-form").addEventListener("submit", function(e) {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const description = document.getElementById("description").value;

  const mailtoLink = `mailto:cyberxdevsofficial@gmail.com?subject=About Us Form Submission&body=Name: ${encodeURIComponent(name)}%0D%0ADescription: ${encodeURIComponent(description)}`;
  
  window.location.href = mailtoLink;
});
