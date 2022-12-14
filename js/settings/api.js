import { getUserName } from '../utils/storage'
const userName = getUserName();

const BASE_URL = 'https://api.noroff.dev/';
//Authorization
const LOG_IN_URL = BASE_URL + 'api/v1/auction/auth/login';
const SIGN_UP_URL = BASE_URL + 'api/v1/auction/auth/register';

//Listings
const GET_LISTINGS_URL = BASE_URL + 'api/v1/auction/listings';
const GET_LISTING_BY_ID = BASE_URL + 'api/v1/auction/listings';
const GET_SORTED_LISTINGS_URL = BASE_URL + 'api/v1/auction/listings?&sort=created&sortOrder=desc&_bids=true&limit=4';
const GET_ALL_LISTINGS_URL = BASE_URL + 'api/v1/auction/listings?&sort=created&sortOrder=desc&_bids=true';

//Create listing
const CREATE_LISTING_URL = BASE_URL + 'api/v1/auction/listings';

//Profiel
const GET_PROFILE_URL = BASE_URL + `api/v1/auction/profiles/${userName}/?_listings=true`;
const GET_PROFILE_LISTINGS = BASE_URL + `api/v1/auction/profiles/${userName}/listings`;

//Update Avatar
const UPDATE_AVATAR_URL = BASE_URL + `api/v1/auction/profiles/${userName}/media`;
const GET_USER_PROFILE_URL = BASE_URL + `api/v1/auction/profiles/${userName}`;
 
export { 
    BASE_URL, 
    SIGN_UP_URL, 
    LOG_IN_URL, 
    GET_LISTINGS_URL,  
    GET_LISTING_BY_ID, 
    CREATE_LISTING_URL, 
    GET_ALL_LISTINGS_URL, 
    GET_PROFILE_URL, 
    GET_PROFILE_LISTINGS,
    UPDATE_AVATAR_URL,
    GET_USER_PROFILE_URL,
    GET_SORTED_LISTINGS_URL,
};
