function togglePassword() {
    const passwordInput = document.getElementById('password');
    const showPasswordButton = document.querySelector('.show-password');
    
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        showPasswordButton.textContent = 'Hide';
    } else {
        passwordInput.type = 'password';
        showPasswordButton.textContent = 'Show';
    }
}

document.querySelector('.login-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const onlineId = document.getElementById('online-id');
    const password = document.getElementById('password');
    const loader = document.querySelector('.loader');
    const loginButton = document.querySelector('.login-button');
    const loginText = document.querySelector('.login-text');

    // Reset any existing error states
    let hasError = false;
    onlineId.parentElement.classList.remove('error');
    password.parentElement.classList.remove('error');

    // Check if fields are empty
    if (onlineId.value.trim() === '') {
        onlineId.parentElement.classList.add('error');
        hasError = true;
    }
    if (password.value.trim() === '') {
        password.parentElement.classList.add('error');
        hasError = true;
    }

    // Show loader and hide text only if there's no error
    if (!hasError) {
        loader.style.display = 'inline-block';
        loginText.style.display = 'none';
        loginButton.disabled = true;

        // Simulate form submission delay
        setTimeout(() => {
            loader.style.display = 'none';
            loginText.style.display = 'inline';
            loginButton.disabled = false;
            
            // Start animations after successful login
            startAnimations();
        }, 2000);
    }

    // Reset error states after 500ms if there are errors
    setTimeout(() => {
        document.querySelectorAll('.input-wrapper').forEach(wrapper => {
            wrapper.classList.remove('error');
        });
    }, 500);
});

function startAnimations() {
    // Animate logo
    const logo = document.querySelector('.logo');
    logo.style.animation = 'rollFromTopLeft 2s ease-out forwards ';
    logo.style.animationDelay = '1.5s';
    // Animate header text
    const headerText = document.querySelector('.logo h3');
    headerText.classList.add('animate__animated', 'animate__fadeOutLeft', 'animate__delay-1s');

    // Animate enroll button
    const enrollButton = document.querySelector('.enroll-button').parentElement;
    enrollButton.classList.add('animate__animated', 'animate__backOutDown', 'animate__delay-1s');

    // Animate welcome back section
    const welcomeBack = document.querySelector('.welcome-back');
    welcomeBack.classList.add('animate__animated', 'animate__backOutDown', 'animate__delay-1s');

    // Animate login form
    const loginForm = document.querySelector('.login-form');
    loginForm.classList.add('animate__animated', 'animate__backOutDown', 'animate__delay-1s');

    // Animate forgot links
    const forgotLinks = document.querySelector('.forgot-links');
    forgotLinks.classList.add('animate__animated', 'animate__backOutDown', 'animate__delay-1s');

    // Animate footer
    const footer = document.querySelector('.footer');
    footer.classList.add('animate__animated', 'animate__backOutDown', 'animate__delay-1.5s');

    // Animate image
    const img = document.getElementById('img');
    img.style.animation = 'squeeze-disappear 3s ease-in-out forwards';
    img.style.animationDelay = '1.5s';

    // Redirect after animations
    setTimeout(function() {
        window.location.href = "video.html"; 
    }, 5000); 
}