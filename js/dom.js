console.log('dom js loaded');
const firstName = 'Thomas';

// hente HTML element av H1 fra document og lagre den i en variabel
const h1Element = document.querySelector('h1');
h1Element.textContent = 'Hello world!';

const pElement = document.querySelector('p');
pElement.textContent = 'This is the paragraph text';

console.log(h1Element);
h1Element.style = 'color: #ff0000';

function changeImg() { // function expression type void
    console.log(firstName);
    const lastName = 'Normann';
    const imgElement = document.querySelector('img');
    imgElement.src = './assets/image2.jpg';
    //imgElement.width = '240';
    //imgElement.style = 'width: 320px';
    //imgElement.style.width = '320px';
    imgElement.style = 'transform: scale(0.5); transform-origin: top left;'
}

plotName(); // dette er lov å gjøre

function plotName() {
    const lastName = 'Normann';
    console.log(firstName);
    console.log(lastName);
}

//console.log(lastName);
changeImg();

const logName = (plotName) => { // arrow function
    console.log(plotName);
}

logName('Carlo');

//////////
const value1 = prompt('skriv her først verdi');
console.log(value1);
const value2 = prompt('skriv her andre verdi');
console.log(value2);

const action = prompt('operator');

const resultElement = document.querySelector('#result');

if(action === 'multiply') {
    console.log(value1 * value2);
    resultElement.textContent = 'result: ' + (value1 * value2)
}

if(action === 'divide') {
    console.log(value1 / value2);
}
