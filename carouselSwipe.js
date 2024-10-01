let currentIndex = 0;

function plusSlides(n) {
    const carousel = document.querySelector('.carousel');
    const slides = document.querySelectorAll('.teamfigure');
    currentIndex += n;

    // Loop back if at the beginning or end
    if (currentIndex >= slides.length) {
        currentIndex = 0;
    } else if (currentIndex < 0) {
        currentIndex = slides.length - 1;
    }

    // Update the carousel's transform to slide
    carousel.style.transform = `translateX(${-currentIndex * 100}%)`;
}
