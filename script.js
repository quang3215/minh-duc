document.addEventListener("DOMContentLoaded", () => {
  // --- KHỞI TẠO CÁC CHỨC NĂNG CHÍNH ---
  initMobileMenu();
  initActiveNavLinks();
  initHomepageSlideshow();
  initMobileDropdown();
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

    // Chặn cuộn trang khi menu mobile đang mở
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
  const navLinksList = document.querySelectorAll("#nav-links > li > a"); // Chỉ chọn các link ở cấp 1

  navLinksList.forEach((link) => {
    const linkPath = new URL(link.href).pathname;

    // Xử lý trang chủ
    if (currentPath === "/" && linkPath === "/") {
      link.classList.add("active");
      return; // Dừng lại sau khi tìm thấy
    }

    // Xử lý các trang con (ví dụ: /gioi-thieu/, /tin-tuc/)
    if (linkPath !== "/" && currentPath.startsWith(linkPath)) {
      link.classList.add("active");

      // Xử lý làm nổi bật mục cha "Dịch Vụ" khi ở trang dịch vụ con
      const parentDropdown = link.closest(".dropdown");
      if (parentDropdown) {
        parentDropdown.querySelector("a").classList.add("active");
      }
    }
  });
}

// --- CHỨC NĂNG 3: CHẠY SLIDESHOW (CHỈ TRÊN TRANG CHỦ) ---
function initHomepageSlideshow() {
  // Chỉ chạy script này nếu đang ở trang chủ
  if (window.location.pathname === "/") {
    let currentSlide = 0;
    const slides = document.querySelectorAll(".hero .slide");
    const slideInterval = 5000; // 5 giây

    if (slides.length > 1) {
      setInterval(() => {
        slides[currentSlide].classList.remove("active");
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add("active");
      }, slideInterval);
    }
  }
}

// --- CHỨC NĂNG 4: XỬ LÝ MENU DROPDOWN TRÊN DI ĐỘNG ---
function initMobileDropdown() {
  const dropdownToggle = document.querySelector(".dropdown > a");
  const dropdownMenu = document.querySelector(".dropdown-menu");

  if (dropdownToggle && dropdownMenu) {
    dropdownToggle.addEventListener("click", function (e) {
      // Chỉ hoạt động khi chiều rộng màn hình nhỏ hơn hoặc bằng 768px
      if (window.innerWidth <= 768) {
        // Ngăn link chuyển trang ngay lập tức để mở menu con
        e.preventDefault();
        // Thêm/xóa lớp 'show' để hiển thị/ẩn menu con (được định nghĩa trong CSS)
        dropdownMenu.classList.toggle("show");
      }
    });
  }
}
//--- năm
document.addEventListener("DOMContentLoaded", function () {
  if (document.getElementById("year")) {
    document.getElementById("year").textContent = new Date().getFullYear();
  }
});
//--- năm xong
// === GO TO TOP BUTTON SCRIPT ===
// Lấy nút Go to Top
const goToTopBtn = document.getElementById("goToTopBtn");

// Khi người dùng cuộn trang, kiểm tra vị trí
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  // Nếu cuộn xuống hơn 300px, hiện nút lên
  if (
    document.body.scrollTop > 300 ||
    document.documentElement.scrollTop > 300
  ) {
    goToTopBtn.style.display = "block";
  } else {
    // Ngược lại, ẩn nút đi
    goToTopBtn.style.display = "none";
  }
}

// Khi người dùng nhấp vào nút, cuộn lên đầu trang
goToTopBtn.onclick = function () {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
};
