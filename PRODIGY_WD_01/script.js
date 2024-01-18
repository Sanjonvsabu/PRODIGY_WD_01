document.addEventListener("DOMContentLoaded", function () {
    let scrollPosition = 0;
    const body = document.querySelector("body");

    window.addEventListener("scroll", function () {
        const newScrollPosition = window.scrollY;

        // Toggle class based on scroll direction
        if (newScrollPosition > scrollPosition) {
            body.classList.add("scroll-down");
            body.classList.remove("scroll-up");
        } else {
            body.classList.remove("scroll-down");
            body.classList.add("scroll-up");
        }

        scrollPosition = newScrollPosition;
    });
});
