import { CREATE_LISTING_URL } from './settings/api';
import { validImg } from './utils/validation';
import { getToken } from './utils/storage';

const createListingForm = document.getElementById('add-listing');

// title
const listingTitle = document.getElementById('title-title');
console.log(listingTitle);
const titleError = document.getElementById('titleError');
console.log(titleError);

// deadline
const listingDeadline = document.getElementById('deadline');
const listingDeadlineError = document.getElementById('deadLineError');

//img
const listingImg = document.getElementById('imageUrl');
const listingImg2 = document.getElementById('imageUrl2');
const listingImg3 = document.getElementById('imageUrl3');
const listingImgError = document.getElementById('imgError3');
const listingImgError2 = document.getElementById('imgError2');
const listingImgError3 = document.getElementById('imgError3');
const listingImgInput = document.querySelectorAll('.imageInput');

const generalError = document.getElementById('general-error');
console.log(generalError);

const accessToken = getToken();
if(!accessToken){
    location.href = '/signin.html'
}



// Create listing with validation
createListingForm.addEventListener('submit', function (event) {
    event.preventDefault();

    //title error
    let isListingTitle = false;
    if (listingTitle.value.trim().length > 0) {
        titleError.classList.add('hidden');
        isListingTitle = true;
    } else {
        titleError.classList.remove('hidden');
    }

    //description error
    let isListingDescripton = false;
    if (listingDescription.value.trim().lenght > 0) {
        listingDescriptionError.classList.add('hidden');
        isListingDescripton = true;
    } else {
        listingDescriptionError.classList.remove('hidden');
    }

    //deadline error
    let isListingDeadline = false;
    if (listingDeadline.value) {
        listingDeadlineError.classList.add('hidden');
        isListingDeadline = true;
    } else {
        listingDeadlineError.classList.remove('hidden');
    }

    //image error
    let isImageValid = false;
    isImageValid = validImg(listingImg.value) || listingImg.value === '';
    if (isImageValid) {
        listingImgError.classList.add('hidden');
    } else {
        listingImgError.classList.remove('hidden');
    }

    //image error2
    let isImageValid2 = false;
    isImageValid2 = validImg(listingImg2.value) || listingImg2.value === '';
    if (isImageValid2) {
        listingImgError2.classList.add('hidden');
    } else {
        listingImgError2.classList.remove('hidden');
    }

    //image error3
    let isImageValid3 = false;
    isImageValid3 = validImg(listingImg3.value) || listingImg3.value === '';
    if (isImageValid3) {
        listingImgError2.classList.add('hidden');
    } else {
        listingImgError2.classList.remove('hidden');
    }

    const isFormValid = isListingTitle  && isListingDeadline;

    if(isFormValid) {
        const date = new Date(listingDeadline.value);

        let listingMedia = [];
        for (let i = 0; i < listingImgInput.length; i++) {
            if(listingImgInput[i].value) {
                listingMedia.push(listingImgInput[i].value)
            }
        }

        const listingData = {
            title: listingTitle.value,
            description: listingDescription.value,
            media: listingMedia,
            endsAt: date,
        };

        (async function createListing() {
            const response = await fetch(CREATE_LISTING_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${accessToken}`,
                },
                body: JSON.stringify(listingData),
            });
            if (response.ok) {
                location.href = '../index.html';
            } else {
                const error = await response.json();
                const errorMessage = `${error.errors[0].message}`;
                throw new Error(errorMessage);
            }
        })().catch((errorMessage) => {
            generalError.innerHTML = errorMessage;
        });
    }
});


// createListingForm.addEventListener("submit", function (event) {
//     event.preventDefault();
//     console.log("i clicked the form BTN");
//     console.log(listingTitle.value.trim())
//     console.log(listingDescription.value.trim())
//     console.log(listingImg.value.trim())
//     console.log(listingImg2.value.trim())
//     console.log(listingImg3.value.trim())
//     console.log(listingDeadline.value)

//     const listingImages = [listingImg.value, listingImg2.value, listingImg3.value];

//     const listingData = {
//         "title": listingTitle.value.trim(),
//         "description": listingDescription.value.trim(),
//         "media": listingImages.length > 0 ? listingImages : null,
//         "endsAt": listingDeadline.value
//     }
//     console.log("listingData: ", listingData);

//     async function createListing() {
//         const response = await fetch(CREATE_LISTING_URL, {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//                 "Authorization": `Bearer ${accessToken}`
//             },
//             body: JSON.stringify(listingData)
//         })
//         console.log("list creation response: ", response)
//         if (response.ok) {
//             const listingData = await response.json();
//             location.href = '/index.html'
//             console.log(listingData);
//             console.log("CREATE LIST SUCCEEDED!!  🥳 🤗🤗");
//         } else {
//             const err = await response.json();
//             console.log(err);
//             console.log("CREATE LIST FAILED Hesham!!");
//         }
//         createListingForm.reset();
//     }
//     createListing();
// })
