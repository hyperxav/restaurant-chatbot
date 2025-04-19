// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerOffset = 80; // Adjust for fixed header
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Fixed header transparency on scroll
    const header = document.querySelector('header');
    let scrollPos = 0;
    
    function checkScrollPos() {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        scrollPos = window.scrollY;
    }
    
    window.addEventListener('scroll', checkScrollPos);
    checkScrollPos();
    
    // Form submission handler
    const reservationForm = document.querySelector('.reservation-form');
    if (reservationForm) {
        reservationForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Here you would typically send the form data to a server
            // For this example, we'll just show a confirmation message
            
            const formData = new FormData(reservationForm);
            let reservationDetails = {};
            
            for (let [key, value] of formData.entries()) {
                reservationDetails[key] = value;
            }
            
            console.log('Reservation details:', reservationDetails);
            
            // Show confirmation message
            reservationForm.innerHTML = `
                <div class="confirmation-message">
                    <h3>Thank you for your reservation!</h3>
                    <p>We've received your request for ${reservationDetails.guests} guest(s) on ${reservationDetails.date} at ${reservationDetails.time}.</p>
                    <p>A confirmation will be sent to ${reservationDetails.email} shortly.</p>
                </div>
            `;
        });
    }
    
    // Mobile menu toggle
    const createMobileMenu = () => {
        const header = document.querySelector('header');
        const nav = document.querySelector('nav');
        
        // Create mobile menu button
        const mobileMenuBtn = document.createElement('button');
        mobileMenuBtn.classList.add('mobile-menu-btn');
        mobileMenuBtn.innerHTML = '<span></span><span></span><span></span>';
        header.insertBefore(mobileMenuBtn, nav);
        
        // Toggle mobile menu
        mobileMenuBtn.addEventListener('click', function() {
            nav.classList.toggle('active');
            this.classList.toggle('active');
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!nav.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
                nav.classList.remove('active');
                mobileMenuBtn.classList.remove('active');
            }
        });
    };
    
    // Call mobile menu creation only on smaller screens
    if (window.innerWidth < 768) {
        createMobileMenu();
    }
    
    // Handle window resize
    window.addEventListener('resize', function() {
        if (window.innerWidth < 768) {
            if (!document.querySelector('.mobile-menu-btn')) {
                createMobileMenu();
            }
        }
    });
});

// Add CSS for the mobile menu button and animation
document.head.insertAdjacentHTML('beforeend', `
<style>
.mobile-menu-btn {
    display: none;
}

@media (max-width: 768px) {
    .mobile-menu-btn {
        display: block;
        background: none;
        border: none;
        cursor: pointer;
        padding: 10px;
        z-index: 1001;
        position: absolute;
        top: 20px;
        right: 20px;
    }
    
    .mobile-menu-btn span {
        display: block;
        width: 25px;
        height: 3px;
        background-color: var(--secondary-color);
        margin: 5px 0;
        transition: transform 0.3s, opacity 0.3s;
    }
    
    .mobile-menu-btn.active span:nth-child(1) {
        transform: rotate(45deg) translate(5px, 5px);
    }
    
    .mobile-menu-btn.active span:nth-child(2) {
        opacity: 0;
    }
    
    .mobile-menu-btn.active span:nth-child(3) {
        transform: rotate(-45deg) translate(7px, -6px);
    }
    
    nav {
        position: fixed;
        top: 0;
        right: -100%;
        width: 70%;
        height: 100vh;
        background-color: white;
        padding: 80px 20px 20px;
        transition: right 0.3s ease;
        box-shadow: -5px 0 15px rgba(0, 0, 0, 0.1);
        z-index: 1000;
    }
    
    nav.active {
        right: 0;
    }
    
    nav ul {
        flex-direction: column;
        align-items: flex-start;
    }
    
    nav ul li {
        margin: 10px 0;
    }
}
</style>
`);

// Add styles for the scrolled header
document.head.insertAdjacentHTML('beforeend', `
<style>
header {
    transition: background-color 0.3s ease, box-shadow 0.3s ease;
}

header.scrolled {
    background-color: rgba(255, 255, 255, 0.95);
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}
</style>
`);

// Add animation for content sections
document.head.insertAdjacentHTML('beforeend', `
<style>
@keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
}

.section-title,
.about-text,
.about-image,
.menu-category,
.location-content,
.contact-content,
.reservation-form {
    opacity: 0;
    animation: fadeIn 0.8s ease forwards;
}

.section-title { animation-delay: 0.1s; }
.about-text { animation-delay: 0.3s; }
.about-image { animation-delay: 0.5s; }
.menu-category:nth-child(1) { animation-delay: 0.2s; }
.menu-category:nth-child(2) { animation-delay: 0.4s; }
.menu-category:nth-child(3) { animation-delay: 0.6s; }
.menu-category:nth-child(4) { animation-delay: 0.8s; }
.location-content { animation-delay: 0.3s; }
.contact-content { animation-delay: 0.3s; }
.reservation-form { animation-delay: 0.4s; }
</style>
`); 