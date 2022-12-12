import { getUserCredit, getUserAvatar, getUserName } from "../utils/storage";

const navBar = () => {
    const { pathname } = document.location;
    const navMobile = document.getElementById('mobile-menu');
    const navDesktop = document.getElementById('nav-links-desktop');
    const userAvatar = document.getElementById('user-menu-btn');
	const userBTN = document.querySelector('#credit');
	console.log(userBTN);	

    if(navMobile) {
        const userName = getUserName();
        let navLinksMobile;
        navLinksMobile = 
						`
							<div class="space-y-1 px-2 pt-2 pb-3">
								<a
									href="/index.html"
									class="${pathname === '/index.html' ? 'text-white font-medium' : ''} font-body hover:text-medium hover:text-white block px-3 py-2 rounded-md text-base font-medium"
									>Home</a
								>

								<a
									href="/listings.html"
									class="${pathname === '/listings.html' ? 'text-white font-medium' : ''}text-gray-300 hover:text-medium hover:text-white block px-3 py-2 rounded-md text-base font-medium"
									>Auctions</a
								>

								<a
									href="/signin.html"
									class="${pathname === '/signin.html' ? 'text-white font-medium' : ''}text-gray-300 hover:text-medium hover:text-white block px-3 py-2 rounded-md text-base font-medium"
									>Log in</a
									>
							</div>
						`;
		
							
        if (userName) {
            navLinksMobile =
								`
									<div class="space-y-1 px-2 pt-2 pb-3">
										<a
											href="/index.html"
											class="${pathname === '/index.html' ? 'text-white font-medium' : ''} font-body hover:text-medium hover:text-white block px-3 py-2 rounded-md text-base font-medium"
											>Home</a
										>

										<a
											href="/listings.html"
											class="${pathname === '/listings.html' ? 'text-white font-medium' : ''}text-gray-300 hover:text-medium hover:text-white block px-3 py-2 rounded-md text-base font-medium"
											>Auctions</a
										>

										<a
											href="/addProduct.html"
											class="${pathname === '/addProduct.html' ? 'text-white font-medium' : ''}text-gray-300 hover:text-medium hover:text-white block px-3 py-2 rounded-md text-base font-medium"
											>Add listing</a
										>

										<a
											href="/profile.html"
											class="${pathname === '/profile.html' ? 'text-white font-medium' : ''}text-gray-300 hover:text-medium hover:text-white block px-3 py-2 rounded-md text-base font-medium"
											>Profile</a
										>
									</div>
								`
        }
		
        if (navDesktop) {
			let navLinksDesktop;
            navLinksDesktop =
								`
									<div class="flex space-x-4 mx-auto max-w-7xl">
													<a
														href="/index.html"
														class="${pathname === '/index.html' ? '' : ''}text-white px-3 py-2 rounded-md text-sm font-medium"
														aria-current="page"
														>Home</a
													>

													<a
														href="/listings.html"
														class="${pathname === '/listings.html' ? '' : ''}text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
														>Auctions</a
													>
													<a
														href="/signin.html"
														class="${pathname === '/sign.html' ? '' : ''} text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
														>Sign in</a
													>
									</div>
								`;
        if (userName) {
                navLinksDesktop =
                    			`
									<div class="flex space-x-4 mx-auto max-w-7xl">
												<a
													href="/index.html"
													class="${pathname === '/index.html' ? '' : ''}text-white px-3 py-2 rounded-md text-sm font-medium"
													aria-current="page"
													>Home</a
												>

												<a
													href="/listings.html"
													class="${pathname === '/listings.html' ? '' : ''}text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
													>Auctions</a
												>

												<a
													href="/addProduct.html"
													class="${pathname === '/addProduct.html' ? '' : ''} text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
													>Add listing</a
												>

												<a
													href="/profile.html"
													class="${pathname === '/profile.html' ? '' : ''} text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
													>Profile</a
												>
									</div>
									
								`
            }
            navMobile.innerHTML = `${navLinksMobile}`
            navDesktop.innerHTML = `${navLinksDesktop}`
        }
    }
}

export {navBar}

