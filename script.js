// These lines of code are retrieving references to HTML elements with specific IDs.
const registrationForm = document.getElementById('registrationForm');
const successMessage = document.getElementById('successMessage');
const usernameInput = document.getElementById('username');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirmPassword');

registrationForm.addEventListener('submit', function (event) {
    let isValid = true;

    const username = usernameInput.value.trim();
    const email = emailInput.value.trim();
    const password = passwordInput.value;
    const confirmPassword = confirmPasswordInput.value;


    /* This code block is checking if the `username` input field is empty. If it is empty, it sets the
    `isValid` variable to `false` and displays an error message on the HTML element with the ID
    `usernameError` using the `displayError` function. If the `username` input field is not empty,
    it hides the error message by calling the `hideError` function. */
    if (username === '') {
        isValid = false;
        displayError('usernameError', 'Username is required.');
    } else {
        hideError('usernameError');
    }


    // The code block is checking if the `email` input field matches the specified email pattern.
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        isValid = false;
        displayError('emailError', 'Invalid email format.');
    } else {
        hideError('emailError');
    }


    // This code block is checking the validity of the password input field.
    if (password === '') {
        isValid = false;
        displayError('passwordError', 'Password is required.');
    } else if (password.length < 6) {
        isValid = false;
        displayError('passwordError', 'Password must be at least 6 characters.');
    } else {
        hideError('passwordError');
    }


    /* This code block is checking if the value entered in the "confirm password" input field matches
    the value entered in the "password" input field. If the values do not match, it sets the
    `isValid` variable to `false`, displays an error message on the HTML element with the ID
    `confirmPasswordError` using the `displayError` function, and prevents the form from being
    submitted. If the values match, it hides the error message by calling the `hideError` function. */
    if (confirmPassword !== password) {
        isValid = false;
        displayError('confirmPasswordError', 'Passwords do not match.');
    } else {
        hideError('confirmPasswordError');
    }

  
    if (isValid) {
        displaySuccessMessage('Registration successful! Welcome!');
    } else {
        event.preventDefault();
    }
});

/* The function "displayError" updates the text content of an HTML element with the provided error
  message.*/
function displayError(elementId, message) {
    const errorElement = document.getElementById(elementId);
    errorElement.textContent = message;
}

// The function "hideError" clears the text content of an element with the specified ID.
function hideError(elementId) {
    const errorElement = document.getElementById(elementId);
    errorElement.textContent = '';
}

function displaySuccessMessage(message) {
    successMessage.textContent = message;
}
