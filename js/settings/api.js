import { getUserName } from '../utils/storage'

const userName = getUserName();

const BASE_URL = 'https://api.noroff.dev/';
//Authorization
const LOG_IN_URL = BASE_URL + 'api/v1/auction/auth/login';
const SIGN_UP_URL = BASE_URL + 'api/v1/auction/auth/register';

//Listings
const GET_LISTINGS_URL = BASE_URL + 'api/v1/auction/listings';
const GET_LISTING_BY_ID = BASE_URL + 'api/v1/auction/listings';
const GET_ALL_LISTINGS_URL = BASE_URL + 'api/v1/auction/listings?_bids=true';
const SORT_ASC_URL = BASE_URL + 'api/v1/acution/listing?sort=created&sortOrder=asc';

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
    SORT_ASC_URL, 
    GET_LISTING_BY_ID, 
    CREATE_LISTING_URL, 
    GET_ALL_LISTINGS_URL, 
    GET_PROFILE_URL, 
    GET_PROFILE_LISTINGS,
    UPDATE_AVATAR_URL,
    GET_USER_PROFILE_URL
};