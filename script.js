document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const messageError = document.getElementById('messageError');

    // Real-time validation functions
    function validateName() {
        const nameValue = nameInput.value.trim();
        
        if (nameValue === '') {
            showError(nameInput, nameError, 'Full name is required');
            return false;
        } else if (nameValue.length < 2) {
            showError(nameInput, nameError, 'Name must be at least 2 characters long');
            return false;
        } else if (!/^[a-zA-Z\s]+$/.test(nameValue)) {
            showError(nameInput, nameError, 'Name can only contain letters and spaces');
            return false;
        } else {
            showSuccess(nameInput, nameError);
            return true;
        }
    }

    function validateEmail() {
        const emailValue = emailInput.value.trim();
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        if (emailValue === '') {
            showError(emailInput, emailError, 'Email is required');
            return false;
        } else if (!emailPattern.test(emailValue)) {
            showError(emailInput, emailError, 'Please enter a valid email address');
            return false;
        } else {
            showSuccess(emailInput, emailError);
            return true;
        }
    }

    function validateMessage() {
        const messageValue = messageInput.value.trim();
        
        if (messageValue === '') {
            showError(messageInput, messageError, 'Message is required');
            return false;
        } else if (messageValue.length < 10) {
            showError(messageInput, messageError, 'Message must be at least 10 characters long');
            return false;
        } else if (messageValue.length > 500) {
            showError(messageInput, messageError, 'Message cannot exceed 500 characters');
            return false;
        } else {
            showSuccess(messageInput, messageError);
            return true;
        }
    }

    function showError(input, errorElement, message) {
        input.classList.add('error');
        input.classList.remove('success');
        errorElement.textContent = message;
    }

    function showSuccess(input, errorElement) {
        input.classList.remove('error');
        input.classList.add('success');
        errorElement.textContent = '';
    }

    function clearValidation(input, errorElement) {
        input.classList.remove('error', 'success');
        errorElement.textContent = '';
    }

    // Add real-time validation listeners
    nameInput.addEventListener('blur', validateName);
    nameInput.addEventListener('input', function() {
        if (nameInput.classList.contains('error') || nameInput.classList.contains('success')) {
            validateName();
        }
    });

    emailInput.addEventListener('blur', validateEmail);
    emailInput.addEventListener('input', function() {
        if (emailInput.classList.contains('error') || emailInput.classList.contains('success')) {
            validateEmail();
        }
    });

    messageInput.addEventListener('blur', validateMessage);
    messageInput.addEventListener('input', function() {
        if (messageInput.classList.contains('error') || messageInput.classList.contains('success')) {
            validateMessage();
        }
    });

    // Form submission handler
    form.addEventListener('submit', function(e) {
        e.preventDefault();

        // Validate all fields
        const isNameValid = validateName();
        const isEmailValid = validateEmail();
        const isMessageValid = validateMessage();

        // If all validations pass
        if (isNameValid && isEmailValid && isMessageValid) {
            
            showSuccessMessage();
            
            // Reset form after a delay
            setTimeout(() => {
                form.reset();
                clearAllValidation();
            }, 2000);
        }
    });

    function showSuccessMessage() {
        // Remove any existing success message
        const existingMessage = document.querySelector('.success-message');
        if (existingMessage) {
            existingMessage.remove();
        }

        // Create and show success message
        const successMessage = document.createElement('div');
        successMessage.className = 'success-message';
        successMessage.textContent = '✓ Thank you! Your message has been sent successfully.';
        
        form.appendChild(successMessage);
        
        // Scroll to success message
        successMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }

    function clearAllValidation() {
        clearValidation(nameInput, nameError);
        clearValidation(emailInput, emailError);
        clearValidation(messageInput, messageError);
        
        // Remove success message
        const successMessage = document.querySelector('.success-message');
        if (successMessage) {
            successMessage.remove();
        }
    }

    // Character counter for message field
    const charCounter = document.createElement('div');
    charCounter.style.cssText = 'font-size: 12px; color: #666; text-align: right; margin-top: 5px;';
    messageInput.parentNode.appendChild(charCounter);

    messageInput.addEventListener('input', function() {
        const length = messageInput.value.length;
        charCounter.textContent = `${length}/500 characters`;
        
        if (length > 500) {
            charCounter.style.color = '#e74c3c';
        } else {
            charCounter.style.color = '#666';
        }
    });
});
