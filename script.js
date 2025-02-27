// Funkcja wykonująca się po załadowaniu strony
document.addEventListener('DOMContentLoaded', () => {
    // Obsługa menu mobilnego
    const mobileMenuButton = document.querySelector('.mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    mobileMenuButton.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Dodajemy tekst do nagłówka
    const header = document.querySelector('header');
    header.innerHTML = '<h1>Witaj na mojej stronie!</h1>';
    
    // Dodajemy przycisk, który zmieni kolor nagłówka po kliknięciu
    const button = document.createElement('button');
    button.textContent = 'Zmień kolor';
    header.appendChild(button);
    
    // Obsługa kliknięcia przycisku
    button.addEventListener('click', () => {
        const h1 = document.querySelector('h1');
        h1.style.color = '#' + Math.floor(Math.random()*16777215).toString(16);
    });

    // Obsługa slidera
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    let currentSlide = 0;

    function updateSlider() {
        slider.style.transform = `translateX(-${currentSlide * 100}%)`;
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        updateSlider();
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        updateSlider();
    }

    // Obsługa przycisków
    nextButton.addEventListener('click', nextSlide);
    prevButton.addEventListener('click', prevSlide);

    // Automatyczne przewijanie co 5 sekund
    setInterval(nextSlide, 5000);

    // Symulacja koszyka
    let cartCount = 0;
    const cartCountElement = document.querySelector('.cart-count');
    
    // Aktualizacja liczby przedmiotów w koszyku (przykład)
    setInterval(() => {
        if (Math.random() > 0.9) {
            cartCount++;
            cartCountElement.textContent = cartCount;
            cartCountElement.style.animation = 'none';
            cartCountElement.offsetHeight; // Trigger reflow
            cartCountElement.style.animation = 'pulse 0.5s';
        }
    }, 3000);
});
