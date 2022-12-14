import { GET_ALL_LISTINGS_URL } from './settings/api';
import {formatDate} from './utils/dateformat'

const listing = document.querySelector('#list-items');
const postsNotificationMessage = document.querySelector('#post_Message')
let data = [];

async function getAllPosts() {
    const response = await fetch(GET_ALL_LISTINGS_URL, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        }
    })

    if (response.ok) {
        data = await response.json();
        displayListings(data) 
    } else {
        const err = await response.json();
        const message = `Sorry some error ${err}`;
        throw new Error(message)
    }
};

const displayListings = (data) => {
    listing.innerHTML = '';
    if (!data.length) {
        postsNotificationMessage.innerHTML = "No results found. Sorry!";
    } else {
        const listOfHtmlPosts = data
        .map((data) => {
            const {id} = data;
            const {title} = data;
            const endsAt = formatDate(data.endsAt);
            const media = data.media[0];
            const bid = data.bids;
            bid.sort((x, y) => y.amount - x.amount)

            let highestBid = 0;
            if (bid[0]) {
                highestBid = bid[0].amount;
            }
            const bidValue = highestBid + 0;
            if (!bidValue) {
                `${0}`
            }

            let listingImg =`
                                <img
                                    src="${media}"
                                    alt="listing image"
                                    class="object-cover max-h-40"
                                />
                            `;
            if (!media) {
                listingImg =`
                                <img
                                    src="./img/default-thumbnail.jpeg"
                                    alt=""
                                    class="object-cover max-h-40"
                                />
                            `;
            }

            return `
                        <a href="/detail.html?id=${id}" aria-label="Check out listing" class="">
							<div id="listing-detail" class="bg-white max-w-xs shadow-lg hover:scale-105 transition duration-500 cursor-pointer z-0">
								<div class="flex justify-center">
									${listingImg}
								</div>
								<div class="py-4 px-4 bg-white">
									<h2 class="text-lg h-14 align-baseline overflow-hidden font-semibold text-gray-600">
										${title}
									</h2>
									<div class="flex">
										<p class="mt-4 mr-3 text-sm font-thin">Highest bid:</p>
										<p class="mt-4 text-sm text-green-800">${bidValue}</p>
									</div>
									<div class="flex">
										<p class="mt-4 mr-3 text-sm font-thin">Time Ending</p>
										<p class="mt-4 text-sm text-red-700">${endsAt}</p>
									</div>
									<div class="flex justify-center">
										<button class="bg-black w-full my-3 hover:bg-[#A77619] rounded-md">
											<p class="font-body text-white py-2">View listing</p>
										</button>
									</div>
								</div>
							</div>
						</a>                
                `;
        })
        .join('');
        listing.insertAdjacentHTML('beforeend', listOfHtmlPosts);
    };
};

getAllPosts().then(() => {
    displayListings(data);
});

const searchBar = document.getElementById('search');

searchBar.addEventListener('keyup', (e) => {
    e.preventDefault();
    const searchString = e.target.value.toLowerCase();
    const filteredPosts = data.filter((listing) => {
        return(
            listing.title.toLowerCase().includes(searchString)
        );
    });
    displayListings(filteredPosts);
});
