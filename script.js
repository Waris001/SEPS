// Navbar color change on scroll
window.addEventListener("scroll", function () {

    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});
const links = document.querySelectorAll(".menu-link");

links.forEach(link => {
    link.addEventListener("click", function () {
        links.forEach(l => l.classList.remove("active"));
        this.classList.add("active");
    });
});
const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {
    const update = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;

        const increment = target / 100;

        if (count < target) {
            counter.innerText = Math.ceil(count + increment);
            setTimeout(update, 20);
        } else {
            counter.innerText = target;
        }
    };
    update();
});
const topBtn = document.getElementById("topBtn");

window.onscroll = () => {
    topBtn.style.display =
        document.documentElement.scrollTop > 300 ? "block" : "none";
};

topBtn.onclick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
};
const carousel = document.querySelector('#schoolCarousel');

new bootstrap.Carousel(carousel, {
    interval: 4000, // change every 4 seconds
    pause: false,
    ride: 'carousel'
});