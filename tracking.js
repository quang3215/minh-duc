// File: tracking.js

// Lấy ID của Google Tag Manager
const GTM_ID = "GTM-NW8X6RD3"; // <-- ID GTM của bạn

// Hàm để tải script Google Tag Manager
(function (w, d, s, l, i) {
  w[l] = w[l] || [];
  w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
  var f = d.getElementsByTagName(s)[0],
    j = d.createElement(s),
    dl = l != "dataLayer" ? "&l=" + l : "";
  j.async = true;
  j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
  f.parentNode.insertBefore(j, f);
})(window, document, "script", "dataLayer", GTM_ID);

console.log("Google Tag Manager has been loaded.");
