// JavaScript for handling slider functionality
let currentSlide = 0;

const slides = document.querySelectorAll(".slide-container");

function changeSlide(direction) {
    currentSlide += direction;

    if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    } else if (currentSlide >= slides.length) {
        currentSlide = 0;
    }

    const slidesContainer = document.querySelector(".slides-container");
    slidesContainer.style.transform = `translateX(-${100 * currentSlide}%)`;
}

// Set interval to change slides automatically
setInterval(() => {
    changeSlide(1);
}, 5000);
