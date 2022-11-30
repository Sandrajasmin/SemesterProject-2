import { getToken } from './utils/storage';
import { formatDate } from './utils/dateformat';
import { GET_LISTING_BY_ID, BIDDER_SELLER_DET} from './settings/api';

const paramString = window.location.search;
const searchParam = new URLSearchParams(paramString);
const listingId = searchParam.get('post_id');
const accessToken = getToken();

const pageTitle = document.getElementById('page-title')
//Listing
const singleListing = document.getElementById('main');
const listingImg = document.getElementById('listing_img');
const listingTitle = document.getElementById('listing-title');
const listingDescripton = document.getElementById('description-detail');

//Seller
const userDetail = document.getElementById('user-details');
const userAvatar = document.getElementById('user-image');

//Bid
const currentBid = document.getElementById('current-bid');
const biddersDetail = document.getElementById('subtext');


const getListingById = async () => {
    const response = await fetch(`${GET_LISTING_BY_ID}/${listingId}${BIDDER_SELLER_DET}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });

    const data = await response.json();
    console.log(data);

    //listing
    const title = data.title;
    const description = data.description;
    const endsAt = formatDate(data.endsAt);
    //const currentBid = data._count; 
    
    //Seller
    const sellerName = data.seller.name
    //const sellerAvatar = data.seller.avatar
    
    //bidders
    //const bidName = data.bids.bidderName
    
    let listingMedia = 
    `
    <img 
        src = "${data.media[0]}" 
        alt = "product image" 
        class="h-full w-full object-cover object-center" >

    `
    if(!data.media[0]) {
        listingMedia = 
        `
        <img 
            src = "/img/default-thumbnail.jpeg" 
            alt = "product image" 
            class="h-full w-full object-cover object-center" >
        `;
 
    }

    let avatar = 
    `
    <img
		class="h-16 w-16 rounded-full mr-5"
		src="${data.seller.avatar[0]}"
		alt=""
	/>
    `

    if(data.seller.avatar[0]) {
        avatar = 
        `
        <img
		    class="h-16 w-16 rounded-full mr-5"
		    src="/img/default-avatar.png"
		    alt=""
	    />
        `
    }

    pageTitle.innerHTML += 
    `
    Biddify | ${title} |
    `
    
    listingImg.innerHTML += 
    `
    ${listingMedia}
    `

    listingTitle.innerHTML +=
        `
            <h1 class="text-2xl font-h1 tracking-tight text-gray-900 sm:text-3xl md:px-5">Title: ${title}</h1>
        `
    userAvatar.innerHTML += 
    `
    <h3 class="sr-only">Seller</h3>
	${avatar}
    `  
    userDetail.innerHTML +=
        `
        <a href="#" class=" text-sm font-body text-indigo-600 hover:text-indigo-500">${sellerName}</a>
		    <div class="flex items-center">
				<h3 class="sr-only">Reviews</h3>
				<svg class="text-gray-900 h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
					<path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd" />
				</svg>
                <!-- Heroicon name: mini/star -->
				<svg class="text-gray-900 h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
					<path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd" />
				</svg>
				<!-- Heroicon name: mini/star -->
				<svg class="text-gray-900 h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
					<path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd" />
				</svg>
				<!-- Heroicon name: mini/star -->
				<svg class="text-gray-900 h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
					<path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd" />
				</svg>
				<!-- Heroicon name: mini/star -->
				<svg class="text-gray-200 h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
					<path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd" />
				</svg>
		</div>
		<p class="sr-only">4 out of 5 stars</p>
		<div>
			<a href="#" class="text-sm font-body text-indigo-600 hover:text-indigo-500">117 reviews</a>
		</div>        
        `;
    currentBid.innerHTML +=
    `
        <div class="flex ">
            <h2 class="font-body mr-10">Current bid:</h2>
            <p class="font-body tracking-tight text-green-700">FIX</p>
        </div>
        <div class="flex mt-2">
            <h2 class="font-body mr-10">Ends at:</h2>
            <p class="font-body tracking-tight text-red-700">${endsAt}</p>
        </div>
    `
    biddersDetail.innerHTML +=
        `
        <div class=" group block relative break-words last-child:mb-0 rounded-8 pt-0">
			<div class=" md:my-0">
				<ul>
					<li class="text-14 text-gray-700 my-4 flex items-center space-x-12 ">
						<div id="user-image">
						    <h3 class="sr-only">Seller</h3>
								<img
									class="h-16 w-16 rounded-full mr-5"
									src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
									alt=""
							/>
						</div>
						<div id="user-details">
							<a href="#" class=" text-sm font-body text-indigo-600 hover:text-indigo-500">Sandra Jasmin</a>
							<div class="flex items-center">
								<h3 class="sr-only">Reviews</h3>
							    <h3 class="font-body text-green-700">$200</h3>
							</div>
						</div>
					</li>
				</ul>
		    </div>
	    </div>
    ` 
    listingDescripton.innerHTML += 
    `
        <h2 class="text-sm font-h2 text-gray-900">Details</h2>
		<div class="mt-4 space-y-6">
			<p class="text-sm text-gray-600 font-body">${description}</p>
		</div>
    `
}

getListingById();

const buttonBTN = document.querySelector('#button');
const buttonMenu = document.querySelector('#subtext');

buttonMenu.classList = 'hidden';

buttonBTN.addEventListener('click', () => {
    buttonMenu.classList.toggle('hidden');
});

const buttonBTN2 = document.querySelector('#make-bid-btn');
const buttonMenu2 = document.querySelector('#make-bid-subtext');

buttonMenu2.classList = 'hidden';

buttonBTN2.addEventListener('click', () => {
    buttonMenu2.classList.toggle('hidden');
});
