const tokenKey = 'token';
const userKey = 'user';

function saveToken(token) {
    console.log('token: ', token);
    console.log('tokenKey: ', tokenKey);
    saveToStorage(tokenKey, token);
}

function getToken() {
    return getFromStorage(tokenKey);
}

// save user object
function saveUser(user) {
    saveToStorage(userKey, user);
}

// get user name
function getUserName() {
    const user = getFromStorage(userKey);
    if (userKey) {
        return user.name;
    } else {
        return null;
    }
}

function getUserCredit() {
    const user = getFromStorage(userKey);
    if (userKey) {
        return user.credits;
    } else {
        return null;
    }
}

// get avatar
const getUserAvatar = () => {
    const user = getFromStorage(userKey);
    if (userKey) {
        return user.avatar;
    }
    return null;
};

// function which save data to the local storage
function saveToStorage(key, value) {
    console.log(key);
    console.log(value);
    localStorage.setItem(key, JSON.stringify(value));
}

// function which gets data from the local storage
function getFromStorage(key) {
    const value = localStorage.getItem(key);
    if (value) {
        return JSON.parse(value); // convert to JS
    } else {
        return [];
    }
}

function clearStorage() {
    localStorage.clear();
}

const accessToken = getToken();

//update local storage info
const updateLocalStorageInfo = (url) => {
    const getUserData = async () => {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${accessToken}`,
            },
        });
        if (response.ok) {
            const data = await response.json();
            const userToSave = {
                name: data.name,
                email: data.email,
                avatar: data.avatar,
                credits: data.credits,
            };
            saveUser(userToSave);
            location.reload();
        } else {
            console.log('sorry user er ikke updatert i localStorage');
        }
    };
    getUserData();
};

export { 
    getToken, 
    saveToken, 
    saveUser, 
    getUserName, 
    clearStorage, 
    getUserAvatar, 
    getUserCredit, 
    updateLocalStorageInfo 
};
