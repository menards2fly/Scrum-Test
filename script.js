document.addEventListener("DOMContentLoaded", function() {
    const loader = document.getElementById("loader-wrapper");
    if (loader) {
        loader.style.display = "none";
    }
    const faders = document.querySelectorAll(".fade-in");
    faders.forEach(function(element) {
        const delay = parseInt(element.getAttribute("data-delay"), 10) || 0;
        setTimeout(function() {
            element.classList.add("appear");
        }, delay);
    });
});