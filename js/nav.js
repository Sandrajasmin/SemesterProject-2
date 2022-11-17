const mobileMenuBtn = document.querySelector('#mobile-menu-btn');
const mobileMenu = document.querySelector('#mobile-menu');

mobileMenu.classList = 'hidden';

mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

const settingsMenuBtn = document.querySelector('#user-menu-button');
const settingsMenu = document.querySelector('#settings-menu');

settingsMenu.classList = 'hidden';

settingsMenuBtn.addEventListener('click', () => {
    settingsMenu.classList.toggle('hidden');
});