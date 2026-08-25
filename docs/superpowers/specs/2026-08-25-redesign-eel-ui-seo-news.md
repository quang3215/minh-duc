# Thiết kế Tái Cấu Trúc Toàn Diện Giao Diện (eel-ui), Tối Ưu SEO & 10 Bài Viết Cáp Đồng

**Dự án:** `minh-duc-astro` (Công Ty Thu Mua Cáp Đồng Đức Minh)  
**Ngày lập:** 2026-08-25  
**Trạng thái:** Đã thống nhất thiết kế (Approved)  
**Tài liệu tham chiếu:** Repository UI: `https://github.com/quang3215/eel-ui.git`

---

## 1. Tổng quan & Mục tiêu Dự án

### 1.1. Bối cảnh
Website hiện tại của Công ty Thu Mua Cáp Đồng Đức Minh hoạt động trên nền tảng **Astro 4**. Trang web cần được nâng cấp toàn diện về mặt thẩm mỹ, tỷ lệ chuyển đổi (Lead Generation cho Hotline / Zalo), tối ưu hóa SEO kỹ thuật đạt chuẩn Google 100/100 Core Web Vitals và bổ sung 10 bài viết chuyên sâu về thu mua cáp đồng nhằm gia tăng lưu lượng truy cập tìm kiếm tự nhiên.

### 1.2. Mục tiêu cụ thể
1. **Giao diện chuẩn `eel-ui`:** Chuyển đổi và tái thiết kế toàn bộ hệ thống giao diện website theo chuẩn thiết kế hiện đại, tinh tế của thư viện `quang3215/eel-ui` (Header, Hero, Feature grid, Pricing table, Process flow, Testimonials, FAQ accordion, Footer, Floating CTA, Mobile bottom navigation).
2. **Bảo toàn nhận diện thương hiệu:** Giữ vững tông màu đỏ thương hiệu chủ đạo (`#c90000`) phối cùng sắc vàng cam kim loại (`#f59e0b`), các nút gọi hotline (`#d9534f`) và nút Zalo (`#0068ff`).
3. **Hiệu năng & Tối ưu SEO tối đa (Top-tier SEO):**
   - Pure Astro + Tailwind CSS (Zero-JS mặc định, không bloatware) đảm bảo điểm Google PageSpeed 98-100/100, LCP < 0.8s, CLS = 0.
   - Hệ thống Schema JSON-LD đa tầng (`LocalBusiness`, `Organization`, `FAQPage`, `BreadcrumbList`, `Article`).
   - Tích hợp `@astrojs/sitemap`, tạo tự động `sitemap-index.xml` và `robots.txt`.
   - Semantic HTML5 hoàn chỉnh với phân cấp thẻ Heading (H1, H2, H3), meta Open Graph, Twitter Cards, canonical URL.
4. **Sản xuất 10 bài viết Cáp Đồng:** Viết mới 10 bài viết chuyên sâu chuẩn SEO về cáp đồng, sử dụng đúng các hình ảnh thực tế có sẵn trong thư mục `public/`.

---

## 2. Kiến trúc Công nghệ & Design Tokens

### 2.1. Tech Stack
- **Framework:** Astro 4 (SSG - Static Site Generation)
- **Styling Engine:** Tailwind CSS (`@astrojs/tailwind` + Tailwind CSS)
- **Icons:** SVG tinh gọn lấy từ hệ thống icon chuẩn của `eel-ui` (Lucide Icons dạng inline SVG để đạt Zero runtime client bundle).
- **SEO Tooling:** `@astrojs/sitemap`, custom JSON-LD generator helper.

### 2.2. Design Tokens (`tailwind.config.mjs` & CSS Variables)
```css
:root {
  /* Brand Colors */
  --primary: #c90000;
  --primary-dark: #8b0000;
  --primary-light: #ef4444;
  --gold: #f59e0b;
  --gold-dark: #d97706;
  --zalo: #0068ff;
  --phone: #dc2626;

  /* Surfaces & Text */
  --background: #f8fafc;
  --foreground: #0f172a;
  --surface: #ffffff;
  --surface-muted: #f1f5f9;
  --text-muted: #64748b;
  --border: #e2e8f0;

  /* Border Radius */
  --radius: 0.75rem;
}
```

---

## 3. Hệ thống Component UI (Modular `eel-ui` in Astro)

Tất cả component được xây dựng dưới dạng `.astro` components thuần tại `src/components/`:

### 3.1. Shell Components (`src/components/shell/`)
- `DesktopHeader.astro`: Thanh header cố định (Sticky glassmorphism), logo công ty, menu danh mục dịch vụ đa cấp, thông tin hotline hiển thị dạng badge nổi bật, nút CTA "Nhận Báo Giá".
- `MobileDrawer.astro`: Menu trượt phía cạnh điện thoại, đóng mở nhẹ nhàng bằng CSS/JS siêu nhẹ.
- `FloatingStickyCTA.astro`: Nút Hotline & Zalo dạng bong bóng nổi góc phải màn hình với hiệu ứng radar pulse thu hút cuộc gọi.
- `MobileBottomNav.astro`: Thanh điều hướng chân màn hình chuẩn App di động (Gọi điện trực tiếp, Nhắn Zalo, Xem bảng giá, Báo giá nhanh).
- `ConversionFooter.astro`: Chân trang đầy đủ thông tin pháp lý, địa chỉ kho bãi (Hóc Môn, Bình Dương, Đồng Nai), giờ làm việc, hotline, bản đồ đường đi, link chính sách bảo mật.

### 3.2. Marketing Blocks (`src/components/marketing/`)
- `HeroHighConversion.astro`:
  - Badge khẩn cấp: `"🔥 Thu Mua Tận Nơi 24/7 - Giá Cao Hơn 30% Thị Trường"`.
  - H1 sắc nét: `"Thu Mua Cáp Đồng & Thiết Bị Điện Phế Liệu Giá Cao Tận Nơi"`.
  - Social Proof Rating: 4.9/5 ⭐ dựa trên 1.250+ giao dịch thành công.
  - Quick Metric Cards: 10+ năm kinh nghiệm, 500+ tấn/tháng, thanh toán 100% tại chỗ.
  - Nút kép CTA: [Gọi ngay 0936.350.118] & [Gửi ảnh báo giá qua Zalo].
- `PricingTable.astro`: Bảng giá phân loại trực quan (Đồng cáp loại 1, đồng đỏ loại 2, đồng vàng loại 3, cáp nhôm, pin mặt trời) với tag "Giá hôm nay" và hướng dẫn định giá.
- `FeaturesGrid.astro`: 4 - 6 thẻ lợi thế cạnh tranh với icon viền màu và background mềm (Giá cao nhất, Cân điện tử chuẩn, Xe cẩu bốc xếp miễn phí, Thanh toán 1 lần, Hoa hồng người giới thiệu).
- `ProcessFlow.astro`: 4 bước minh bạch (1. Tiếp nhận & khảo sát -> 2. Báo giá nhanh 5 phút -> 3. Thu gom & bốc xếp -> 4. Thanh toán 100%).
- `SocialProofTestimonials.astro`: Đánh giá phản hồi thực tế kèm ảnh đại diện từ các kỹ sư công trình, chủ kho xưởng và nhà thầu điện lực.
- `FaqAccordion.astro`: Khối accordion giải đáp thắc mắc khách hàng (khối lượng thu mua, chi phí vận chuyển, hình thức thanh toán, địa bàn hoạt động).

### 3.3. Content & Article Components (`src/components/blog/`)
- `ArticleCard.astro`: Thẻ bài viết tin tức với ảnh bìa bo góc chuẩn eel-ui, ngày đăng, thời gian đọc ước tính, tóm tắt ngắn và liên kết xem chi tiết.
- `Breadcrumb.astro`: Thanh điều hướng phân cấp (Trang chủ > Tin tức > Tiêu đề bài viết) hỗ trợ cả UX lẫn Schema SEO.
- `ArticleCtaBox.astro`: Hộp kêu gọi hành động đặt cuối mỗi bài viết với lời mời gửi ảnh cáp đồng qua Zalo để nhận báo giá nhanh.

---

## 4. Kiến trúc Hạ tầng SEO Kỹ thuật & On-Page

### 4.1. Meta Tags & Semantic Layout (`src/layouts/BaseLayout.astro`)
- Khai báo đầy đủ Canonical URL cho từng trang.
- Thẻ Open Graph (`og:title`, `og:description`, `og:image`, `og:url`, `og:type`, `og:site_name`, `og:locale`).
- Thẻ Twitter Card (`summary_large_image`).
- Phân cấp thẻ Heading logic (chỉ duy nhất 1 thẻ `<h1>` trên mỗi trang, các phần tử con dùng `<h2>` và `<h3>`).
- Thuộc tính ảnh chuẩn: Tất cả thẻ `<img>` đều có `alt` chi tiết, thuộc tính `width`, `height`, `loading="lazy"` (ngoại trừ ảnh Hero dùng `fetchpriority="high"`).

### 4.2. Hệ thống Schema JSON-LD
1. **Trang chủ (`/`):**
   - `LocalBusiness` & `Organization` (Tên: Công Ty Thu Mua Cáp Đồng Đức Minh, Điện thoại: `0936350118`, Địa chỉ: 14 ấp 2, Đông Thạnh, Hóc Môn, TP. HCM, Tọa độ GPS, Giờ mở cửa: 06:00 - 22:00, Phạm vi phục vụ: Toàn quốc, TP.HCM, Bình Dương, Đồng Nai, Long An).
   - `FAQPage`: Đầy đủ danh sách câu hỏi thường gặp.
2. **Trang Dịch vụ & Bảng giá:**
   - `Service` & `Product` / `Offer` cho từng loại kim loại thu mua.
   - `BreadcrumbList`.
3. **Trang Tin tức & Chi tiết bài viết (`/tin-tuc/[slug]`):**
   - `Article` / `NewsArticle` (headline, image, datePublished, dateModified, author, publisher, description).
   - `BreadcrumbList`.

### 4.3. Sitemap & Robots
- Tích hợp `@astrojs/sitemap` vào `astro.config.mjs` với `site: "https://thumuacapdonggiacao.com"`.
- Tạo file `public/robots.txt` cho phép tìm kiếm và chỉ định đường dẫn sitemap chính xác.

---

## 5. Danh Sách 10 Bài Viết Chuyên Sâu Về Cáp Đồng Chuẩn SEO

Các bài viết được lưu tại thư mục `src/content/tin-tuc/`, có frontmatter chuẩn và nội dung giá trị cao:

1. **`bi-quyet-thanh-ly-cap-dong-cong-trinh-gia-cao.md`**
   - *Tiêu đề:* Bí Quyết Thanh Lý Cáp Đồng Công Trình Giá Cao Nhất – Tránh Bị Ép Giá
   - *Ảnh đại diện & chèn trong bài:* `/img/hinh-anh-thuc-te/anh-01.webp`
   - *Từ khóa chính:* thanh lý cáp đồng công trình, giá thu mua cáp đồng, bán cáp điện cũ giá cao
2. **`quy-trinh-thu-gom-cap-dong-so-luong-lon-tan-noi.md`**
   - *Tiêu đề:* Quy Trình Thu Gom Và Bốc Xếp Cáp Đồng Số Lượng Lớn Tận Nơi Trong Ngày
   - *Ảnh đại diện & chèn trong bài:* `/img/hinh-anh-thuc-te/anh-02.webp`
   - *Từ khóa chính:* quy trình thu mua cáp đồng, thu mua cáp điện tận nơi, xe cẩu bốc xếp phế liệu
3. **`phan-biet-cap-dong-ngam-trung-the-ha-the-phe-lieu.md`**
   - *Tiêu đề:* Phân Biệt Cáp Đồng Ngầm Trung Thế, Hạ Thế Và Cách Định Giá Phế Liệu
   - *Ảnh đại diện & chèn trong bài:* `/img/thu-mua-cap-dong-thiet-bi-dien/thu-mua-cap-dong.webp`
   - *Từ khóa chính:* cáp ngầm trung thế phế liệu, giá cáp đồng hạ thế, định giá cáp đồng cũ
4. **`uu-diem-may-tuot-vo-cap-tu-dong-khi-ban-phe-lieu.md`**
   - *Tiêu đề:* Tại Sao Nên Chọn Đơn Vị Có Máy Tuốt Vỏ Cáp Tự Động Khi Bán Phế Liệu?
   - *Ảnh đại diện & chèn trong bài:* `/img/hinh-anh-thuc-te/anh-03.webp`
   - *Từ khóa chính:* máy tuốt vỏ cáp tự động, cách tách vỏ dây điện lấy đồng, thu mua cáp đồng nguyên cuộn
5. **`tieu-chuan-phan-loai-phe-lieu-dong-do-dong-vang.md`**
   - *Tiêu đề:* Cập Nhật Tiêu Chuẩn Phân Loại Phế Liệu Cáp Đồng Đỏ, Đồng Vàng Mới Nhất
   - *Ảnh đại diện & chèn trong bài:* `/img/thu-mua-cap-dong-thiet-bi-dien/thu-mua-cap-dien-day-dan.webp`
   - *Từ khóa chính:* phân loại đồng phế liệu, đồng đỏ cáp loại 1, đồng vàng thau phế liệu
6. **`kinh-nghiem-thanh-ly-day-cap-dien-3-pha-nha-xuong.md`**
   - *Tiêu đề:* Kinh Nghiệm Thanh Lý Dây Cáp Điện 3 Pha, Cáp Điều Khiển Cho Nhà Xưởng
   - *Ảnh đại diện & chèn trong bài:* `/img/hinh-anh-thuc-te/anh-04.webp`
   - *Từ khóa chính:* thanh lý cáp điện 3 pha, cáp điều khiển nhà xưởng cũ, bán dây điện công nghiệp
7. **`chinh-sach-hoa-hong-nguoi-gioi-thieu-nguon-cap-dong.md`**
   - *Tiêu đề:* Chính Sách Hoa Hồng Cao Dành Cho Người Giới Thiệu Nguồn Cáp Đồng Phế Liệu
   - *Ảnh đại diện & chèn trong bài:* `/img/hinh-anh-thuc-te/anh-05.webp`
   - *Từ khóa chính:* hoa hồng giới thiệu phế liệu, chiết khấu người giới thiệu thu mua cáp đồng
8. **`thu-mua-cap-dong-chay-day-dien-ton-kho-thanh-ly.md`**
   - *Tiêu đề:* Dịch Vụ Thu Mua Cáp Đồng Cháy, Dây Điện Cũ Tồn Kho Thanh Lý Trọn Gói
   - *Ảnh đại diện & chèn trong bài:* `/img/thu-mua-cap-dong-thiet-bi-dien/thu-mua-cap-dong-gia-cao.webp`
   - *Từ khóa chính:* thu mua đồng cháy, thanh lý dây điện tồn kho, phế liệu cáp đồng hỏng
9. **`so-sanh-gia-tri-tai-che-cap-dong-cadivi-lsvina.md`**
   - *Tiêu đề:* So Sánh Giá Trị Tái Chế Của Cáp Đồng Cadivi, LS-VINA, Daphaco Phế Liệu
   - *Ảnh đại diện & chèn trong bài:* `/img/hinh-anh-thuc-te/anh-06.webp`
   - *Từ khóa chính:* cáp đồng cadivi phế liệu, giá cáp ls vina cũ, tỷ lệ đồng dây daphaco
10. **`giai-phap-giai-phong-mat-bang-thu-don-he-thong-dien.md`**
    - *Tiêu đề:* Giải Pháp Giải Phóng Mặt Bằng Nhà Xưởng, Thu Dọn Hệ Thống Điện Cũ An Toàn
    - *Ảnh đại diện & chèn trong bài:* `/img/thu-mua-cap-dong-thiet-bi-dien/thanh-ly-he-thong-dien-nha-xuong.webp`
    - *Từ khóa chính:* thu dọn hệ thống điện nhà xưởng, phá dỡ cáp điện cũ, giải phóng mặt bằng kho bãi

---

## 6. Kế Hoạch Kiểm Tra & Đánh Giá Chất Lượng (QA / Verification)

1. **Build & Type Check:**
   - Chạy lệnh `npm run build` đảm bảo không có lỗi render, lỗi import hay lỗi TypeScript.
2. **Lighthouse / Core Web Vitals Audit:**
   - Performance: >= 95
   - Accessibility: >= 95
   - Best Practices: 100
   - SEO: 100
3. **Structured Data Validation:**
   - Kiểm tra định dạng JSON-LD hợp lệ qua Google Rich Results Test format.
4. **Mobile Responsiveness:**
   - Kiểm tra hiển thị chuẩn trên màn hình iPhone, Android và Desktop (không bị tràn chiều ngang, nút bấm dễ chạm, menu drawer mượt mà).
5. **Content Quality Check:**
   - Kiểm tra đường dẫn 10 bài viết mới, hiển thị đúng ảnh và hoạt động đầy đủ trên trang danh sách `/tin-tuc/`.
