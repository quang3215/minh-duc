/* --- HÀM TỐI ƯU HIỆU SUẤT (THROTTLE) --- */
// Hàm này giới hạn một hàm khác chỉ được chạy 1 lần mỗi X mili giây
function throttle(func, limit) {
  let inThrottle;
  return function () {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

/* --- TẤT CẢ CÁC HÀM GỐC CỦA BẠN --- */
document.addEventListener("DOMContentLoaded", () => {
  initMobileMenu();
  initActiveNavLinks();
  initHomepageSlideshow();
  initMobileDropdown();
  initGoToTopButton(); // Hàm này giờ đã được tối ưu
  initYearUpdater();
});

// CHỨC NĂNG 1: XỬ LÝ MENU TRÊN DI ĐỘNG
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

// CHỨC NĂNG 2: LÀM NỔI BẬT LINK MENU CỦA TRANG HIỆN TẠI
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

// CHỨC NĂNG 3: CHẠY SLIDESHOW
function initHomepageSlideshow() {
  const heroSection = document.getElementById("hero");
  if (!heroSection) return;

  const slides = heroSection.querySelectorAll(".slide");
  if (slides.length <= 1) return;

  let currentSlide = 0;
  const slideInterval = 5000;

  function showNextSlide() {
    slides[currentSlide].classList.remove("active");
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add("active");
  }

  setInterval(showNextSlide, slideInterval);
}

// CHỨC NĂNG 4: XỬ LÝ MENU DROPDOWN TRÊN DI ĐỘNG
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

// CHỨC NĂNG 5: CẬP NHẬT NĂM HIỆN TẠI
function initYearUpdater() {
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
}

// --- CHỨC NĂNG 6: NÚT GO TO TOP (ĐÃ ĐƯỢC TỐI ƯU BẰNG THROTTLE) ---
function initGoToTopButton() {
  const goToTopBtn = document.getElementById("goToTopBtn");
  if (!goToTopBtn) return;

  // Hàm xử lý logic hiện/ẩn nút
  function handleScroll() {
    // Đọc 1 lần duy nhất, gán vào biến
    const scrollTop =
      document.documentElement.scrollTop || document.body.scrollTop;

    if (scrollTop > 300) {
      goToTopBtn.style.display = "flex";
    } else {
      goToTopBtn.style.display = "none";
    }
  }

  // Bọc hàm handleScroll trong hàm throttle
  // Nó sẽ chỉ chạy 1 lần mỗi 200ms
  window.addEventListener("scroll", throttle(handleScroll, 200));

  // Xử lý sự kiện click để cuộn lên đầu
  goToTopBtn.addEventListener("click", (event) => {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}
