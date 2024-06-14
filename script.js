let slideIndex = 0;
let slides = document.querySelectorAll('.slides img');
const totalSlides = slides.length;
const slider = document.getElementById('slider');

function showSlides() {
    slides.forEach((slide, index) => {
        slide.style.display = 'none';
    });
    slideIndex++;
    if (slideIndex > totalSlides) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = 'block';
    setTimeout(showSlides, 5000); // Change image every 5 seconds
}

function manualSlide(direction) {
    slides[slideIndex - 1].style.display = 'none';
    if (direction === 'next') {
        slideIndex++;
        if (slideIndex > totalSlides) { slideIndex = 1 }
    } else if (direction === 'prev') {
        slideIndex--;
        if (slideIndex < 1) { slideIndex = totalSlides }
    }
    slides[slideIndex - 1].style.display = 'block';
}

function handleSwipe() {
    let touchstartX = 0;
    let touchendX = 0;

    function checkDirection() {
        if (touchendX < touchstartX) manualSlide('next');
        if (touchendX > touchstartX) manualSlide('prev');
    }

    slider.addEventListener('touchstart', e => {
        touchstartX = e.changedTouches[0].screenX;
    });

    slider.addEventListener('touchend', e => {
        touchendX = e.changedTouches[0].screenX;
        checkDirection();
    });
}

document.addEventListener('DOMContentLoaded', () => {
    showSlides();
    handleSwipe();
});
