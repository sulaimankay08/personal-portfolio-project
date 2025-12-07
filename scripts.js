document.addEventListener('DOMContentLoaded', function() {

    // -------------------------------------------------------------------
    // 1. Responsive Navigation Toggle
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

        // OPTIONAL: Close the menu when a link is clicked (useful on mobile)
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('open');
                navToggle.setAttribute('aria-expanded', false);
            });
        });
    }


    // -------------------------------------------------------------------
    // 2. Contact Form Basic Validation
    // -------------------------------------------------------------------

    const contactForm = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');

    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            // Prevent the default form submission
            event.preventDefault();

            // Get form fields
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();

            // Basic validation check
            if (name === '' || email === '' || message === '') {
                formStatus.textContent = '❌ Error: All fields are required.';
                formStatus.style.color = 'red';
                return; // Stop execution if validation fails
            }

            // Simple Email format check (very basic)
            if (!email.includes('@') || !email.includes('.')) {
                formStatus.textContent = '❌ Error: Please enter a valid email address.';
                formStatus.style.color = 'red';
                return;
            }

            // If validation passes (in a real app, we would send the data here)
            formStatus.textContent = '✅ Success! Your message has been received (locally).';
            formStatus.style.color = 'green';
            contactForm.reset(); // Clear the form fields
        });
    }

});
