import { getToken, updateLocalStorageInfo } from "./utils/storage";
import { validImg } from "./utils/validation";
import { GET_PROFILE_LISTINGS, GET_PROFILE_URL, UPDATE_AVATAR_URL } from "./settings/api";
import { formatDate } from './utils/dateformat'

const activeListings = document.getElementById('list-items');
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
                    const endsAt = formatDate(data.endsAt);
                    const media = data.media[0];
                    
                    let listingImg =`
                                     <img
                                        src="${media}"
                                        alt="listing media"
                                        class=" max-h-52 max-w-52 lg:max-h-24"
                                    />
                                    `
                    if (!media) {
                        listingImg =`
                                    <img
                                        src="./img/default-thumbnail.jpeg"
                                        alt="listing media"
                                        class=" max-h-52 max-w-52 lg:max-h-24"
                                    />
                                    `
                    };

                    return ` 
                             <a href="/detail.html?id=${id}" class="max-w-xs shadow-lg hover:scale-105 transition duration-500 cursor-pointer z-0">
                                <div class="w-xs bg-white py-4 hover:scale-105 transition duration-500 cursor-pointer">
                                    <div class="flex justify-center">
                                        ${listingImg}
                                    </div>
                                    <div class="py-4 px-4 bg-white">
                                        <h2 class="text-sm overflow-hidden md:w-40 font-semibold text-gray-600">
                                            ${listingTitle}
                                        </h2>
                                        <div class="flex sm:flex-col">
                                            <p class="mt-4 mr-3 text-xs font-thin">Time Ending</p>
                                            <p class="mt-4 text-xs text-red-700">${endsAt}</p>
                                        </div>
                                    </div>
                                </div>
                            </a>   
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
    };

    let isNotEmpty = false;
    if (updateAvatar.value !== '') {
        avatarError2.classList.add('hidden');
        isNotEmpty = true;
    } else {
        avatarError2.classList.remove('hidden');
    };

    let avatarFormIsValid = isAvatarValid && isNotEmpty;

    if (avatarFormIsValid) {
        const avatarData = {
            avatar: updateAvatar.value,
        };

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
                updateLocalStorageInfo(GET_PROFILE_URL)
            } else {
                const error = await response.json();
                console.log(error);
            };
        })();
    };
});
