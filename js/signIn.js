import '/style.css';
import { LOG_IN_URL } from './settings/api';
import { validEmail, checkLength } from './utils/validation';
import { saveUser, saveToken } from './utils/storage';

const signInForm = document.querySelector('#signIn-form');

// email error
const email = document.querySelector('#email');
const emailError = document.querySelector('#emailError');
const emailNotValid = document.querySelector('#emailNotValid');

// password error
const password = document.querySelector('#password');
const passwordError = document.querySelector('#passwordError');

//general error
const generalError = document.querySelector('#general-error');

if (signInForm) {
    signInForm.addEventListener('submit', (event) => {
        event.preventDefault();

        let isEmail = false;
        if (checkLength(email.value, 0)) {
            emailError.classList.add('hidden');
            isEmail = true;
        } else {
            emailError.classList.remove('hidden');
        }

        let isEmailValid = false;
        if (checkLength(email.value, 0) && validEmail(email.value) === true) {
            emailNotValid.classList.add('hidden');
            isEmailValid = true;
        } else if (
            checkLength(email.value, 0) &&
            validEmail(email.value) === false
        ) {
            emailNotValid.classList.remove('hidden');
        }

        let isPassword = false;
        if (checkLength(password.value, 8)) {
            passwordError.classList.add('hidden');
            isPassword = true;
        } else {
            passwordError.classList.remove('hidden');
        }

        let isFormValid = isEmail && isEmailValid && isPassword;
        if (isFormValid) {
            const userData = {
                email: email.value,
                password: password.value,
            };

            const LOGIN_USER_URL_ENDPOINT = `${LOG_IN_URL}`;

            (async function logInUser() {
                const response = await fetch(LOGIN_USER_URL_ENDPOINT, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(userData),
                });

                if (response.ok) {
                    const data = await response.json();
                    saveToken(data.accessToken);

                    const userToSave = {
                        name: data.name,
                        email: data.email,
                        avatar: data.avatar,
                        credits: data.credits,
                    };
                    saveUser(userToSave);
                    location.href = '/index.html';
                } else {
                    const errorError = await response.json();
                    const message = `${errorError.errors[0].message}`;
                    throw new Error(message);
                }
            })().catch((errorError) => {
                generalError.innerHTML = `Sorry we have an error!${errorError}`;
            });
        } else {
            console.log('This did absoloutely not work');
        }
    });
}