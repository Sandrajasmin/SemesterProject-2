import { getUserName } from "../utils/storage";

const navBar = () => {
	const { pathname } = document.location;
	const navMobile = document.getElementById('mobile-menu');
	const navDesktop = document.getElementById('nav-links-desktop');

	if(navMobile) {
		const userName = getUserName();
		let navLinksMobile;

		navLinksMobile =`
							<div class="space-y-1 px-2 pt-2 pb-3">
								<a
									href="/index.html"
									class="${pathname === '/index.html' ? 'text-[#F2AE2E]' : ''} text-gray-300 font-body hover:text-medium hover:text-white block px-3 py-2 text-xs font-medium"
									>Home</a
								>
								<a
									href="/listings.html"
									class="${pathname === '/listings.html' ? 'text-[#F2AE2E]' : ''}text-gray-300 hover:text-medium hover:text-white block px-3 py-2 text-xs font-medium"
									>Auctions</a
								>
								<a
									href="/addProduct.html"
									class="${pathname === '/addProduct.html' ? 'text-[#F2AE2E]' : ''}text-gray-300 hover:text-medium hover:text-white block px-3 py-2 text-xs font-medium"
									>Add listing</a
								>
								<a
									href="/profile.html"
									class="${pathname === '/profile.html' ? 'text-white' : ''}text-gray-300 hover:text-medium hover:text-white block px-3 py-2 text-xs font-medium"
									>Profile</a
								>
							</div>`;
		if(!userName) {
			navLinksMobile = `
								<div class="space-y-1 px-2 pt-2 pb-3">
									<a
										href="/index.html"
										class="${pathname === '/index.html' ? 'text-[#F2AE2E]' : ''} text-gray-300 font-body hover:text-medium hover:text-white block px-3 py-2 text-xs font-medium"
										>Home</a
									>
									<a
										href="/listings.html"
										class="${pathname === '/listings.html' ? 'text-amber-400' : ''}text-gray-300 hover:text-medium hover:text-white block px-3 py-2 text-xs font-medium"
										>Auctions</a
									>
									<a
										href="/signin.html"
										class="${pathname === '/signin.html' ? 'text-[#F2AE2E]' : ''}text-white hover:text-medium hover:text-white block px-3 py-2 text-xs font-medium"
										>Log in</a
										>
								</div>	
							`;
		}

		if(navDesktop) {
			let navLinksDesktop;
			navLinksDesktop = `
								<div class="flex space-x-4 mx-auto max-w-7xl">
									<a
										href="/index.html"
										class="${pathname === '/index.html' ? 'text-black font-medium' : ''}text-gray-300 hover:text-white px-3 py-2 text-xs font-medium"
										>Home</a
									>
									<a
										href="/listings.html"
										class="${pathname === '/listings.html' ? 'text-black font-medium' : ''}text-gray-300 hover:text-white px-3 py-2 text-xs font-medium"
										>Auctions</a
									>
									<a
										href="/addProduct.html"
										class="${pathname === '/addProduct.html' ? 'text-black font-medium' : ''} text-gray-300 hover:text-white px-3 py-2 text-xs font-medium"
										>Add listing</a
									>
									<a
										href="/profile.html"
										class="${pathname === '/profile.html' ? 'text-black font-medium' : ''} text-gray-300 hover:text-white px-3 py-2 text-xs font-medium"
										>Profile</a
									>
								</div>	
							`;
				
			if (!userName) {
				navLinksDesktop = `
									<div class="flex text-base mx-auto max-w-7xl">
										<a
											href="/index.html"
											class="${pathname === '/index.html' ? 'text-black font-medium' : ''}text-gray-300 hover:text-white px-3 py-2 text-xs "
											>Home</a
										>
										<a
											href="/listings.html"
											class="${pathname === '/listings.html' ? 'text-black font-medium' : ''}text-gray-300 hover:text-white px-3 py-2 text-xs "
											>Auctions</a
										>
										<a
											href="/signin.html"
											class="${pathname === '/sign.html' ? 'text-black font-medium' : ''} text-gray-300 hover:text-white px-3 py-2 text-xs "
											>Sign in</a
										>
									</div>
								`;
			}
			navMobile.innerHTML = `${navLinksMobile}`
			navDesktop.innerHTML = `${navLinksDesktop}`
		};
	};
};

export {navBar};
