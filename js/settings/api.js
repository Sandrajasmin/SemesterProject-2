import { getMyUserName } from '../utils/storage';

const userName = getMyUserName();
console.log('userName: ', userName);

const API_BASE_URL = 'https://api.noroff.dev';

// AUTH
const USER_LOGIN_URL = API_BASE_URL + 'api/v1/social/auth/login';
const USER_SIGNUP_URL = API_BASE_URL + 'api/v1/social/auth/register';

//POSTS
const CREATE_POST_URL = API_BASE_URL + 'api/v1/social/posts';
const GET_POSTS_URL = API_BASE_URL + 'api/v1/social/posts';
const GET_POST_BY_ID_URL = API_BASE_URL + 'api/v1/social/posts';
const GET_USER_POSTS_URL =
    API_BASE_URL + `api/v1/social/profiles/${userName}?_posts=true`;
const DELETE_USER_POST_BY_ID = API_BASE_URL + `api/v1/social/posts`;
const EDIT_POST_URL = API_BASE_URL + 'api/v1/social/posts';
const SORT_ASC_URL =
    API_BASE_URL + 'api/v1/social/posts?sort=created&sortOrder=asc';
const GET_PROFILE = API_BASE_URL + `api/v1/social/profiles/${userName}`;

export {
    API_BASE_URL,
    USER_LOGIN_URL,
    USER_SIGNUP_URL,
    CREATE_POST_URL,
    GET_POSTS_URL,
    GET_USER_POSTS_URL,
    DELETE_USER_POST_BY_ID,
    GET_POST_BY_ID_URL,
    EDIT_POST_URL,
    SORT_ASC_URL,
    GET_PROFILE,
};
