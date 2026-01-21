function setTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
}

// Apply theme on every page load
(function () {
  const savedTheme = localStorage.getItem("theme") || "bright";
  document.documentElement.setAttribute("data-theme", savedTheme);
})();
