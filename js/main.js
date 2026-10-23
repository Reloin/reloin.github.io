document.addEventListener("DOMContentLoaded", () => {
  const scholarLink = document.getElementById("scholar-link");
  if (scholarLink && scholarLink.getAttribute("href") === "#") {
    scholarLink.addEventListener("click", (e) => e.preventDefault());
    scholarLink.style.opacity = "0.5";
    scholarLink.title = "Add your Google Scholar URL in index.html";
  }

  // Highlight the sidebar link for the section currently in view
  const navLinks = document.querySelectorAll(".section-nav a");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      navLinks.forEach((a) => a.classList.toggle("active", a.getAttribute("href") === "#" + entry.target.id));
    });
  }, { rootMargin: "-40% 0px -55% 0px" });
  document.querySelectorAll(".content section").forEach((s) => observer.observe(s));
});
