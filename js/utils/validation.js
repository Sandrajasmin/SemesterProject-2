const validEmail = (email) => {
    const regEx =
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@(stud.noroff.no|noroff.no)$/;
    return email.match(regEx) ? true : false;
};


function passwordValidator(password, confirmPassword) {
    console.log(password);
    console.log(confirmPassword);
    if (!password) {
        return false;
    }
    if (!confirmPassword) {
        return false;
    }
    if (password !== confirmPassword) {
        return false;
    } else {
        return true;
    }
}

const checkLength = (value, len) => {
    if (value.trim().length >= len) {
        return true;
    } else {
        return false;
    }
};

const validImg = (url) => {
    const urlPattern =
        /(?:https?):\/\/(\w+:?\w*)?(\S+)(:\d+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/;
    if (typeof url === 'object') {
        return urlPattern.test(url.value);
    }
    return urlPattern.test(url);
};

export { validEmail, passwordValidator, checkLength, validImg };
