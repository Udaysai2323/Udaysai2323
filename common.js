/* ===============================
   Common Utilities
   =============================== */

document.addEventListener("DOMContentLoaded", () => {
  // Smooth scroll (if needed later)
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", e => {
      e.preventDefault();
      document.querySelector(anchor.getAttribute("href"))
        ?.scrollIntoView({ behavior: "smooth" });
    });
  });
});
