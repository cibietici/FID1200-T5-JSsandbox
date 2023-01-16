console.log('dom js loaded');

// hente HTML element av H1 fra document og lagre den i en variabel
const h1Element = document.querySelector('h1');
h1Element.textContent = 'Hello world!';

const pElement = document.querySelector('p');
pElement.textContent = 'This is the paragraph text';

console.log(h1Element);
h1Element.style = 'color: #ff0000';

const imgElement = document.querySelector('img');
console.log(imgElement);
imgElement.src = './assets/image2.jpg';