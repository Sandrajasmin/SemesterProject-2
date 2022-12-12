import { getUserAvatar, getUserName, getUserCredit } from '../utils/storage';


const getUserInfo = () => {
    const AvatarContainer = document.getElementById('user-menu-btn');
    const userName = getUserName();
   

    if (AvatarContainer) {
        const avatar = getUserAvatar();
        let userAvatar =
            `
         <img
            class="h-8 w-8 rounded-full"
            src="${avatar}"
            alt="Avatar"
            />
        `;
        if (!avatar) {
            userAvatar =
                `
            <img
                class="h-8 w-8 rounded-full"
                src="./img/default-thumbnail.jpeg"
                alt="Avatar"
            />
            `;
        }
        AvatarContainer.innerHTML =
            `
            <span class="sr-only">Open user menu</span>
            ${userAvatar}
        `;
    }

    const userBTN = document.getElementById('credit');
    if (userBTN) {
        const credits = getUserCredit();
        let signoutCredit = `
        <span class="sr-only"></span>
                    <p class="text-white">${credits}</p>
	 				<p class="text-[#F2AE2E] font-medium">CR</p>
        `;
        if (!credits) {
            signoutCredit = 
            `
            <a href="/signin.html"><p class="text-[#F2AE2E] font-medium">Sing in</p></a>
            `;
        }
        userBTN.innerHTML = `${signoutCredit}`;
    }
}
;

export { getUserInfo };