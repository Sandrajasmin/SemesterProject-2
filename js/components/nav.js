import { getUserName } from "../utils/storage";
import { getUserCredit, getUserAvatar } from "../utils/storage";


const navBar = () => {
    const { pathname } = document.location;
    const navMobile = document.getElementById('mobile-menu');
    const navDesktop = document.getElementById('nav-links-desktop');
    const userInfo = document.getElementById('user-details')

    if(navMobile) {
        const userName = getUserName();
        const credits = getUserCredit();
        const avatar = getUserAvatar();

        let navLinksMobile;
        let userDetails;
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
        userDetails = 
         `
             <div id="user-credit" class="flex">
                 <a href="/signin.html"><p class="text-[#F2AE2E] font-medium">Sing in</p></a>
             </div>
             
         `
        if (userName) {
            let navLinksMobile;
            let userDetails;
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
            userDetails =
             `
                 <div id="user-credit" class="flex">
                     <p id="credits" class="text-white">${credits}</p>
                     <p class="text-[#F2AE2E] font-medium">CR</p>
                 </div>
                 <div class="relative ml-3">
                     <div class="flex">
                         <button id="user-menu-btn" type="button" class="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:text-white" aria-haspopup="true" aria-expanded="false">
                             <span class="sr-only">Open user menu</span>	
                                 <img
                                     class="h-8 w-8 rounded-full"
                                     src="/img/default-thumbnail.jpeg"
                                     alt="Avatar"
                                 />
                         </button>
                     </div>
                 </div>
            `
        }
        if (navDesktop) {
            let navLinksDesktop;
            navLinksDesktop =
                `
        <div class="flex space-x-4">
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

        userDetails =
        `
             <div id="user-credit" class="flex">
                 <a href="/signin.html"><p class="text-[#F2AE2E] font-medium">Sing in</p></a>
             </div>
             
         `
        if (userName) {
                navLinksDesktop =
                    `
            <div class="flex space-x-4">
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
            userDetails =
                `
             <div id="user-credit" class="flex">
                 <p id="credits" class="text-white">1000</p>
                 <p class="text-[#F2AE2E] font-medium">CR</p>
             </div>
             <div class="relative ml-3">
                 <div class="flex">
                     <button id="user-menu-btn" type="button" class="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:text-white" aria-haspopup="true" aria-expanded="false">
                         <span class="sr-only">Open user menu</span>	
                             <img
                                 class="h-8 w-8 rounded-full"
                                 src="/img/default-thumbnail.jpeg"
                                 alt="Avatar"
                             />
                     </button>
                 </div>
             </div>
         `
            }
            navMobile.innerHTML = `${navLinksMobile}
            <form class="pb-3">
							<label
								for="default-search"
								class="mb-4 text-sm font-medium text-gray-900 sr-only dark:text-white"
								>Search</label
							>
							<div class="relative sm:hidden">
								<div
									class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
								>
									<svg
										aria-hidden="true"
										class="w-5 h-5 text-gray-500 dark:text-gray-400"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
										></path>
									</svg>
								</div>
								<input
									type="search"
									id="default-search-mobile"
									class="block w-full p-2 pl-10 text-sm rounded-lg bg-white"
									placeholder="Search for item..."
									required
								/>
							</div>
						</form>
            `
            navDesktop.innerHTML = `${navLinksDesktop}`
            userInfo.innerHTML = `${userDetails}`
        }
    }
}

export {navBar}

