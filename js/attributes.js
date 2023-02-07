const h1Element = document.querySelector('h1'); // "select" via tag navn

h1Element.id = '128736'; // gammel måte å sette en attribute
/*
dere kommer til å finne mange eksempler på nett som fremdeles
bruker denne metoden men jeg anbefaler å bruke setAttribute
det forklare bedre intensjonen
*/
h1Element.setAttribute('id', 'idbyset'); // best practice

console.log(h1Element);

const pElement = document.querySelector('.p-element');
//pElement.className = 'one-class';
//pElement.setAttribute('class', 'new-class'); // husk at class har egen metode classList
//pElement.setAttribute('style', 'background-color: #ff0000;')
console.log(pElement);

const linkElement = document.createElement('a');
console.log(linkElement);

//best practice for å legge til attributter
linkElement.setAttribute('href', 'https://www.kristiania.no');
// textContent tilsvarer på innerText, unngå å bruke innerHtml
linkElement.textContent = 'link til kristiania';

// hente body fra html
const bodyElement = document.querySelector('body');
// append linkElement til body
bodyElement.appendChild(linkElement);

//
const attrValue = document.createAttribute('style');
attrValue.value = 'background-color: #fcf0f0; padding: 1rem';

//linkElement.setAttributeNode(attrValue);
pElement.setAttributeNode(attrValue);

// classList: best practice for håndtering av class i elementer
linkElement.classList.add('link'); // legge til klasse "link"
h1Element.classList.toggle('link'); // sjekk om "link" klasse eksistere elle ikke og legge til om ikke finnes, fjerne om det er allerede
h1Element.classList.remove('link'); // fjern klasse "link"
h1Element.classList.replace('title', 'link'); // erstatt klasse "title" med "link"
