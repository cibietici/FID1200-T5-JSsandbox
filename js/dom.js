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
    const lastName = 'Normann'; // block scope variabel
    const imgElement = document.querySelector('img');
    imgElement.src = './assets/image2.jpg';
    //imgElement.width = '240';
    //imgElement.style = 'width: 320px';
    //imgElement.style.width = '320px';
    imgElement.style = 'transform: scale(0.5); transform-origin: top left;'
}

plotName(); 
// invoke function expression, 
// før at selve funksjon er skrevet, er det lov å gjøre

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

////////// Enkelt kalkulator
//const value1 = prompt('skriv her først verdi');
//console.log(value1);
//const value2 = prompt('skriv her andre verdi');
//console.log(value2);

/* 

const resultElement = document.querySelector('#result');
const action = prompt('operator');

if(action === 'multiply') {
    console.log(value1 * value2);
    resultElement.textContent = 'result: ' + (value1 * value2)
}

if(action === 'divide') {
    console.log(value1 / value2);
}
 */

// bygge html elementer med JavaScript

const pElementCreate = document.createElement('p');
pElementCreate.textContent = 'dette <p> bygget vi JavaScript';
console.log(pElementCreate);

const parentBodyElement = document.getElementById('body');
parentBodyElement.append(pElementCreate);

console.log(parentBodyElement);

const h2ContainerCreate = document.createElement('h2');
h2ContainerCreate.textContent = 'tittel til div container';
// append fungerer også med string resultat er helt like som textContent
//h2ContainerCreate.append('en tittel til h2'); 

const boxContainerElement = document.querySelector('.container');
// appendChild akseptere bare node elementer
//boxContainerElement.appendChild(h2ContainerCreate);
boxContainerElement.prepend(h2ContainerCreate);  

const whoIsParent = h2ContainerCreate.parentNode; 
// treffer parent node html element
console.log(whoIsParent);

