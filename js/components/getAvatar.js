import { getUserAvatar, getUserName } from '../utils/storage';


const getUserInfo = () => {
    const AvatarContainer = document.getElementById('user-menu-btn');
    

    if (AvatarContainer) {
        const avatar = getUserAvatar();
        let userAvatar =
                        `
                        <img
                            class="h-8 w-8 rounded-full"
                            src="${avatar}"
                            alt="Avatar"
                        />`;
        if (!avatar) {
            userAvatar =`
                        <img
                            class="h-8 w-8 rounded-full"
                            src="./img/default-thumbnail.jpeg"
                            alt="Avatar"
                        />
                        `;
        }
        AvatarContainer.innerHTML =`
                                        ${userAvatar}
                                    `;
    }
}
;

export { getUserInfo };
