import './style.css';

import { clearStorage, getUserAvatar, getUserCredit, getUserName, getToken } from './js/utils/storage';
import { getUserInfo } from './js/components/getAvatar';
import { navBar } from './js/components/nav';

const avatar = getUserAvatar();
const credits = getUserCredit();
const userName = getUserName();
const accessToken = getToken();
console.log(credits)
console.log(userName);
console.log(accessToken);
console.log(avatar);

navBar();
getUserInfo();

const mobileMenuBtn = document.querySelector('#mobile-menu-btn');
const mobileMenu = document.querySelector('#mobile-menu');

mobileMenu.classList = 'hidden';

mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});
const settingsMenuBtn = document.getElementById('user-menu-btn');
const settingsMenu = document.getElementById('settings-menu');

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