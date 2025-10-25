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

// === SCRIPT LÀM NỔI BẬT MENU & SLIDESHOW (ĐÃ SỬA ĐỂ TƯƠNG THÍCH VỚI CẤU TRÚC MỚI) ===
document.addEventListener("DOMContentLoaded", () => {
  const currentPath = window.location.pathname;
  const navLinksList = document.querySelectorAll("#nav-links a");

  navLinksList.forEach((link) => {
    // Lấy đường dẫn của link (ví dụ: "/gioi-thieu/")
    const linkPath = new URL(link.href).pathname;

    // Xử lý trường hợp đặc biệt cho trang chủ
    if (currentPath === "/" && linkPath === "/") {
      link.classList.add("active");
    }
    // Xử lý cho các trang con
    // Kiểm tra xem đường dẫn hiện tại có bắt đầu bằng đường dẫn của link không
    else if (linkPath !== "/" && currentPath.startsWith(linkPath)) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });

  // === SCRIPT CHO SLIDESHOW (ĐÃ SỬA ĐỂ CHỈ CHẠY TRÊN TRANG CHỦ) ===
  // Kiểm tra nếu đường dẫn hiện tại là trang chủ ("/")
  if (currentPath === "/") {
    let currentSlide = 0;
    const slides = document.querySelectorAll(".hero .slide");
    const slideInterval = 5000; // 5 giây

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
      // Đảm bảo slide đầu tiên hiển thị nếu chỉ có 1 slide
      slides[0].classList.add("active");
    }
  }
});
