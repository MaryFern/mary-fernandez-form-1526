document.addEventListener('DOMContentLoaded', function () {
    const submitButton = document.getElementById('submit-button');
    const fullnameInput = document.getElementById('fullname');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    submitButton.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent form submission
        
        // Data and errors buckets
        const data = {};
        const errors = [];
        
        // Full name validation
        if (fullnameInput.value.trim() !== '') {
            data.fullname = fullnameInput.value.trim();
        } else {
            errors.push('Full name is required');
        }
        
        // Email validation
        if (emailInput.value.trim() !== '') {
            if (emailRegex.test(emailInput.value.trim())) {
                data.email = emailInput.value.trim();
            } else {
                errors.push('Invalid email address');
            }
        } else {
            errors.push('Email is required');
        }
        
        // Message validation
        if (messageInput.value.trim() !== '') {
            data.message = messageInput.value.trim();
        } else {
            errors.push('Message is required');
        }
        
        // Feedback/errors display
        if (errors.length > 0) {
            console.log('Errors:', errors);
        } else {
            console.log('Data:', data);
            // Clear input fields
            fullnameInput.value = '';
            emailInput.value = '';
            messageInput.value = '';
        }
    });
});
