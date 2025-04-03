document.addEventListener('DOMContentLoaded', () => {
    // Shop Now Alert
    function shopNow() {
        alert("Redirecting to the shop page...");
    }

    // Flavor Selection
    function handleFlavorSelection() {
        const flavorRadios = document.querySelectorAll('input[name="flavor"]');
        const flavorImages = document.querySelectorAll('.flavor-img');

        if (flavorRadios.length > 0) {
            flavorRadios.forEach(radio => {
                radio.addEventListener('change', () => {
                    flavorImages.forEach(img => img.classList.remove('active'));
                    const selectedFlavor = document.querySelector(`.flavor-img[alt="${radio.value.charAt(0).toUpperCase() + radio.value.slice(1)} Flavor"]`);
                    if (selectedFlavor) {
                        selectedFlavor.classList.add('active');
                    }
                });
            });
        }
    }

    // Image Carousel
    function initImageCarousel() {
        const carouselImages = document.querySelectorAll('.carousel-img');
        const prevBtn = document.querySelector('.carousel-btn.prev');
        const nextBtn = document.querySelector('.carousel-btn.next');
        let currentIndex = 0;

        function showImage(index) {
            carouselImages.forEach(img => img.classList.remove('active'));
            carouselImages[index].classList.add('active');
        }

        if (prevBtn && nextBtn) {
            prevBtn.addEventListener('click', () => {
                currentIndex = (currentIndex - 1 + carouselImages.length) % carouselImages.length;
                showImage(currentIndex);
            });

            nextBtn.addEventListener('click', () => {
                currentIndex = (currentIndex + 1) % carouselImages.length;
                showImage(currentIndex);
            });

            showImage(currentIndex); // Initialize the first image
        }
    }

    // Play Button Interactivity
    function initPlayButton() {
        const playButton = document.querySelector('.play-button');
        if (playButton) {
            playButton.addEventListener('click', () => {
                alert('Play video about Alcami!');
            });
        }
    }

    // Reviews Carousel
    function initReviewsCarousel() {
        let currentReview = 0;
        const reviews = document.querySelectorAll('.review');
        const dots = document.querySelectorAll('.dot');

        function updateCarousel() {
            reviews.forEach((review, index) => {
                review.classList.toggle('active', index === currentReview);
                dots[index].classList.toggle('active', index === currentReview);
            });
        }

        function moveCarousel(direction) {
            currentReview = direction === 'left' 
                ? (currentReview - 1 + reviews.length) % reviews.length
                : (currentReview + 1) % reviews.length;
            updateCarousel();
        }

        function goToReview(index) {
            currentReview = index;
            updateCarousel();
        }

        updateCarousel();
    }

    // FAQ Accordion
    function initFAQAccordion() {
        const faqHeaders = document.querySelectorAll('.faq-header');

        faqHeaders.forEach(header => {
            header.addEventListener('click', () => {
                const answer = header.nextElementSibling;
                const toggle = header.querySelector('.faq-toggle');
                answer.classList.toggle('active');
                toggle.textContent = answer.classList.contains('active') ? '−' : '+';
            });
        });
    }

    // Newsletter Form Submission
    function initNewsletterForms() {
        document.querySelectorAll('.newsletter-form, .footer-newsletter').forEach(form => {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                alert('Thank you for subscribing to Alcami’s newsletter!');
            });
        });
    }

    // Initialize all functions
    handleFlavorSelection();
    initImageCarousel();
    initPlayButton();
    initReviewsCarousel();
    initFAQAccordion();
    initNewsletterForms();
});
