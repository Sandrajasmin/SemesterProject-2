import { getToken } from "./utils/storage";
import { validImg } from "./utils/validation";
import { GET_PROFILE_LISTINGS, UPDATE_AVATAR_URL } from "./settings/api";
import { formatDate } from './utils/dateformat'

const activeListings = document.getElementById('active-listings');
const generalError = document.getElementById('genreral-error');
const accessToken = getToken();

(async function getActiveListings () {
    const response = await fetch(GET_PROFILE_LISTINGS, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${accessToken}`,
        },
    });

    if (response.ok) {
        const listings = await response.json();
        if (!listings.length) {
            generalError.innerHTML = 'Sorry, there are currently no listings';
        } else {
            const listOfHtmlPosts = listings
                .map((data) => {
                    const {id} = data;
                    const listingTitle = data.title;
                    const listingMedia = data.media[0];
                    const endsAt = formatDate(data.endsAt);
                    

                    return `
                            <div class="flex" group pt-0">
                                <div id="list-items" class="p-2 mx-auto z-0  md:p-2">	
                                        <a href="/detail.html?id=${id}" class="p-5 md:p-2 max-h-48">
                                            <div class="max-w-xs rounded-md shadow-lg hover:scale-105 transition duration-500 cursor-pointer">
                                                <div class="flex justify-center">
                                                    <img
                                                        src="${listingMedia}"
                                                        alt="listing media"
                                                        class=" max-h-52 max-w-52 lg:max-h-24"
                                                    />
                                                </div>
                                                <div class="py-4 px-4 bg-white">
                                                    <h2 class="text-lg font-semibold text-gray-600">
                                                        ${listingTitle}
                                                    </h2>
                                                    <div class="flex">
										            <p class="mt-4 mr-3 text-sm font-thin">Highest bid:</p>
										            <p class="mt-4 text-sm text-green-500"></p>
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
                                </div>
                            </div>
                            `;
                })
                .join('');
            activeListings.insertAdjacentHTML('beforeend', listOfHtmlPosts);
        }
    } else {
        const err = await response.json();
        const message = `Sorry error occured ${err}`;
        throw new Error(message);
    }
})().catch((err) => {
    console.log('Get listing failed ! ');
    console.log(err);
    generalError.innerHTML = err;
});

// modal and avatar 

const updateBtn = document.getElementById('updateAvatar');
const form = document.getElementById('updateAvatarForm');
const modalBg = document.getElementById('modal-bg');
const updateAvatar = document.getElementById('avatar-img-url');
const avatarError = document.getElementById('imageError');
const avatarError2 = document.getElementById('imageError2');
const exitModal = document.getElementById('exit-modal');

updateBtn.addEventListener('click', (e) => {
    modalBg.classList.remove('hidden');
});

exitModal.onclick = () => {
    modalBg.classList.add('hidden');
};

form.addEventListener('submit', (event) => {
    event.preventDefault();

    let isAvatarValid = false;
    isAvatarValid = validImg(updateAvatar.value);
    if (isAvatarValid) {
        avatarError.classList.add('hidden');
    } else {
        avatarError.classList.remove('hidden');
    }

    let isNotEmpty = false;
    if (updateAvatar.value !== '') {
        avatarError2.classList.add('hidden');
        isNotEmpty = true;
    } else {
        avatarError2.classList.remove('hidden');
    }

    let avatarFormIsValid = isAvatarValid && isNotEmpty;

    if (avatarFormIsValid) {
        const avatarData = {
            avatar: updateAvatar.value,
        };

        console.log(avatarData);
        (async function updateAvatar() {
            const response = await fetch(UPDATE_AVATAR_URL, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${accessToken}`,
                },
                body: JSON.stringify(avatarData),
            });
            if (response.ok) {
                location.reload();
            } else {
                const error = await response.json();
                console.log(error);
            }
        })();
    }
});