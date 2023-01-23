// variabel for container nav
const navElement = document.createElement('nav');
// variable for ul listen
const ulElement = document.createElement('ul');
// setter nav inn i header
// variabel som lagre verdi av html node av header
const headerElement = document.querySelector('header');
// setter ul inn i nav
navElement.append(ulElement);
// setter navElement inn i header
headerElement.append(navElement);

// en eller flere variabler for list item
// setter en etter hverandre alle list item (li)

const li1Element = document.createElement('li');
li1Element.textContent = 'About';
ulElement.appendChild(li1Element);

const li2Element = document.createElement('li');
li2Element.textContent = 'Products';
ulElement.appendChild(li2Element);

const li3Element = document.createElement('li');
li3Element.textContent = 'Contacts'
ulElement.appendChild(li3Element);

console.log(headerElement);