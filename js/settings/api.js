import { getUserName } from '../utils/storage'

const userName = getUserName();

const BASE_URL = 'https://api.noroff.dev/';
//Authorization
const LOG_IN_URL = BASE_URL + 'api/v1/auction/auth/login';
const SIGN_UP_URL = BASE_URL + 'api/v1/auction/auth/register';

//Listings
const GET_POST_URL = BASE_URL + 'api/v1/auction/listings';
const SORT_ASC_URL = BASE_URL + 'api/v1/social/posts?sort=created&sortOrder=asc';

export { BASE_URL, SIGN_UP_URL, LOG_IN_URL, GET_POST_URL, SORT_ASC_URL };