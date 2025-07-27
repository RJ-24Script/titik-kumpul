// Menunggu semua konten HTML dimuat sebelum menjalankan skrip
document.addEventListener("DOMContentLoaded", function () {
  // 1. Inisialisasi Library AOS (Animasi saat scroll)
  AOS.init({
    duration: 800, // Durasi animasi
    once: true, // Animasi hanya berjalan sekali
    offset: 50, // Jarak picu animasi
  });

  // 2. Efek Scroll pada Header
  const header = document.getElementById("header");
  window.addEventListener("scroll", function () {
    // Tambah/hapus class 'scrolled' jika scroll lebih dari 50px
    header.classList.toggle("scrolled", window.scrollY > 50);
  });

  // 3. Fungsi Hamburger Menu untuk Mobile
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.querySelector(".nav-links");

  hamburger.addEventListener("click", () => {
    // Toggle class 'active' untuk menampilkan/menyembunyikan menu
    navLinks.classList.toggle("active");
    // Toggle class 'is-active' untuk animasi ikon hamburger menjadi 'X'
    hamburger.classList.toggle("is-active");
  });

  // 4. Smooth Scroll dan Menutup Menu Mobile saat Link di-klik
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault(); // Mencegah perilaku default link

      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }

      // Otomatis tutup menu mobile setelah link navigasi di-klik
      if (navLinks.classList.contains("active")) {
        navLinks.classList.remove("active");
        hamburger.classList.remove("is-active");
      }
    });
  });

  // 5. Tombol "Scroll to Top"
  const scrollTopBtn = document.getElementById("scrollTopBtn");
  window.addEventListener("scroll", () => {
    if (scrollTopBtn) {
      // Tampilkan tombol jika scroll lebih dari 300px
      scrollTopBtn.style.display = window.scrollY > 300 ? "flex" : "none";
      // Agar icon ditengah, ganti display jadi flex
      scrollTopBtn.style.alignItems = "center";
      scrollTopBtn.style.justifyContent = "center";
    }
  });

  if (scrollTopBtn) {
    scrollTopBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // 6. Fungsi Tab pada Bagian Menu
  document.querySelectorAll(".tab-button").forEach((button) => {
    button.addEventListener("click", () => {
      // Hapus class 'active' dari semua tombol dan konten
      document
        .querySelectorAll(".tab-button")
        .forEach((btn) => btn.classList.remove("active"));
      document
        .querySelectorAll(".tab-content")
        .forEach((content) => content.classList.remove("active"));

      // Tambahkan class 'active' ke tombol dan konten yang di-klik
      button.classList.add("active");
      const tabId = button.getAttribute("data-tab");
      const tabContent = document.getElementById(tabId);
      if (tabContent) {
        tabContent.classList.add("active");
      }
    });
  });
}); // Akhir dari event listener DOMContentLoaded
document.addEventListener("DOMContentLoaded", function () {
  AOS.init({
    duration: 800,
    once: true,
    offset: 50,
  });

  const header = document.getElementById("header");
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.querySelector(".nav-links");
  const scrollTopBtn = document.getElementById("scrollTopBtn");

  window.addEventListener("scroll", function () {
    header.classList.toggle("scrolled", window.scrollY > 50);

    if (scrollTopBtn) {
      scrollTopBtn.style.display = window.scrollY > 300 ? "flex" : "none";
      scrollTopBtn.style.alignItems = "center";
      scrollTopBtn.style.justifyContent = "center";
    }
  });

  if (hamburger && navLinks) {
    hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("active");
      hamburger.classList.toggle("is-active");
    });
  }

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }

      if (navLinks && navLinks.classList.contains("active")) {
        navLinks.classList.remove("active");
        hamburger.classList.remove("is-active");
      }
    });
  });

  if (scrollTopBtn) {
    scrollTopBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  document.querySelectorAll(".tab-button").forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelectorAll(".tab-button").forEach((btn) => btn.classList.remove("active"));
      document.querySelectorAll(".tab-content").forEach((content) => content.classList.remove("active"));

      button.classList.add("active");
      const tabId = button.getAttribute("data-tab");
      const tabContent = document.getElementById(tabId);
      if (tabContent) {
        tabContent.classList.add("active");
      }
    });
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".tab-button");
  const contents = document.querySelectorAll(".tab-content");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const tabId = button.getAttribute("data-tab");
      const activeContent = document.getElementById(tabId);

      // Hilangkan class active dari semua tombol
      buttons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");

      // Hilangkan class active dari semua konten dan tambahkan timeout agar animasi fade jalan
      contents.forEach((content) => {
        if (content.classList.contains("active")) {
          content.classList.remove("active");
        }
      });

      // Delay kecil supaya animasi bisa muncul dengan baik
      setTimeout(() => {
        activeContent.classList.add("active");
      }, 50);
    });
  });
});

