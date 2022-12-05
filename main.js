import './style.css';

import { clearStorage } from './js/utils/storage';
import { navBar } from './js/components/nav';

navBar();

const mobileMenuBtn = document.querySelector('#mobile-menu-btn');
const mobileMenu = document.querySelector('#mobile-menu');

mobileMenu.classList = 'hidden';

mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

const settingsMenuBtn = document.querySelector('#user-menu-btn');
const settingsMenu = document.querySelector('#settings-menu');

settingsMenu.classList = 'hidden';

settingsMenuBtn.addEventListener('click', () => {
      settingsMenu.classList.toggle('hidden');
});

const logOutBtn = document.getElementById('logout-btn');
if (logOutBtn) {
    logOutBtn.addEventListener('click', function () {
        console.log('I am clicked');
        clearStorage();
        window.location.replace('/index.html');
    });
}