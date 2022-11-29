const tokenKey = 'token';
const userKey = 'user';

function saveMyToken(token) {
    console.log('token: ', token);
    console.log('tokenKey: ', tokenKey);
    saveToMyStorage(tokenKey, token);
}

function getMyToken() {
    return getFromMyStorage(tokenKey);
}

// save user object
function saveMyUser(user) {
    saveToMyStorage(userKey, user);
}

function getMyUserName() {
    const user = getFromMyStorage(userKey);
    if (userKey) {
        return user.name;
    } else {
        return null;
    }
}

// function which save data to the local storage
function saveToMyStorage(key, value) {
    console.log(key);
    console.log(value);
    localStorage.setItem(key, JSON.stringify(value));
}

// function which gets data from the local storage
function getFromMyStorage(key) {
    const value = localStorage.getItem(key);
    if (value) {
        return JSON.parse(value); // convert to JS
    } else {
        return [];
    }
}

function clearMyStorage() {
    localStorage.clear();
}

export { getMyToken, saveMyToken, saveMyUser, getMyUserName, clearMyStorage };
