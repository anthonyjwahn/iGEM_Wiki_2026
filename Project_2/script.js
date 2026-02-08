let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("slides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex - 1].style.display = "flex";
    slides[slideIndex - 1].style.justifyContent = "center";
    setTimeout(showSlides, 4000);
}

document.addEventListener('DOMContentLoaded', () => {
    const fadeInElements = document.querySelectorAll('.fade-in-element');

    const observerOptions = {
        root: null, // observe against the viewport
        rootMargin: '0px',
        threshold: 0.4 // Trigger when 10% of the element is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add the class to start the animation
                entry.target.classList.add('is-visible');
                // Optional: Stop observing the element after it has appeared once
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Start observing all elements
    fadeInElements.forEach(element => {
        observer.observe(element);
    });
});