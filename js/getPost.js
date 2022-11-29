import moment from 'moment';
import { GET_POST_URL } from './settings/api';
import { getToken } from './utils/storage';

const listing = document.querySelector('#list-items');
const postsNotificationMessage = document.querySelector('#post_Message')
let data = [];

const accessToken = getToken();
if (!accessToken) {
    location.href = 'logIn.html';
};

(async function getAllPosts() {
    const response = await fetch(GET_POST_URL, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${accessToken}`
        }
    })

    if (response.ok) {
        const posts = await response.json();
        let now = moment(new Date()); //today's date
        if (!posts.length) {
            postsNotificationMessage.innerHTML = "Sorry no posts currently";
        } else {
            const listOfHtmlPosts = posts.map((post) => {
                const id = post.id;
                const postBody = post.body;
                const postTitle = post.title;
                const createdDate = post.created;
                const endsAt = post.endsAt;
                const media = post.media
                const bid = post._count.bids;

                const daysSinceCreated = now.diff(endsAt, 'minutes');
                return (`
                <a href="/detail.html?post_id=${id}">
							<div id="listing-detail" class="max-w-xs rounded-md shadow-lg hover:scale-105 transition duration-500 cursor-pointer z-0">
								<div class="max-h-50 max-w-60">
									<img
										src="${media}"
										alt=""
									/>
								</div>
								<div class="py-4 px-4 bg-white">
									<h3 class="text-lg font-semibold text-gray-600">
										${postTitle}
									</h3>
									<div class="flex">
										<p class="mt-4 mr-3 text-lg font-thin">Active Bids:</p>
										<p class="mt-4 text-lg text-green-500">${bid}</p>
									</div>
									<div class="flex">
										<p class="mt-4 mr-3 text-lg font-thin">Time Ending</p>
										<p class="mt-4 text-lg text-red-700">4h 32m</p>
									</div>
									<div class="flex justify-center">
										<button class="bg-black w-full my-3 hover:bg-[#A77619] rounded-md">
											<p class="font-body text-white py-2">View listing</p>
										</button>
									</div>
								</div>
							</div>
						</a>

                    
            `)
            }).join('');
            // Add Posts to the page
            listing.insertAdjacentHTML('beforeend', listOfHtmlPosts);
        }

    } else {
        const err = await response.json();
        const message = `Sorry some error ${err}`;
        throw new Error(message)
    }
})().catch(err => {
    postsNotificationMessage.innerHTML = err
});
