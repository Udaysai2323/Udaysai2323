// Fade in on page load
window.addEventListener("DOMContentLoaded", () => {
    document.body.classList.remove("fade-out");
});

// Fade out before navigating
document.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", event => {
        const href = link.getAttribute("href");

        // Ignore external links & anchors
        if (
            !href ||
            href.startsWith("#") ||
            href.startsWith("http") ||
            href.startsWith("mailto")
        ) return;

        event.preventDefault();
        document.body.classList.add("fade-out");

        setTimeout(() => {
            window.location.href = href;
        }, 450);
    });
});
