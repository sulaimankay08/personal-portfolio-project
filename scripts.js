document.addEventListener('DOMContentLoaded', function() {
    
    // -------------------------------------------------------------------
    // 1. Responsive Navigation Toggle (Required Functionality)
    // -------------------------------------------------------------------

    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.getElementById('nav-links');

    if (navToggle && navLinks) {
        navToggle.addEventListener('click', function() {
            // Toggle the 'open' class on the ul element to show/hide the menu
            navLinks.classList.toggle('open');
            
            // Toggle the ARIA expanded attribute for accessibility
            const isExpanded = navToggle.getAttribute('aria-expanded') === 'true' || false;
            navToggle.setAttribute('aria-expanded', !isExpanded);
        });
        
        // Close the menu when a link is clicked (improves mobile UX)
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('open');
                navToggle.setAttribute('aria-expanded', false);
            });
        });
    }


    // -------------------------------------------------------------------
    // 2. Contact Form Basic Validation (Required Functionality)
    // -------------------------------------------------------------------
    
    const contactForm = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');

    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            // Prevent the default form submission
            event.preventDefault();
            
            // Get form fields and trim whitespace
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();
            
            // Basic validation check (Check for empty fields)
            if (name === '' || email === '' || message === '') {
                formStatus.textContent = '❌ Error: All fields are required.';
                formStatus.style.color = 'red';
                return; // Stop execution if validation fails
            }
            
            // Simple Email format check 
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                 formStatus.textContent = '❌ Error: Please enter a valid email address.';
                 formStatus.style.color = 'red';
                 return;
            }

            // If validation passes (In a real deployment, this is where you'd send data to a server)
            formStatus.textContent = '✅ Success! Your message has been prepared (Form successfully validated).';
            formStatus.style.color = 'green';
            contactForm.reset(); // Clear the form fields
        });
    }

});
