# eel-ui Redesign, Technical SEO & 10 Articles Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Redesign the entire website with high-converting eel-ui components, achieve maximum Google SEO score & Core Web Vitals, and publish 10 in-depth copper cable articles with existing images.

**Architecture:** Port eel-ui UI design blocks to Native Astro + Tailwind CSS with zero runtime JavaScript by default, implement comprehensive JSON-LD structured schemas, modern semantic layouts, responsive shell navigation, and 10 markdown articles in the content collection.

**Tech Stack:** Astro 4, Tailwind CSS (`@astrojs/tailwind`), `@astrojs/sitemap`, Markdown Content Collections, Schema.org JSON-LD.

**Spec:** `docs/superpowers/specs/2026-08-25-redesign-eel-ui-seo-news.md`

## Global Constraints

- Retain brand color identity: Primary red (`#c90000`), Gold/amber (`#f59e0b`), Hotline (`#dc2626` / `0936350118`), Zalo (`#0068ff` / `https://zalo.me/0936350118`).
- Zero-JS by default for marketing content to maintain 100/100 Core Web Vitals.
- All images must include meaningful Vietnamese `alt` attributes, `width`, `height`, and `loading="lazy"` (except hero LCP image).
- Maintain existing routes and permalinks to avoid 404 broken links.

---

### Task 1: Setup Tailwind CSS & Design Tokens in Astro

**Files:**
- Modify: `package.json`
- Modify: `astro.config.mjs`
- Create: `tailwind.config.mjs`
- Create: `src/styles/global.css`

**Interfaces:**
- Produces: Tailwind utility classes and CSS variables for `--primary`, `--gold`, `--zalo`, `--phone`, card surfaces, and shadows.

- [ ] **Step 1: Install `@astrojs/tailwind` and `@astrojs/sitemap`**

```bash
npm install @astrojs/tailwind tailwindcss @astrojs/sitemap --save
```

- [ ] **Step 2: Update `astro.config.mjs` with Tailwind and Sitemap integrations**

```javascript
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://thumuacapdonggiacao.com',
  integrations: [tailwind(), sitemap()],
});
```

- [ ] **Step 3: Create `tailwind.config.mjs` with eel-ui design tokens and brand colors**

```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: {
          red: '#c90000',
          'red-dark': '#8b0000',
          'red-light': '#ef4444',
          gold: '#f59e0b',
          'gold-dark': '#d97706',
          zalo: '#0068ff',
          phone: '#dc2626',
        },
      },
      fontFamily: {
        sans: ['Roboto', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
      },
      boxShadow: {
        'soft-sm': '0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04)',
        'soft-md': '0 4px 16px rgba(0,0,0,0.08), 0 2px 6px rgba(0,0,0,0.04)',
        'soft-lg': '0 12px 40px rgba(0,0,0,0.10), 0 4px 12px rgba(0,0,0,0.06)',
        'glow-red': '0 8px 24px rgba(201,0,0,0.30)',
        'glow-gold': '0 8px 24px rgba(245,158,11,0.35)',
      },
    },
  },
  plugins: [],
};
```

- [ ] **Step 4: Create `src/styles/global.css`**

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --primary: #c90000;
    --primary-dark: #8b0000;
    --gold: #f59e0b;
    --zalo: #0068ff;
    --phone: #dc2626;
  }

  html {
    scroll-behavior: smooth;
    -webkit-text-size-adjust: 100%;
  }

  body {
    @apply bg-slate-50 text-slate-900 antialiased font-sans;
  }
}
```

- [ ] **Step 5: Verify build passes with Tailwind**

Run: `npm run build`
Expected: Build passes without errors.

- [ ] **Step 6: Commit Task 1**

```bash
git add package.json package-lock.json astro.config.mjs tailwind.config.mjs src/styles/global.css
git commit -m "feat: setup Tailwind CSS and design tokens for eel-ui redesign"
```

---

### Task 2: Build Base UI & Shell Components (eel-ui Modular Components)

**Files:**
- Create: `src/components/ui/Badge.astro`
- Create: `src/components/ui/Button.astro`
- Create: `src/components/ui/Card.astro`
- Create: `src/components/shell/DesktopHeader.astro`
- Create: `src/components/shell/MobileDrawer.astro`
- Create: `src/components/shell/FloatingStickyCTA.astro`
- Create: `src/components/shell/MobileBottomNav.astro`
- Create: `src/components/shell/ConversionFooter.astro`

**Interfaces:**
- Produces: Complete reusable shell navigation and layout wrappers for all pages.

- [ ] **Step 1: Create `src/components/ui/Badge.astro`, `Button.astro`, and `Card.astro`**
- [ ] **Step 2: Create `src/components/shell/DesktopHeader.astro` with sticky bar, logo, services dropdown, hotline badge, and quick quote CTA**
- [ ] **Step 3: Create `src/components/shell/MobileDrawer.astro` with lightweight vanilla JS slide-over**
- [ ] **Step 4: Create `src/components/shell/FloatingStickyCTA.astro` with pulsating Hotline & Zalo buttons**
- [ ] **Step 5: Create `src/components/shell/MobileBottomNav.astro` with 4 action tabs (Gọi ngay, Zalo, Bảng giá, Báo giá)**
- [ ] **Step 6: Create `src/components/shell/ConversionFooter.astro` with business info, office addresses, legal links, working hours, and map**
- [ ] **Step 7: Verify component rendering and commit**

```bash
git add src/components/ui/ src/components/shell/
git commit -m "feat: create eel-ui shell and base UI components"
```

---

### Task 3: Build Marketing Blocks (eel-ui High-Conversion Components)

**Files:**
- Create: `src/components/marketing/HeroHighConversion.astro`
- Create: `src/components/marketing/PricingTable.astro`
- Create: `src/components/marketing/FeaturesGrid.astro`
- Create: `src/components/marketing/ProcessFlow.astro`
- Create: `src/components/marketing/SocialProofTestimonials.astro`
- Create: `src/components/marketing/FaqAccordion.astro`

**Interfaces:**
- Produces: Reusable conversion blocks for Home and Landing pages.

- [ ] **Step 1: Create `src/components/marketing/HeroHighConversion.astro` with urgent banner, headline, trust stats, social proof rating, and dual CTAs**
- [ ] **Step 2: Create `src/components/marketing/PricingTable.astro` with categorized prices for Grade 1, 2, 3 copper cables, aluminum, and solar panels**
- [ ] **Step 3: Create `src/components/marketing/FeaturesGrid.astro` with 6 feature cards and gradient icons**
- [ ] **Step 4: Create `src/components/marketing/ProcessFlow.astro` with 4-step visual flow**
- [ ] **Step 5: Create `src/components/marketing/SocialProofTestimonials.astro` with verified customer reviews and realistic project photos**
- [ ] **Step 6: Create `src/components/marketing/FaqAccordion.astro` with semantic `<details>` / `<summary>` tags for 100% accessible zero-JS accordion and FAQ Schema support**
- [ ] **Step 7: Verify component build and commit**

```bash
git add src/components/marketing/
git commit -m "feat: create high-conversion marketing blocks inspired by eel-ui"
```

---

### Task 4: Overhaul BaseLayout with Rich Schema JSON-LD & Technical SEO

**Files:**
- Modify: `src/layouts/BaseLayout.astro`
- Create: `public/robots.txt`

**Interfaces:**
- Consumes: Props (`title`, `description`, `canonical`, `ogImage`, `ogType`, `schema`, `keywords`, `noindex`).
- Produces: Complete HTML5 head, Open Graph, Twitter cards, Preload tags, Global CSS, and Multi-layer JSON-LD.

- [ ] **Step 1: Overhaul `src/layouts/BaseLayout.astro` integrating Tailwind `global.css`, `DesktopHeader`, `MobileDrawer`, `FloatingStickyCTA`, `MobileBottomNav`, and `ConversionFooter`**
- [ ] **Step 2: Embed default Schema.org (`LocalBusiness`, `Organization`, `WebSite`) with dynamic per-page schemas**
- [ ] **Step 3: Create `public/robots.txt` pointing to `https://thumuacapdonggiacao.com/sitemap-index.xml`**
- [ ] **Step 4: Run build check**

```bash
npm run build
```

- [ ] **Step 5: Commit Task 4**

```bash
git add src/layouts/BaseLayout.astro public/robots.txt
git commit -m "feat: overhaul BaseLayout with advanced SEO, schemas, and eel-ui shell"
```

---

### Task 5: Redesign Main Pages (Home, Pricing, Services, Contact)

**Files:**
- Modify: `src/pages/index.astro`
- Modify: `src/pages/bang-gia/index.astro`
- Modify: `src/pages/dich-vu/index.astro`
- Modify: `src/pages/quy-trinh/index.astro`
- Modify: `src/pages/gioi-thieu/index.astro`
- Modify: `src/pages/lien-he/index.astro`
- Modify: `src/pages/thu-mua-cap-dong-thiet-bi-dien/index.astro`
- Modify: `src/pages/thu-mua-cap-dong-tphcm/index.astro`
- Modify: `src/pages/thu-mua-nhom/index.astro`
- Modify: `src/pages/thu-mua-inox/index.astro`
- Modify: `src/pages/thu-mua-pin-nang-luong-mat-troi/index.astro`

- [ ] **Step 1: Redesign `src/pages/index.astro` combining `HeroHighConversion`, `PricingTable`, `FeaturesGrid`, `ProcessFlow`, `SocialProofTestimonials`, `FaqAccordion`, and News Preview**
- [ ] **Step 2: Redesign `src/pages/bang-gia/index.astro` with full interactive pricing table, calculation guide, and quick quote form**
- [ ] **Step 3: Update `src/pages/dich-vu/index.astro`, `quy-trinh`, `gioi-thieu`, and `lien-he`**
- [ ] **Step 4: Update specialized service pages (`thu-mua-cap-dong-thiet-bi-dien`, `thu-mua-cap-dong-tphcm`, `nhom`, `inox`, `pin-nang-luong-mat-troi`)**
- [ ] **Step 5: Verify build passes**

```bash
npm run build
```

- [ ] **Step 6: Commit Task 5**

```bash
git add src/pages/
git commit -m "feat: redesign main pages and service landing pages with eel-ui"
```

---

### Task 6: Redesign Blog List & Article Layout (`/tin-tuc/`, `[...slug].astro`)

**Files:**
- Create: `src/components/blog/ArticleCard.astro`
- Create: `src/components/blog/Breadcrumb.astro`
- Create: `src/components/blog/ArticleCtaBox.astro`
- Modify: `src/pages/tin-tuc/[...page].astro`
- Modify: `src/pages/tin-tuc/[...slug].astro`

- [ ] **Step 1: Create `src/components/blog/ArticleCard.astro` with eel-ui card styling, date badge, reading time, and thumbnail**
- [ ] **Step 2: Create `src/components/blog/Breadcrumb.astro` with Schema BreadcrumbList support**
- [ ] **Step 3: Create `src/components/blog/ArticleCtaBox.astro` with high-conversion Zalo price estimation invite**
- [ ] **Step 4: Update `src/pages/tin-tuc/[...page].astro` with responsive grid and pagination**
- [ ] **Step 5: Update `src/pages/tin-tuc/[...slug].astro` with clean typography, automatic Schema Article JSON-LD, TOC styling, and related articles grid**
- [ ] **Step 6: Verify build passes and commit**

```bash
git add src/components/blog/ src/pages/tin-tuc/
git commit -m "feat: redesign news listing and single article template with eel-ui standards"
```

---

### Task 7: Create 10 In-depth SEO Articles on Cáp Đồng with Existing Images

**Files:**
- Create: `src/content/tin-tuc/bi-quyet-thanh-ly-cap-dong-cong-trinh-gia-cao.md`
- Create: `src/content/tin-tuc/quy-trinh-thu-gom-cap-dong-so-luong-lon-tan-noi.md`
- Create: `src/content/tin-tuc/phan-biet-cap-dong-ngam-trung-the-ha-the-phe-lieu.md`
- Create: `src/content/tin-tuc/uu-diem-may-tuot-vo-cap-tu-dong-khi-ban-phe-lieu.md`
- Create: `src/content/tin-tuc/tieu-chuan-phan-loai-phe-lieu-dong-do-dong-vang.md`
- Create: `src/content/tin-tuc/kinh-nghiem-thanh-ly-day-cap-dien-3-pha-nha-xuong.md`
- Create: `src/content/tin-tuc/chinh-sach-hoa-hong-nguoi-gioi-thieu-nguon-cap-dong.md`
- Create: `src/content/tin-tuc/thu-mua-cap-dong-chay-day-dien-ton-kho-thanh-ly.md`
- Create: `src/content/tin-tuc/so-sanh-gia-tri-tai-che-cap-dong-cadivi-lsvina.md`
- Create: `src/content/tin-tuc/giai-phap-giai-phong-mat-bang-thu-don-he-thong-dien.md`

- [ ] **Step 1: Write Article 1: `bi-quyet-thanh-ly-cap-dong-cong-trinh-gia-cao.md` (Image: `/img/hinh-anh-thuc-te/anh-01.webp`)**
- [ ] **Step 2: Write Article 2: `quy-trinh-thu-gom-cap-dong-so-luong-lon-tan-noi.md` (Image: `/img/hinh-anh-thuc-te/anh-02.webp`)**
- [ ] **Step 3: Write Article 3: `phan-biet-cap-dong-ngam-trung-the-ha-the-phe-lieu.md` (Image: `/img/thu-mua-cap-dong-thiet-bi-dien/thu-mua-cap-dong.webp`)**
- [ ] **Step 4: Write Article 4: `uu-diem-may-tuot-vo-cap-tu-dong-khi-ban-phe-lieu.md` (Image: `/img/hinh-anh-thuc-te/anh-03.webp`)**
- [ ] **Step 5: Write Article 5: `tieu-chuan-phan-loai-phe-lieu-dong-do-dong-vang.md` (Image: `/img/thu-mua-cap-dong-thiet-bi-dien/thu-mua-cap-dien-day-dan.webp`)**
- [ ] **Step 6: Write Article 6: `kinh-nghiem-thanh-ly-day-cap-dien-3-pha-nha-xuong.md` (Image: `/img/hinh-anh-thuc-te/anh-04.webp`)**
- [ ] **Step 7: Write Article 7: `chinh-sach-hoa-hong-nguoi-gioi-thieu-nguon-cap-dong.md` (Image: `/img/hinh-anh-thuc-te/anh-05.webp`)**
- [ ] **Step 8: Write Article 8: `thu-mua-cap-dong-chay-day-dien-ton-kho-thanh-ly.md` (Image: `/img/thu-mua-cap-dong-thiet-bi-dien/thu-mua-cap-dong-gia-cao.webp`)**
- [ ] **Step 9: Write Article 9: `so-sanh-gia-tri-tai-che-cap-dong-cadivi-lsvina.md` (Image: `/img/hinh-anh-thuc-te/anh-06.webp`)**
- [ ] **Step 10: Write Article 10: `giai-phap-giai-phong-mat-bang-thu-don-he-thong-dien.md` (Image: `/img/thu-mua-cap-dong-thiet-bi-dien/thanh-ly-he-thong-dien-nha-xuong.webp`)**
- [ ] **Step 11: Verify content parsing and commit**

```bash
git add src/content/tin-tuc/
git commit -m "feat: publish 10 in-depth copper cable SEO articles with existing media"
```

---

### Task 8: End-to-End Build Verification & SEO Audit

**Files:**
- All modified and created files

- [ ] **Step 1: Run full production build**

```bash
npm run build
```
Expected: Zero build errors, all static HTML files and sitemaps generated in `dist/`.

- [ ] **Step 2: Validate sitemap & schema output in generated HTML**
- [ ] **Step 3: Final git status check and verification commit**

```bash
git status
```
