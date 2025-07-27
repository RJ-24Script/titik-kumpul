document.addEventListener("DOMContentLoaded", function () {
  // Scroll effect untuk header
  const header = document.getElementById("header");
  window.addEventListener("scroll", function () {
    header.classList.toggle("scrolled", window.scrollY > 50);
  });

  // Inisialisasi AOS
  AOS.init({
    duration: 800,
    once: true,
    offset: 50,
  });

  // Hamburger toggle
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.querySelector(".nav-links");

  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    hamburger.classList.toggle("is-active"); // Untuk animasi ke bentuk X
  });

  // Smooth scroll dan auto-close menu mobile
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }

      // Tutup menu & animasi balik
      navLinks.classList.remove("active");
      hamburger.classList.remove("is-active");
    });
  });

  // Tombol scroll ke atas
  const scrollBtn = document.getElementById("scrollTopBtn");
  window.addEventListener("scroll", () => {
    if (scrollBtn) {
      scrollBtn.style.display = window.scrollY > 300 ? "block" : "none";
    }
  });

  if (scrollBtn) {
    scrollBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // Tab menu switching
  document.querySelectorAll(".tab-button").forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelectorAll(".tab-button").forEach((btn) =>
        btn.classList.remove("active")
      );
      document.querySelectorAll(".tab-content").forEach((content) =>
        content.classList.remove("active")
      );

      button.classList.add("active");
      const tabId = button.getAttribute("data-tab");
      const tabContent = document.getElementById(tabId);
      if (tabContent) {
        tabContent.classList.add("active");
      }
    });
  });
});
