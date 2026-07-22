/* --- HÀM TỐI ƯU HIỆU SUẤT (THROTTLE) --- */
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

/* --- KHỞI CHẠY TẤT CẢ CÁC MODULE --- */
document.addEventListener("DOMContentLoaded", () => {
  initMobileMenu();
  initActiveNavLinks();
  initHomepageSlideshow();
  initMobileDropdown();
  initGoToTopButton();
  initYearUpdater();
  initConversionTracking();   // Module 7: Theo dõi chuyển đổi
  initCookieConsent();        // Module 8: Đồng ý cookie
  injectBreadcrumbSchema();   // Module 9: Schema breadcrumb tự động
  initScrollReveal();         // Module 10: Scroll reveal animation
  initNavbarShrink();         // Module 11: Navbar shrink on scroll
});

// ─────────────────────────────────────────────
// CHỨC NĂNG 1: XỬ LÝ MENU TRÊN DI ĐỘNG
// ─────────────────────────────────────────────
function initMobileMenu() {
  const menuIcon = document.getElementById("menu-icon");
  const navLinks = document.getElementById("nav-links");
  const menuOverlay = document.getElementById("menu-overlay");

  function toggleMenu() {
    menuIcon.classList.toggle("active");
    navLinks.classList.toggle("active");
    menuOverlay.classList.toggle("active");

    const isOpen = navLinks.classList.contains("active");
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    menuIcon.setAttribute("aria-expanded", isOpen ? "true" : "false");
    menuIcon.setAttribute("aria-label", isOpen ? "Đóng menu" : "Mở menu điều hướng");
  }

  if (menuIcon) {
    menuIcon.addEventListener("click", toggleMenu);
  }
  if (menuOverlay) {
    menuOverlay.addEventListener("click", toggleMenu);
  }
}

// ─────────────────────────────────────────────
// CHỨC NĂNG 2: LÀM NỔI BẬT LINK MENU ĐANG ACTIVE
// ─────────────────────────────────────────────
function initActiveNavLinks() {
  let currentPath = window.location.pathname;
  if (currentPath.length > 1 && currentPath.endsWith("/")) {
    currentPath = currentPath.slice(0, -1);
  }

  const navLinksList = document.querySelectorAll(".navbar .nav-links a");
  navLinksList.forEach((link) => {
    link.classList.remove("active");
    const href = link.getAttribute("href");
    if (!href || href.startsWith("javascript") || href === "#") return;

    try {
      const urlObj = new URL(link.href, window.location.origin);
      let linkPath = urlObj.pathname;
      if (linkPath.length > 1 && linkPath.endsWith("/")) {
        linkPath = linkPath.slice(0, -1);
      }

      if (currentPath === linkPath) {
        link.classList.add("active");
        const parentDropdown = link.closest(".dropdown");
        if (parentDropdown) {
          const parentToggle = parentDropdown.querySelector(":scope > a");
          if (parentToggle) parentToggle.classList.add("active");
        }
      } else if (linkPath !== "" && linkPath !== "/" && currentPath.startsWith(linkPath)) {
        link.classList.add("active");
        const parentDropdown = link.closest(".dropdown");
        if (parentDropdown) {
          const parentToggle = parentDropdown.querySelector(":scope > a");
          if (parentToggle) parentToggle.classList.add("active");
        }
      }
    } catch (e) {}
  });
}

// ─────────────────────────────────────────────
// CHỨC NĂNG 3: SLIDESHOW TRANG CHỦ
// ─────────────────────────────────────────────
function initHomepageSlideshow() {
  const heroSection = document.getElementById("hero");
  if (!heroSection) return;

  const slides = heroSection.querySelectorAll(".slide");
  if (slides.length <= 1) return;

  let currentSlide = 0;
  function showNextSlide() {
    slides[currentSlide].classList.remove("active");
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add("active");
  }
  setInterval(showNextSlide, 5000);
}

// ─────────────────────────────────────────────
// CHỨC NĂNG 4: DROPDOWN MOBILE
// ─────────────────────────────────────────────
function initMobileDropdown() {
  const dropdownToggles = document.querySelectorAll(".dropdown > a");
  dropdownToggles.forEach((toggle) => {
    toggle.addEventListener("click", function (e) {
      if (window.innerWidth <= 768) {
        e.preventDefault();
        const dropdownMenu = this.nextElementSibling;
        if (dropdownMenu && dropdownMenu.classList.contains("dropdown-menu")) {
          dropdownMenu.classList.toggle("show");
        }
      }
    });
  });
}

// ─────────────────────────────────────────────
// CHỨC NĂNG 5: CẬP NHẬT NĂM
// ─────────────────────────────────────────────
function initYearUpdater() {
  const yearSpan = document.getElementById("year");
  if (yearSpan) yearSpan.textContent = new Date().getFullYear();
}

// ─────────────────────────────────────────────
// CHỨC NĂNG 6: NÚT GO TO TOP
// ─────────────────────────────────────────────
function initGoToTopButton() {
  const goToTopBtn = document.getElementById("goToTopBtn");
  if (!goToTopBtn) return;

  function handleScroll() {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    goToTopBtn.style.display = scrollTop > 300 ? "flex" : "none";
  }

  window.addEventListener("scroll", throttle(handleScroll, 200));
  goToTopBtn.addEventListener("click", (event) => {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// ─────────────────────────────────────────────
// CHỨC NĂNG 7: THEO DÕI CHUYỂN ĐỔI (CONVERSION TRACKING)
// Ghi nhận: click gọi điện, click Zalo, gửi form
// ─────────────────────────────────────────────
function initConversionTracking() {
  // Theo dõi click số điện thoại → GTM trigger "hotline"
  document.querySelectorAll('a[href^="tel:"]').forEach((el) => {
    el.addEventListener("click", () => {
      if (typeof dataLayer !== "undefined") {
        dataLayer.push({ event: "hotline" });
      }
    });
  });

  // Theo dõi click Zalo → GTM trigger "zalo"
  document.querySelectorAll('a[href*="zalo.me"]').forEach((el) => {
    el.addEventListener("click", () => {
      if (typeof dataLayer !== "undefined") {
        dataLayer.push({ event: "zalo" });
      }
    });
  });

  // Theo dõi gửi form liên hệ → GA4 event
  document.querySelectorAll("form.contact-form").forEach((form) => {
    form.addEventListener("submit", () => {
      if (typeof dataLayer !== "undefined") {
        dataLayer.push({ event: "form_submission" });
      }
    });
  });
}

// ─────────────────────────────────────────────
// CHỨC NĂNG 8: COOKIE CONSENT BANNER
// Hiển thị lần đầu, lưu lựa chọn vào localStorage
// ─────────────────────────────────────────────
function initCookieConsent() {
  const COOKIE_KEY = "duc_minh_cookie_consent";
  if (localStorage.getItem(COOKIE_KEY)) return; // Đã chọn trước đó

  // Inject CSS
  const style = document.createElement("style");
  style.textContent = `
    #cookie-banner {
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      background: rgba(30, 30, 30, 0.97);
      color: #ddd;
      padding: 12px 20px;
      z-index: 9999;
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
      gap: 10px;
      box-shadow: 0 -2px 12px rgba(0,0,0,0.25);
      font-size: 0.82rem;
      line-height: 1.5;
      animation: slideUp 0.35s ease;
    }
    @keyframes slideUp {
      from { transform: translateY(100%); }
      to   { transform: translateY(0); }
    }
    #cookie-banner p { margin: 0; flex: 1; min-width: 200px; }
    #cookie-banner a { color: #ffaa44; }
    #cookie-banner .cookie-btns { display: flex; gap: 8px; }
    #cookie-accept {
      background: #c90000;
      color: #fff;
      border: none;
      padding: 7px 18px;
      border-radius: 4px;
      cursor: pointer;
      font-weight: 700;
      font-size: 0.82rem;
      white-space: nowrap;
    }
    #cookie-decline {
      background: transparent;
      color: #999;
      border: 1px solid #555;
      padding: 7px 14px;
      border-radius: 4px;
      cursor: pointer;
      font-size: 0.82rem;
      white-space: nowrap;
    }
    @media (max-width: 768px) {
      #cookie-banner {
        flex-direction: column;
        text-align: center;
        padding: 16px;
      }
      #cookie-banner p { min-width: 100%; font-size: 0.8rem; margin-bottom: 12px; }
      #cookie-banner .cookie-btns { width: 100%; justify-content: center; }
      #cookie-accept, #cookie-decline { padding: 12px 20px; flex: 1; text-align: center; }
    }
  `;
  document.head.appendChild(style);

  // Inject HTML
  const banner = document.createElement("div");
  banner.id = "cookie-banner";
  banner.setAttribute("role", "dialog");
  banner.setAttribute("aria-label", "Thông báo cookie");
  banner.innerHTML = `
    <p>
      Website dùng cookie để cải thiện trải nghiệm của bạn.
      <a href="/chinh-sach-bao-mat/">Tìm hiểu thêm</a>
    </p>
    <div class="cookie-btns">
      <button id="cookie-accept">Đồng ý</button>
      <button id="cookie-decline">Bỏ qua</button>
    </div>
  `;
  document.body.appendChild(banner);

  function dismissBanner(accepted) {
    localStorage.setItem(COOKIE_KEY, accepted ? "accepted" : "declined");
    banner.style.animation = "slideUp 0.3s ease reverse forwards";
    setTimeout(() => banner.remove(), 320);

    // Nếu từ chối: push vào GTM để tắt các tag tracking
    if (!accepted && typeof dataLayer !== "undefined") {
      dataLayer.push({ event: "cookie_declined" });
    }
    if (accepted && typeof dataLayer !== "undefined") {
      dataLayer.push({ event: "cookie_accepted" });
    }
  }

  document.getElementById("cookie-accept").addEventListener("click", () => dismissBanner(true));
  document.getElementById("cookie-decline").addEventListener("click", () => dismissBanner(false));
}

// ─────────────────────────────────────────────
// CHỨC NĂNG 9: TỰ ĐỘNG INJECT BREADCRUMB SCHEMA
// Dựa vào URL hiện tại, tạo BreadcrumbList JSON-LD
// ─────────────────────────────────────────────
function injectBreadcrumbSchema() {
  const BASE_URL = "https://thumuacapdonggiacao.com";
  const path = window.location.pathname;

  // Bỏ qua trang chủ
  if (path === "/" || path === "") return;

  // Map các đường dẫn sang tên thân thiện
  const labels = {
    "gioi-thieu": "Giới Thiệu",
    "dich-vu": "Dịch Vụ",
    "bang-gia": "Bảng Giá",
    "quy-trinh": "Quy Trình",
    "lien-he": "Liên Hệ",
    "tin-tuc": "Tin Tức",
    "khu-vuc-thu-mua": "Khu Vực Thu Mua",
    "thu-mua-pin-nang-luong-mat-troi": "Thu Mua Pin Năng Lượng Mặt Trời",
    "thu-mua-cap-dong-thiet-bi-dien": "Thu Mua Cáp Đồng & Thiết Bị Điện",
    "thu-mua-phe-lieu-cong-nghiep": "Thu Mua Phế Liệu Công Nghiệp",
    "thu-mua-inox": "Thu Mua Inox",
    "thu-mua-nhom": "Thu Mua Nhôm",
    "khu-vuc-mien-nam": "Khu Vực Miền Nam",
    "khu-vuc-mien-bac": "Khu Vực Miền Bắc",
    "khu-vuc-mien-trung": "Khu Vực Miền Trung",
    "khu-vuc-toan-quoc": "Toàn Quốc",
    "chinh-sach-bao-mat": "Chính Sách Bảo Mật",
    "thu-mua-cap-dong-tphcm": "Thu Mua Cáp Đồng TP.HCM",
    "thu-mua-phe-lieu-binh-duong": "Thu Mua Phế Liệu Bình Dương",
    "thu-mua-phe-lieu-dong-nai": "Thu Mua Phế Liệu Đồng Nai",
    "trang2": "Trang 2",
    "trang3": "Trang 3",
  };

  const segments = path.split("/").filter(Boolean);
  const items = [
    { "@type": "ListItem", position: 1, name: "Trang Chủ", item: BASE_URL + "/" }
  ];

  let cumulativePath = "";
  segments.forEach((seg, idx) => {
    cumulativePath += "/" + seg;
    const name = labels[seg] || seg.replace(/-/g, " ").replace(/\b\w/g, c => c.toUpperCase());
    items.push({
      "@type": "ListItem",
      position: idx + 2,
      name: name,
      item: BASE_URL + cumulativePath + "/"
    });
  });

  // Không inject nếu chỉ có 1 item (= trang chủ)
  if (items.length <= 1) return;

  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items
  };

  const script = document.createElement("script");
  script.type = "application/ld+json";
  script.textContent = JSON.stringify(schema);
  document.head.appendChild(script);
}

// ─────────────────────────────────────────────
// CHỨC NĂNG 10: HIỆU ỨNG CUỘN TRANG (SCROLL REVEAL)
// ─────────────────────────────────────────────
function initScrollReveal() {
  const reveals = document.querySelectorAll('.reveal');
  if (reveals.length === 0) return;

  const revealOptions = {
    root: null,
    rootMargin: '0px 0px -100px 0px',
    threshold: 0.1
  };

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, revealOptions);

  reveals.forEach(reveal => revealObserver.observe(reveal));
}

// ─────────────────────────────────────────────
// CHỨC NĂNG 11: THU NHỎ NAVBAR KHI CUỘN (NAVBAR SHRINK)
// ─────────────────────────────────────────────
function initNavbarShrink() {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;

  const handleScroll = throttle(() => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }, 100);

  window.addEventListener('scroll', handleScroll);
}
