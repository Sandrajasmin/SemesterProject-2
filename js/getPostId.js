import { getToken, updateLocalStorageInfo } from './utils/storage';
import { formatDate } from './utils/dateformat';
import { GET_LISTING_BY_ID, GET_USER_PROFILE_URL } from './settings/api';

const paramString = window.location.search;
const searchParam = new URLSearchParams(paramString);
const listingId = searchParam.get('id');
const accessToken = getToken();

//Listing
const listingImage = document.getElementById('listing_img');
const listingTitle = document.getElementById('listing-title');
const listingDescripton = document.getElementById('description-detail');

//Seller
const userDetail = document.getElementById('seller-details');
const userAvatar = document.getElementById('user-image');

//Bid
const currentBid = document.getElementById('current-bid');
const biddersDetail = document.getElementById('subtext');

const SINGLE_LISTING_INFO = `${GET_LISTING_BY_ID}/${listingId}/?_seller=true&_bids=true`
const getListingById = async () => {
    const response = await fetch(`${SINGLE_LISTING_INFO}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if (response.ok) {
        const data = await response.json();

        //listing
        const title = data.title;
        const description = data.description;
        const endsAt = formatDate(data.endsAt);
        const listingImg = data.media[0];
        //const currentBid = data._count; 
    
        //Seller
        const sellerName = data.seller.name
        const sellerAvatar = data.seller.avatar
    
        //bidders
        const bidName = data.bids.bidderName
        const bid = data.bids;
        bid.sort((x, y) => y.amount - x.amount)
        
        let highestBid = 0;
        if (bid[0]) {
            highestBid = bid[0].amount;
        };
        const bidValue = highestBid + 0;
        if (!bidValue) {
            `${0}`;
        };

        //description html
        let descriptionListing = 
                            `
                                <p class="text-sm font-body ml-4"> ${description}</p>
                            `;
        if (!description){
            descriptionListing = 
                                `
                                    <p class=" text-sm text-gray-600 font-body">Sorry, there is no description for this listing. Contact seller for more information</p>
                                `
        }
        
        listingDescripton.innerHTML = 
        `
        <h2 class="text-sm mr-4 font-body text-gray-900">Description: </h2>
		<div>
		    ${descriptionListing}
 		</div>
        `;

        // Listing media html 
        let listingMedia =
                            `
                                <img 
                                    src = "${listingImg}" 
                                    alt = "product image" 
                                    class=""
                                />
                            `;
        if (!listingImg) {
            listingMedia =
                            `
                                <img 
                                    src = "/img/default-thumbnail.jpeg" 
                                    alt = "product image" 
                                    class="h-full w-full object-cover object-center"
                                />
                            `;
        };
        listingImage.innerHTML = 
                                `
                                    ${listingMedia}
                                `
        let avatar =
            `
                    <img
                        class="h-16 w-16 rounded-full bg-[#F2AE2E] p-0.5 mr-5"
                        src="${sellerAvatar}"
                        alt=""
                    />
                `

        if (!sellerAvatar) {
            avatar =
                    `
                        <img
                            class="h-16 w-16 rounded-full mr-5"
                            src="/img/default-avatar.png"
                            alt=""
                        />
                    `
        }
        userAvatar.innerHTML =
                                `
                                    <h3 class="sr-only">Seller</h3>
                                    ${avatar}
                                `;

        //all bids
        if (!bid.length) {
            biddersDetail.innerHTML = `<p class="text-black text-center text-sm italic font-body py-10">No bids made on this listing<p>`;
        }

        for (let data of bid) {
            console.log(data);
            const seller = data.bidderName;
            const amount = data.amount;
            console.log(seller);

            let listing = `
                            <div class="">
                                <ul class="">
                                    <li class="text-14 text-gray-700 my-4 flex items-center ">
                                        <div id="user-image">
                                            <h3 class="sr-only">Seller</h3>
                                            <img
                                                class="h-16 w-16 rounded-full mr-5"
                                                src="/img/default-avatar.png"
                                                alt=""
                                            />
                                        </div>
                                        <div id="user-details">
                                            <a href="#" class=" text-sm font-body text-indigo-600 hover:text-indigo-500">${seller}</a>
                                                <div class="flex items-center">
                                                    <h3 class="sr-only">Bid</h3>
                                                    <h3 class="font-body text-green-700">$ ${amount}</h3>
                                                </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>`;

            biddersDetail.innerHTML += listing;
        }                        
        document.title = `${title}`;
        listingTitle.innerHTML = 
                                `
                                    <h1 class="text-4xl font-bold text-gray-900 sm:text-3xl">${title}</h1>
                                `;
        currentBid.innerHTML =
                                `
                                    <div class="flex text-sm mt-4">
                                        <h2 class="font-body mr-4">Current bid:</h2>
                                        <p class="font-body tracking-tight text-green-700">${bidValue}</p>
                                    </div>
                                    <div class="flex text-sm mt-4">
                                        <h2 class="font-body mr-9">Ends at:</h2>
                                        <p class="font-body tracking-tight text-red-700">${endsAt}</p>
                                    </div>
                                `;
        userDetail.innerHTML +=
                                `
                                    <a id="" href="#" class=" text-sm font-body text-white hover:text-indigo-500"> ${sellerName}</a>
                                        <div class="flex items-center">
                                            <h3 class="sr-only">Reviews</h3>
                                            <svg class="text-[#F2AE2E] h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd" />
                                            </svg>
                                            <!-- Heroicon name: mini/star -->
                                            <svg class="text-[#F2AE2E] h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd" />
                                            </svg>
                                            <!-- Heroicon name: mini/star -->
                                            <svg class="text-[#F2AE2E] h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd" />
                                            </svg>
                                            <!-- Heroicon name: mini/star -->
                                            <svg class="text-[#F2AE2E] h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
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
    };
};

getListingById();

//bid on listing
const BID_ON_LISTING_URL = `${GET_LISTING_BY_ID}/${listingId}/bids`;
const biddingForm = document.getElementById('bid-form');
const placeBid = document.getElementById('place-bid');
const errorBid = document.getElementById('place-bid-error');
const successBid = document.getElementById('place-bid-success');
const userNotLoggedIn = document.getElementById('make-bid-login');

if (!accessToken) {
    biddingForm.classList.add('hidden');
    userNotLoggedIn.classList.remove('hidden');
};

biddingForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const bidValue = getListingById();
    if(placeBid.value <= bidValue) {
        errorBid.classList.remove('hidden')
    };

    const amountBid = {
        amount: parseInt(placeBid.value),
    };

    const makeBid = async () => {
        const response = await fetch(BID_ON_LISTING_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${accessToken}`,
            },
            body: JSON.stringify(amountBid),
        });
        if (response.ok) {
            console.log('tjoho');
            errorBid.innerHTML = '';
            successBid.innerHTML = 'Your bid is added';
            biddingForm.reset();
            setTimeout(function () {
                location.reload();
                updateLocalStorageInfo(GET_USER_PROFILE_URL);
            }, 3000)
        }
        
        else {
            const err = await response.json();
            const message = `${err.errors[0].message}`
            errorBid.innerHTML = `<p class="font-body text-red-800">${message}</p>`
            console.log(err);
            console.log('failed');

            throw new Error(message);
        }
    };
    makeBid();
});

// const buttonBTN = document.querySelector('#button');
// const buttonMenu = document.querySelector('#subtext');

// buttonMenu.classList = 'hidden';

// buttonBTN.addEventListener('click', () => {
//      buttonMenu.classList.toggle('hidden');
// });

// const buttonBTN2 = document.querySelector('#make-bid-btn');
// const buttonMenu2 = document.querySelector('#make-bid-subtext');

// buttonMenu2.classList = 'hidden';

// buttonBTN2.addEventListener('click', () => {
//      buttonMenu2.classList.toggle('hidden');
// });
