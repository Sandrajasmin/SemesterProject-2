import { getUserName, getUserCredit , getUserAvatar } from "../utils/storage";

function createHeaderBar () {
	const { pathname } = document.location;	
	//const userCreditDetail = document.getElementById('user-credit');
	const userAvatarDetail = document.getElementById('user-menu-btn');
	const navLinksDesktop = document.getElementById('nav-links-desktop')
	
	if(userAvatarDetail) {
		const userName = getUserName();
		let avatar = getUserAvatar();
		console.log(avatar);

		// let userAvatar =
		// 	`
		// 		<img
		// 			class="h-8 w-8 rounded-full"
		// 			src="${avatar}"
		// 			alt="Avatar"
		// 		/>
		// 	`
		// if (!avatar) {
		// 	userAvatar =
		// 		`
		// 	<img
		// 		class="h-8 w-8 rounded-full"
		// 		src="/img/default-thumbnail.jpeg"
	 	// 		alt=""
		// 	/>
			
		// 	`
		}
	}
	
	
	if(navLinksDesktop) {
		// const userAvatar = getUserAvatar();
		// const userCredit = getUserCredit();
		
		let navLinks;
		if(userName) {
			navLinks = 
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
		}
		navLinksDesktop.innerHTML = 
		`
		${navLinks}
		`
		userAvatarDetail.innerHTML = 
		`
		<span id="userAvatar" class="sr-only">Open user menu</span>
		${userAvatar}
		`
	}
	// if(userDetail) {
	// 	const userName = getUserName();
	// 	let avatar = getUserAvatar();
	// 	let userAvatar = 
	// 		`
	// 		<img										
	// 			class="h-8 w-8 rounded-full"
	// 			src="${avatar}"
	// 			alt="Avatar"
	// 		/>
	// 		`
	// 	if(!avatar) {
	// 		userAvatar = 
	// 		`
	// 		<img
	// 			class="h-8 w-8 rounded-full"
	// 			src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
	// 			alt=""
	// 		/>
	// 		`
	// 	}
	// 	const userCredit = getUserCredit();
	// 	let userInfo;
	// 	userInfo = 
	// 	`
	// 	<p id="credits" class="text-white"></p>
	// 	`
	// }
};



createHeader = () => {
	const userAvatar = document.getElementById('user-menu-btn');
	const userCredit = document.getElementById('credit');
} 