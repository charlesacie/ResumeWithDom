
document.addEventListener('DOMContentLoaded', function () {
    //Look up why function does not need value inside parentheses
    const carouselImages = document.querySelector('.carousel-images');
    const images = document.querySelectorAll('.carousel-image');
    const prevButton = document.querySelector('.carousel-button.prev');
    const nextButton = document.querySelector('.carousel-button.next');

    let currentIndex = 0;

    function updateCarousel() {
        const offset = -currentIndex * 100;
        carouselImages.style.transform = `translateX(${offset}%)`;
    }
    // Ask Jordan why carousel wont move 

    prevButton.addEventListener('click', function () {
        currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
        updateCarousel();
    });

    nextButton.addEventListener('click', function () {
        currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
        updateCarousel();
    });

    document.addEventListener('keydown', function (event) {
        if (event.key === 'ArrowLeft') {
            prevButton.click();
        } else if (event.key === 'ArrowRight') {
            nextButton.click();
        }
    });

    let autoSlideInterval = setInterval(() => {
        nextButton.click();
    }, 3000);
 
    document.querySelector('.carousel').addEventListener('mouseenter', () => {
        clearInterval(autoSlideInterval);
    });

    document.querySelector('.carousel').addEventListener('mouseleave', () => {
        autoSlideInterval = setInterval(() => {
            nextButton.click();
        }, 3000);
    });
});