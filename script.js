// Theme Management
class ThemeManager {
    constructor() {
        this.theme = localStorage.getItem('theme') || 'light';
        this.init();
    }

    init() {
        this.setTheme(this.theme);
        this.bindEvents();
    }

    setTheme(theme) {
        this.theme = theme;
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        this.updateThemeIcon();
    }

    toggleTheme() {
        const newTheme = this.theme === 'light' ? 'dark' : 'light';
        this.setTheme(newTheme);
    }

    updateThemeIcon() {
        const themeIcon = document.getElementById('theme-icon');
        if (themeIcon) {
            themeIcon.className = this.theme === 'light' ? 'fas fa-moon' : 'fas fa-sun';
        }
    }

    bindEvents() {
        const themeToggle = document.getElementById('theme-toggle');
        if (themeToggle) {
            themeToggle.addEventListener('click', () => this.toggleTheme());
        }
    }
}

// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function () {
    // Initialize theme manager

    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function () {
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
    }

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                // Close mobile menu if open
                if (navMenu) navMenu.classList.remove('active');
                if (hamburger) hamburger.classList.remove('active');
            }
        });
    });

    // Visitor tracking (simple implementation)
    trackVisitor();

    // Add scroll effect to navbar
    window.addEventListener('scroll', function () {
        const navbar = document.querySelector('.navbar');
        const currentTheme = document.documentElement.getAttribute('data-theme');

        if (window.scrollY > 50) {
            if (currentTheme === 'dark') {
                navbar.style.background = 'rgba(26, 32, 44, 0.98)';
            } else {
                navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            }
        } else {
            if (currentTheme === 'dark') {
                navbar.style.background = 'rgba(26, 32, 44, 0.95)';
            } else {
                navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            }
        }
    });
});

// Simple visitor counter
function trackVisitor() {
    // Get visitor count from localStorage
    let visitorCount = localStorage.getItem('visitorCount');

    if (!visitorCount) {
        visitorCount = Math.floor(Math.random() * 1000) + 100; // Random starting number
    } else {
        visitorCount = parseInt(visitorCount) + 1;
    }

    localStorage.setItem('visitorCount', visitorCount);

    // Update visitor count display
    const visitorElement = document.getElementById('visitor-count');
    if (visitorElement) {
        visitorElement.textContent = `Visitors: ${visitorCount}`;
    }
}

// Add animation on scroll
function animateOnScroll() {
    const elements = document.querySelectorAll('.skill-category, .certificate-card, .project-card');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    });

    elements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(element);
    });
}

// Initialize animations when DOM is loaded
document.addEventListener('DOMContentLoaded', animateOnScroll);