// Kode yang sudah ada untuk header dan AOS
window.addEventListener("scroll", function () {
  const header = document.getElementById("header");
  header.classList.toggle("scrolled", window.scrollY > 50);
});
AOS.init({
  duration: 1000,
  once: true,
});

// Hamburger toggle menu
const hamburger = document.getElementById("hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});
// -- KODE BARU UNTUK SMOOTH SCROLL DI BAWAH INI --

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault(); // Mencegah perilaku default (lompatan)

    const targetId = this.getAttribute("href");
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});
