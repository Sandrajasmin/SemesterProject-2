import { CREATE_LISTING_URL } from './settings/api';
//import { validImg } from './utils/validation';
import { getToken } from './utils/storage';

const createListingForm = document.getElementById('add-listing');

// title
const listingTitle = document.getElementById('title');
const titleError = document.getElementById('titleError');
// Description
const listingDescription = document.getElementById('description');
//const listingDescriptionError = document.getElementById('descriptonError');

// deadline
const listingDeadline = document.getElementById('deadline');
//const listingDeadlineError = document.getElementById('deadLineError');

//img
const listingImg = document.getElementById('imageUrl');
const listingImg2 = document.getElementById('imageUrl2');
const listingImg3 = document.getElementById('imageUrl3');
//const listingImgError = document.getElementById('imageError');

//const generalError = document.getElementById('general-error');

const accessToken = getToken();
if(!accessToken){
    location.href = '/signin.html'
}

createListingForm.addEventListener("submit", function (event) {
    event.preventDefault();
    console.log("i clicked the form BTN");
    console.log(listingTitle.value.trim())
    console.log(listingDescription.value.trim())
    console.log(listingImg.value.trim())
    console.log(listingImg2.value.trim())
    console.log(listingImg3.value.trim())
    console.log(listingDeadline.value)

    const listingImages = [listingImg.value, listingImg2.value, listingImg3.value];

    const listingData = {
        "title": listingTitle.value.trim(),
        "description": listingDescription.value.trim(),
        "media": listingImages.length > 0 ? listingImages : null,
        "endsAt": listingDeadline.value
    }
    console.log("listingData: ", listingData);

    async function createListing() {
        const response = await fetch(CREATE_LISTING_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${accessToken}`
            },
            body: JSON.stringify(listingData)
        })
        console.log("list creation response: ", response)
        if (response.ok) {
            const listingData = await response.json();
            location.href = '/index.html'
            console.log(listingData);
            console.log("CREATE LIST SUCCEEDED!!  🥳 🤗🤗");
        } else {
            const err = await response.json();
            console.log(err);
            console.log("CREATE LIST FAILED Hesham!!");
        }
        createListingForm.reset();
    }
    createListing();
})


// // Create listing with validation
// createListingFrom.addEventListener('submit', function (event) {
//     event.preventDefault();

//     //title error
//     let isListingTitle = false;
//     if (listingTitle.value.trim().lenght > 0) {
//         titleError.classList.add('hidden');
//         isListingTitle = true;
//     } else {
//         titleError.classList.remove('hidden');
//     }

//     //description error
//     let isListingDescripton = false;
//     if (listingDescription.value.trim().lenght > 0) {
//         listingDescriptionError.classList.add('hidden');
//         isListingDescripton = true;
//     } else {
//         listingDescriptionError.classList.remove('hidden');
//     }

//     //deadline error
//     let isListingDeadline = false;
//     if (listingDeadline.value) {
//         listingDeadlineError.classList.add('hidden');
//         isListingDeadline = true;
//     } else {
//         listingDeadlineError.classList.remove('hidden');
//     }

//     //image error
//     let isImageValid = false;
//     isImageValid = validImg(listingImg.value) || listingImg.value === '';
//     if (isImageValid) {
//         listingImgError.classList.add('hidden');
//     } else {
//         listingImgError.classList.remove('hidden');
//     }

//     let isFormValid = isListingTitle && isListingDescripton && isListingDeadline && isImageValid;

//     if(isFormValid) {
//         const date = new Date(listingDeadline.value);
//         const listingData = {
//             title: listingTitle.value,
//             description: listingDescription.value,
//             media: listingImg.value,
//             endsAt: date,
//         };
//         (async function createListing() {
//             const response = await fetch(CREATE_LISTING_URL, {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                     Authorization: `Bearer ${accessToken}`,
//                 },
//                 body: JSON.stringify(listingData),
//             });
//             if (response.ok) {
//                 location.href = '../index.html';
//             } else {
//                 const error = await response.json();
//                 const errorMessage = `${error.errors[0].message}`;
//                 throw new Error(errorMessage);
//             }
//         })().catch((errorMessage) => {
//             generalError.innerHTML = errorMessage;
//         });
//     }else {
//         console.log('validation failed');
//     }
// });

