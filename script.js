// Load particles.js with interactive configuration
document.addEventListener('DOMContentLoaded', function() {
    // Initialize particles.js
    if(document.getElementById('particles-js')) {
        particlesJS.load('particles-js', 'particles.json', function() {
            console.log('particles.js loaded - callback');
        });
    }

    // Add hover effect to resume preview
    const resumePreview = document.querySelector('.resume-preview');
    if (resumePreview) {
        document.addEventListener('mousemove', (e) => {
            const rect = resumePreview.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const rotateX = (y - rect.height / 2) / 20;
            const rotateY = (rect.width / 2 - x) / 20;
            
            resumePreview.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });

        resumePreview.addEventListener('mouseleave', () => {
            resumePreview.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
        });
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Navbar background change on scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(30, 30, 30, 0.95)';
    } else {
        navbar.style.background = 'var(--secondary-dark)';
    }
});

// Animation for feature cards with enhanced timing
const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.feature-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'all 0.5s ease-out';
    observer.observe(card);
});

// Mock resume generation functionality
document.querySelectorAll('.cta-button, .cta-button-large').forEach(button => {
    button.addEventListener('click', () => {
        // Add loading state
        button.style.opacity = '0.7';
        button.textContent = 'Generating...';
        
        // Simulate AI processing
        setTimeout(() => {
            button.style.opacity = '1';
            button.textContent = button.classList.contains('cta-button') ? 'Get Started' : 'Create Your Resume Now';
            
            // Show success message (you can replace this with actual resume generation logic)
            alert('Demo: Your ATS-optimized resume would be generated here!');
        }, 2000);
    });
});