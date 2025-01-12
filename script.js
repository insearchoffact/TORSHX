// scripts.js

// Smooth Scroll Functionality
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Rotating Product Example (Section 2)
let rotation = 0;
const productImage = document.querySelector('.product-display img');

if (productImage) {
    productImage.addEventListener('mouseover', () => {
        productImage.style.transition = 'transform 0.5s ease-in-out';
        rotation += 180;
        productImage.style.transform = `rotate(${rotation}deg)`;
    });

    productImage.addEventListener('mouseout', () => {
        productImage.style.transform = `rotate(${rotation}deg)`;
    });
}

// Feature Cards Hover Effect (Section 3)
const features = document.querySelectorAll('.feature');

features.forEach(feature => {
    feature.addEventListener('mouseenter', () => {
        feature.style.transform = 'scale(1.05)';
        feature.style.transition = 'transform 0.3s ease-in-out';
        feature.style.boxShadow = '0px 4px 6px rgba(0, 0, 0, 0.2)';
    });

    feature.addEventListener('mouseleave', () => {
        feature.style.transform = 'scale(1)';
        feature.style.boxShadow = 'none';
    });
});

// Dynamic Year Update in Footer
const yearElement = document.querySelector('footer p script');
if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}

// Lazy Load for Gallery Images (Section 4)
const galleryImages = document.querySelectorAll('.gallery img');

const lazyLoad = (target) => {
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('fade-in');
                observer.unobserve(img);
            }
        });
    }, options);

    observer.observe(target);
};

galleryImages.forEach(img => {
    if (img.dataset.src) {
        lazyLoad(img);
    }
});

// Contact Form Interaction Example (Optional)
const contactForm = document.querySelector('.contact form');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for contacting us! We will get back to you shortly.');
        contactForm.reset();
    });
}
