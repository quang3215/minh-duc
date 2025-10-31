document.addEventListener("DOMContentLoaded", () => {
  // --- KHỞI TẠO TẤT CẢ CÁC CHỨC NĂNG ---
  initMobileMenu();
  initActiveNavLinks();
  initHomepageSlideshow();
  initMobileDropdown();
  initGoToTopButton(); // Thêm hàm khởi tạo Go to Top
  initYearUpdater(); // Thêm hàm khởi tạo cập nhật năm
});

// --- CHỨC NĂNG 1: XỬ LÝ MENU TRÊN DI ĐỘNG ---
function initMobileMenu() {
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
}

// --- CHỨC NĂNG 2: LÀM NỔI BẬT LINK MENU CỦA TRANG HIỆN TẠI ---
function initActiveNavLinks() {
  const currentPath = window.location.pathname;
  const navLinksList = document.querySelectorAll("#nav-links > li > a");

  navLinksList.forEach((link) => {
    const linkPath = new URL(link.href).pathname;

    if (currentPath === "/" && linkPath === "/") {
      link.classList.add("active");
      return;
    }

    if (linkPath !== "/" && currentPath.startsWith(linkPath)) {
      link.classList.add("active");
      const parentDropdown = link.closest(".dropdown");
      if (parentDropdown) {
        parentDropdown.querySelector("a").classList.add("active");
      }
    }
  });
}

// --- CHỨC NĂNG 3: CHẠY SLIDESHOW (ĐÃ SỬA LỖI) ---
function initHomepageSlideshow() {
  const heroSection = document.getElementById("hero");
  if (!heroSection) return; // Chỉ chạy nếu có phần hero

  const slides = heroSection.querySelectorAll(".slide");
  if (slides.length <= 1) return; // Không chạy nếu chỉ có 1 slide

  let currentSlide = 0;
  const slideInterval = 5000; // 5 giây

  function showNextSlide() {
    slides[currentSlide].classList.remove("active");
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add("active");
  }

  setInterval(showNextSlide, slideInterval);
}

// --- CHỨC NĂNG 4: XỬ LÝ MENU DROPDOWN TRÊN DI ĐỘNG ---
function initMobileDropdown() {
  const dropdownToggle = document.querySelector(".dropdown > a");
  const dropdownMenu = document.querySelector(".dropdown-menu");

  if (dropdownToggle && dropdownMenu) {
    dropdownToggle.addEventListener("click", function (e) {
      if (window.innerWidth <= 768) {
        e.preventDefault();
        dropdownMenu.classList.toggle("show");
      }
    });
  }
}

// --- CHỨC NĂNG 5: CẬP NHẬT NĂM HIỆN TẠI ---
function initYearUpdater() {
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
}

// --- CHỨC NĂNG 6: NÚT GO TO TOP (ĐÃ CẢI TIẾN) ---
function initGoToTopButton() {
  const goToTopBtn = document.getElementById("goToTopBtn");
  if (!goToTopBtn) return;

  // Hiện/ẩn nút khi cuộn trang
  window.addEventListener("scroll", () => {
    if (
      document.body.scrollTop > 300 ||
      document.documentElement.scrollTop > 300
    ) {
      goToTopBtn.style.display = "flex";
    } else {
      goToTopBtn.style.display = "none";
    }
  });

  // Xử lý sự kiện click để cuộn lên đầu
  goToTopBtn.addEventListener("click", (event) => {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}
