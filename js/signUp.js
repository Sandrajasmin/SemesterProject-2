import '/style.css';

import { SIGN_UP_URL } from './settings/api';
import { passwordValidator, validEmail, validImg } from './utils/validation';

const form = document.querySelector('#signup-form');


//First Name Error
const firstName = document.querySelector('#name');
const firstNameError = document.querySelector('#firstNameError');

//Email Error
const email = document.querySelector('#email');
const emailError = document.querySelector('#emailError');
const emailNotValid = document.querySelector('#emailError2');

// avatar error
const avatar = document.getElementById('avatar');
const avatarError = document.getElementById('avatarError');

// Password Error
const password = document.querySelector('#password');
const passwordError = document.querySelector('#passwordError');


//confirm password
const confirmPassword = document.querySelector('#confirm-password');
const passwordError1 = document.querySelector('#confirmPasswordError');
const passwordDontMatch = document.querySelector('#passwordDontNotMatch');

console.log(firstName);
console.log(email);
console.log(avatar);
console.log(confirmPassword);
console.log(passwordError1);
console.log(passwordDontMatch);

// General error
const generalError = document.querySelector('#general-error');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    // Firstname Validation
    let isFirstName = false;
    if (firstName.value.trim().length > 0) {
        firstNameError.classList.add('hidden');
        isFirstName = true;
    } else {
        firstNameError.classList.remove('hidden');
    }

    // Email validation
    let isEmail = false;
    if (email.value.trim().length > 0) {
        emailError.classList.add('hidden');
        isEmail = true;
    } else {
        emailError.classList.remove('hidden');
    }

    let isValidEmail = false;
    if (email.value.trim().length && validEmail(email.value) === true) {
        emailNotValid.classList.add('hidden');
        isValidEmail = true;
    } else if (
        email.value.trim().length &&
        validEmail(email.value) !== true
    ) {
        emailNotValid.classList.remove('hidden');
    }

    let isAvatarValid = false;
    isAvatarValid = validImg(avatar.value) || avatar.value === '';
    if (isAvatarValid) {
        avatarError.classList.add('hidden');
    } else {
        avatarError.classList.remove('hidden');
    }

    // Password validation
    let isPassword = false;
    if (password.value.trim().length >= 8) {
        passwordError.classList.add('hidden');
        isPassword = true;
    } else {
        passwordError.classList.remove('hidden');
    }

    // Confirm password  Validation
    let isConfirmPassword = false;
    if (confirmPassword.value.trim().length >= 8) {
        passwordError1.classList.add('hidden');
        isConfirmPassword = true;
    } else {
        passwordError1.classList.remove('hidden');
    }

    // Password match validation
    let isValidPasswordMatch = false;
    isValidPasswordMatch = passwordValidator(
        password.value,
        confirmPassword.value,
    ); // true // false
    if (isValidPasswordMatch) {
        passwordDontMatch.classList.add('hidden');
        isValidPasswordMatch = true;
    } else {
        passwordDontMatch.classList.add('hidden');
    }

    let isFormValid =
        isFirstName &&
        isEmail &&
        isValidEmail &&
        isAvatarValid &&
        isPassword &&
        isConfirmPassword &&
        isValidPasswordMatch;

    if (isFormValid) {
        const userData = {
            name: firstName.value,
            email: email.value,
            password: password.value,
            avatar: avatar.value,
        };

        (async function signUp() {
            const response = await fetch(`${SIGN_UP_URL}`, {
                method: 'POST',
                    headers: {
                   'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData),
            });
            if(response.ok) {
                location.href = '../signin.html'
            } else {
                const err = await response.json();
                const message = `${err.errors[0].message}`
                throw new Error(message)
            }
        })().catch((err) => {
            generalError.innerHTML = `${err}`;
            console.log('some error');
        });
    } else {
        generalError.innerHTML= 'Validation failed';
    }  
});
