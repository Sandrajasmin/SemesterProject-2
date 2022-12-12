import { getToken } from "./utils/storage";
import { GET_PROFILE_URL, LOG_IN_URL } from "./settings/api";

const profileDetails = document.getElementById('profile-details');
const userAvatar = document.getElementById('userAvatar')

console.log(profileDetails);

const accessToken = getToken();

async function getProfile () {
    const response = await fetch(GET_PROFILE_URL, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${accessToken}`,
        },
    })
    console.log('Get profile response', response);
    const profile = await response.json();
    const name = profile.name;
    const email = profile.email;
    const avatar = profile.avatar;
    const credits = profile.credits;
    console.log(name);
    console.log(credits);
    console.log(avatar);
    profileDetails.innerHTML =
                                `
                                <div class="px-7 mb-8">
                                    <h2 class="text-3xl font-h1 dark:text-gray-300">
                                        ${name}
                                    </h2>
                                    <p class="mt-2 font-h2 text-[#F2AE2E]"><span class="text-white">${credits}</span>CR</p>
                                    <p class="mt-2 font-body text-gray-600 dark:text-gray-300">
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                                        Asperiores molestiae vitae odio non commodi itaque quisquam
                                        incidunt doloribus fugit nesciunt.
                                    </p>
                                    <div class="justify-center px-4 py-2 cursor-pointer max-w-min mx-auto mt-8 rounded-lg text-gray-300 bg-gray-700 ">
                                        ${email}
                                    </div>
                                </div>
                                `
    userAvatar.innerHTML = 
    `
    <img
		alt="Avatar"
		src="${avatar}"
		class="mx-auto object-cover rounded-full h-24 w-24 bg-[#F2AE2E] p-1"
	/>
    `
}

getProfile();