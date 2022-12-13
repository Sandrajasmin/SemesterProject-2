import { getUserCredit, getUserAvatar, getUserName } from "../utils/storage";

const navBar = () => {
    const { pathname } = document.location;
    const navMobile = document.getElementById('mobile-menu');
    const navDesktop = document.getElementById('nav-links-desktop');
	const AvatarContainer = document.getElementById('user-menu-btn');
	const userBTN = document.getElementById('credit');


    if(navMobile) {
        const userName = getUserName();
		const credits = getUserCredit();
		const avatar = getUserAvatar();

        let navLinksMobile;
		let activeUserMobile;
		let activeAvatar;

        navLinksMobile = 
						`
							<div class="space-y-1 px-2 pt-2 pb-3">
								<a
									href="/index.html"
									class="${pathname === '/index.html' ? 'text-black font-medium' : ''} text-gray-300 font-body hover:text-medium hover:text-white block px-3 py-2 rounded-md text-base font-medium"
									>Home</a
								>

								<a
									href="/listings.html"
									class="${pathname === '/listings.html' ? 'text-black font-medium' : ''}text-gray-300 hover:text-medium hover:text-white block px-3 py-2 rounded-md text-base font-medium"
									>Auctions</a
								>

								<a
									href="/signin.html"
									class="${pathname === '/signin.html' ? 'text-black font-medium' : ''}text-gray-300 hover:text-medium hover:text-white block px-3 py-2 rounded-md text-base font-medium"
									>Log in</a
									>
							</div>
						`;
		activeUserMobile = ''
		activeAvatar = '';
							
        if (userName) {
            navLinksMobile =
								`
									<div class="space-y-1 px-2 pt-2 pb-3">
										<a
											href="/index.html"
											class="${pathname === '/index.html' ? 'text-black font-medium' : ''} text-gray-300 font-body hover:text-medium hover:text-white block px-3 py-2 rounded-md text-base font-medium"
											>Home</a
										>

										<a
											href="/listings.html"
											class="${pathname === '/listings.html' ? 'text-black font-medium' : ''}text-gray-300 hover:text-medium hover:text-white block px-3 py-2 rounded-md text-base font-medium"
											>Auctions</a
										>

										<a
											href="/addProduct.html"
											class="${pathname === '/addProduct.html' ? 'text-black font-medium' : ''}text-gray-300 hover:text-medium hover:text-white block px-3 py-2 rounded-md text-base font-medium"
											>Add listing</a
										>

										<a
											href="/profile.html"
											class="${pathname === '/profile.html' ? 'text-black font-medium' : ''}text-gray-300 hover:text-medium hover:text-white block px-3 py-2 rounded-md text-base font-medium"
											>Profile</a
										>
									</div>
								`
			activeUserMobile = `
									<span class="sr-only"></span>
									<p class="text-white">${credits}</p>
									<p class="text-[#F2AE2E] font-medium">CR</p>
								`
			activeAvatar = `
							<img
                            class="h-8 w-8 rounded-full"
                            src="${avatar}"
                            alt="Avatar"
                        />`
        }
		
        if (navDesktop) {
			let navLinksDesktop;
            navLinksDesktop =
								`
									<div class="flex space-x-4 mx-auto max-w-7xl">
													<a
														href="/index.html"
														class="${pathname === '/index.html' ? 'text-black font-medium' : ''}text-white px-3 py-2 rounded-md text-sm font-medium"
														aria-current="page"
														>Home</a
													>

													<a
														href="/listings.html"
														class="${pathname === '/listings.html' ? 'text-black font-medium' : ''}text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
														>Auctions</a
													>
													<a
														href="/signin.html"
														class="${pathname === '/sign.html' ? 'text-black font-medium' : ''} text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
														>Sign in</a
													>
									</div>
								`;
			activeAvatar = '';
			
        if (userName) {
                navLinksDesktop =
                    			`
									<div class="flex space-x-4 mx-auto max-w-7xl">
												<a
													href="/index.html"
													class="${pathname === '/index.html' ? 'text-black font-medium' : ''}text-gray-300 px-3 py-2 rounded-md text-sm font-medium"
													aria-current="page"
													>Home</a
												>

												<a
													href="/listings.html"
													class="${pathname === '/listings.html' ? 'text-black font-medium' : ''}text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
													>Auctions</a
												>

												<a
													href="/addProduct.html"
													class="${pathname === '/addProduct.html' ? 'text-black font-medium' : ''} text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
													>Add listing</a
												>

												<a
													href="/profile.html"
													class="${pathname === '/profile.html' ? 'text-black font-medium' : ''} text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
													>Profile</a
												>
									</div>	
								`
            }
            navMobile.innerHTML = `${navLinksMobile}`
            navDesktop.innerHTML = `${navLinksDesktop}`
			userBTN.innerHTML = `${activeUserMobile}`
			AvatarContainer.innerHTML = `${activeAvatar}`
        }
    }
}

export {navBar}

