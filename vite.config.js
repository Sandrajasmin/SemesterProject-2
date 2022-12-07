const { resolve } = require('path');

export default {
    build: {
        rollupOptions: {
            input: {
                login: resolve(__dirname, 'signin.html'),
                SignUp: resolve(__dirname, 'signup.html'),
                home: resolve(__dirname, 'index.html'),
                addListing: resolve(__dirname, 'addProduct.html'),
                listingPage: resolve(__dirname, 'listings.html'),
                profile: resolve(__dirname, 'profile.html'),
                detailPage: resolve(__dirname, 'detail.html'),
            },
        },
    },
};