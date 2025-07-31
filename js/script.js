console.log("✅ script.js loaded"); // Tes apakah script.js benar-benar aktif

document.addEventListener("DOMContentLoaded", function () {
  // Inisialisasi AOS
  if (typeof AOS !== "undefined") {
    AOS.init({ duration: 800, once: true, offset: 50 });
  }

  // Header scroll
  const header = document.getElementById("header");
  window.addEventListener("scroll", function () {
    header.classList.toggle("scrolled", window.scrollY > 50);
  });

  // Hamburger
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.querySelector(".nav-links");

  if (hamburger && navLinks) {
    hamburger.addEventListener("click", function () {
      navLinks.classList.toggle("active");
      hamburger.classList.toggle("is-active");
      console.log("Hamburger diklik");
    });
  } else {
    console.error("❌ Tidak menemukan .hamburger atau .nav-links");
  }

  // Smooth scroll dan close mobile nav
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
      if (navLinks && navLinks.classList.contains("active")) {
        navLinks.classList.remove("active");
        hamburger.classList.remove("is-active");
      }
    });
  });

  // Scroll to top button
  const scrollTopBtn = document.getElementById("scrollTopBtn");
  window.addEventListener("scroll", () => {
    if (scrollTopBtn) {
      scrollTopBtn.style.display = window.scrollY > 300 ? "flex" : "none";
      scrollTopBtn.style.alignItems = "center";
      scrollTopBtn.style.justifyContent = "center";
    }
  });

  if (scrollTopBtn) {
    scrollTopBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // Tab menu
  const tabButtons = document.querySelectorAll(".tab-button");
  const tabContents = document.querySelectorAll(".tab-content");
  tabButtons.forEach((button) => {
    button.addEventListener("click", () => {
      tabButtons.forEach((btn) => btn.classList.remove("active"));
      tabContents.forEach((content) => content.classList.remove("active"));
      button.classList.add("active");
      const tabId = button.getAttribute("data-tab");
      const content = document.getElementById(tabId);
      if (content) {
        setTimeout(() => content.classList.add("active"), 50);
      }
    });
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const overlay = document.getElementById("mobile-nav-overlay");
  const closeBtn = document.getElementById("close-btn");

  // buka overlay
  hamburger.addEventListener("click", () => {
    overlay.classList.add("active");
    hamburger.classList.add("is-active");
  });
  // tutup overlay
  closeBtn.addEventListener("click", () => {
    overlay.classList.remove("active");
    hamburger.classList.remove("is-active");
  });
  // tutup saat link diklik
  document.querySelectorAll(".overlay-links a").forEach(link => {
    link.addEventListener("click", () => {
      overlay.classList.remove("active");
      hamburger.classList.remove("is-active");
    });
  });
});
document.querySelectorAll('.prev-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const grid = btn.nextElementSibling;
    grid.scrollBy({ left: -grid.clientWidth * 0.8, behavior: 'smooth' });
  });
});
document.querySelectorAll('.next-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const grid = btn.previousElementSibling;
    grid.scrollBy({ left: grid.clientWidth * 0.8, behavior: 'smooth' });
  });
});
