document.addEventListener("DOMContentLoaded", function () {

    const intervalTime = 5000; // Change slide every 5 seconds
    const transitionTime = 0.8; // Smooth transition in seconds
    const slides = document.querySelector(".slides");
    const images = document.querySelectorAll(".slides img");
    const prevBtn = document.querySelector(".prev");
    const nextBtn = document.querySelector(".next");

    let currentIndex = 0;
    const totalSlides = images.length;
    const slideIntervalTime = 3000; // 3 seconds
    let slideInterval;

    function showSlide(index) {
        slides.style.transform = `translateX(-${index * 100}vw)`;
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % totalSlides;
        showSlide(currentIndex);
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        showSlide(currentIndex);
    }

    function startAutoSlide() {
        slideInterval = setInterval(nextSlide, slideIntervalTime);
    }

    function stopAutoSlide() {
        clearInterval(slideInterval);
    }

    // Button click events
    nextBtn.addEventListener("click", () => {
        stopAutoSlide();
        nextSlide();
        startAutoSlide();
    });

    prevBtn.addEventListener("click", () => {
        stopAutoSlide();
        prevSlide();
        startAutoSlide();
    });

    // Start slider
    showSlide(currentIndex);
    startAutoSlide();

    // Number Counter Animation with "+" appended
    function animateCounter(element, target) {
        let start = 0;
        const duration = 2000;
        const step = Math.ceil(target / (duration / 50));

        const displayPlus = element.getAttribute("data-plus") === "true"; // Optional flag

        function updateCounter() {
            start += step;
            if (start >= target) {
                clearInterval(timer);
                element.textContent = displayPlus ? `${target}+` : target;
            } else {
                element.textContent = start;
            }
        }
        let timer = setInterval(updateCounter, 20);
    }

    const statElements = document.querySelectorAll(".stat-number");

    const observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && entry.target instanceof Element) {
                    const target = parseInt(entry.target.getAttribute("data-target"));
                    animateCounter(entry.target, target);
                    observer.unobserve(entry.target); // Only unobserve valid elements
                }
            });
        },
        { threshold: 0.5 }
    );

    statElements.forEach(element => observer.observe(element));
});
