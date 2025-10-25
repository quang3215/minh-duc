// === SCRIPT NÂNG CẤP CHO MENU MOBILE ===
const menuIcon = document.getElementById("menu-icon");
const navLinks = document.getElementById("nav-links");
const menuOverlay = document.getElementById("menu-overlay");

function toggleMenu() {
  menuIcon.classList.toggle("active");
  navLinks.classList.toggle("active");
  menuOverlay.classList.toggle("active");

  if (navLinks.classList.contains("active")) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }
}

if (menuIcon) {
  menuIcon.addEventListener("click", toggleMenu);
}

if (menuOverlay) {
  menuOverlay.addEventListener("click", toggleMenu);
}

// === SCRIPT LÀM NỔI BẬT MENU ===
document.addEventListener("DOMContentLoaded", () => {
  let currentPage = window.location.pathname.split("/").pop();
  if (currentPage === "" || currentPage === "/") {
    currentPage = "index.html";
  }

  const navLinksList = document.querySelectorAll("#nav-links a");

  navLinksList.forEach((link) => {
    const linkPage = link.getAttribute("href");
    if (linkPage === currentPage) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });

  // === SCRIPT CHO SLIDESHOW (Chỉ chạy trên trang index.html) ===
  if (currentPage === "index.html") {
    let currentSlide = 0;
    const slides = document.querySelectorAll(".hero .slide");
    const slideInterval = 5000;

    function nextSlide() {
      if (slides.length > 0) {
        slides[currentSlide].classList.remove("active");
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add("active");
      }
    }
    if (slides.length > 1) {
      setInterval(nextSlide, slideInterval);
    } else if (slides.length === 1) {
      slides[0].classList.add("active");
    }
  }
});
