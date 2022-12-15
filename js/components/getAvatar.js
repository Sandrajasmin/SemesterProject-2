import { getUserAvatar, getUserCredit, getUserName } from '../utils/storage';


const getUserInfo = () => {
    const AvatarContainer = document.getElementById('user-menu-btn');
    //active credit and sign in
    const activeCredit = document.getElementById('credit');
    const activeAvatar = document.getElementById('user-menu-btn');
    const activeMenu = document.getElementById('settings-menu');

    if(activeCredit) {
        const userName = getUserName();
        const credits = getUserCredit();
        let activeUserCredit =`
                                    <span class="sr-only"></span>
									<p class="text-white text-sm">${credits}</p>
									<p class="text-[#F2AE2E] font-medium text-sm">CR</p>                        
        
        `;
        if(!userName) {
            activeUserCredit = `
                                <div id="user-credit" class="flex">
                                    <a href="/signin.html"><p class="text-[#F2AE2E] text-sm md:text-base font-medium">Sing in</p></a>
                                </div>    
        `;
        }
        activeCredit.innerHTML = `${activeUserCredit}`
    }

    if(activeMenu) {
        const userName = getUserName();
        let activeUserMenu = 
        `
        <a
				 			href="/profile.html"
				 			class="block px-3 py-2 text-sm text-gray-700"
				 			role="menuitem"
				 			tabindex="-1"
				 			id="user-menu-item-0"
				 			>Profile</a
				 		>
				 		<a
				 			href="#"
				 			class="block px-3 py-2 text-sm text-gray-700"
				 			role="menuitem"
				 			tabindex="-1"
				 			id="logout-btn"
				 			>Sign out</a
						>
        
        `
        if(!userName) {
            activeUserMenu = '';
        }
        activeMenu.innerHTML = `${activeUserMenu}`
    }

    if (AvatarContainer) {
        const avatar = getUserAvatar();
        let userAvatar =
                        `
                        <img
                            class="max-h-8 max-w-8 rounded-full"
                            src="${avatar}"
                            alt="Avatar"
                        />`;
        if (!avatar) {
            userAvatar = '';
        }
        AvatarContainer.innerHTML =`${userAvatar}`;
    }
};

export { getUserInfo };
