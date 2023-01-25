// hente body element
const bodyElement = document.querySelector('body');
// hente button element
const buttonElement = document.querySelector('button');

// håndeter hendelse i button element
buttonElement.addEventListener('click', () => {
    bodyElement.classList.toggle('body-color');
});
