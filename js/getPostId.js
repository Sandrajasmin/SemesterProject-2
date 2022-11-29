const buttonBTN = document.querySelector('#button');
const buttonMenu = document.querySelector('#subtext');

console.log(buttonBTN);
buttonMenu.classList = 'hidden';

buttonBTN.addEventListener('click', () => {
    buttonMenu.classList.toggle('hidden');
});

const buttonBTN2 = document.querySelector('#make-bid-btn');
const buttonMenu2 = document.querySelector('#make-bid-subtext');

buttonMenu2.classList = 'hidden';

buttonBTN2.addEventListener('click', () => {
    buttonMenu2.classList.toggle('hidden');
});


