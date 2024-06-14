let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.querySelectorAll('.slides jpeg');
    slides.forEach((slide, index) => {
        slide.style.display = 'none';
        slide.style.transform = 'scale(1.1)'; // Start zoomed in
    });
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = 'block';
    setTimeout(() => {
        slides[slideIndex - 1].style.transform = 'scale(1)'; // Zoom out
    }, 100); // Delay to allow display change to take effect
    setTimeout(showSlides, 5000); // Change image every 5 seconds
}
