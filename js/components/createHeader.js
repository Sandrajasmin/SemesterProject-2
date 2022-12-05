import { getUserAvatar } from "../utils/storage";

const createHeader = () => {
    const userAvatar = document.getElementById('userAvatar');
    //const credit = document.getElementById('credits');
    if (userAvatar) {
        const avatar = getUserAvatar();
        let userDetail =
            `
            <span class="sr-only">Open user menu</span>
            <img
				class="h-8 w-8 rounded-full"
				src="${avatar}"
			    alt="Avatar"
			/>
			!-- Icon when menu is open. Menu open: "block", Menu closed: "hidden"-->
			<img
				class="h-8 w-8 rounded-full hidden"
				src="${avatar}"
				alt="Avatar"
				aria-hidden="true"
			/>
            `
    if(!avatar) {
        userDetail =
        `
        <span class="sr-only">Open user menu</span>
        <img
			class="h-8 w-8 rounded-full"
			"/img/default-thumbnail.jpeg"
		    alt="Avatar"
		/>
		!-- Icon when menu is open. Menu open: "block", Menu closed: "hidden"-->
		<img
			class="h-8 w-8 rounded-full hidden"
			"/img/default-thumbnail.jpeg"
			alt="Avatar"
			aria-hidden="true"
		/>
        `
    }
    userAvatar.innerHTML = `${userDetail}`;
    }
};

export { createHeader }

const mobileMenuBtn = document.querySelector('#mobile-menu-btn');
const mobileMenu = document.querySelector('#mobile-menu');

mobileMenu.classList = 'hidden';

mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// const settingsMenuBtn = document.querySelector('#user-menu-button');
// const settingsMenu = document.querySelector('#settings-menu');

// settingsMenu.classList = 'hidden';

// settingsMenuBtn.addEventListener('click', () => {
//      settingsMenu.classList.toggle('hidden');
// });