// lagre i en variabel html element fra document
const bodyElement = document.querySelector('body');

// bygge H1 og gi en textcontent som tittle

const h1Element = document.createElement('h1');
h1Element.textContent = 'Tittel til artikkel';

// bygge img tag og gi en src bilde verdi
const imgElement = document.createElement('img');
imgElement.src = './assets/image1.jpg';
imgElement.alt = 'Vulkan bilde';

// bygge en paragraph og legge inn en tekst
const pElement = document.createElement('p');
pElement.textContent = `Lorem ipsum dolor sit, amet 
consectetur adipisicing elit. 
Autem ratione quia voluptatum officia adipisci iure. 
Officiis fugiat beatae sunt deleniti nulla repudiandae 
ab facere recusandae, quas quos laudantium eum rerum animi 
necessitatibus nostrum omnis eos tempora labore quidem aliquam! 
Autem, nobis excepturi. Impedit sapiente nulla corrupti aliquid 
sunt odit corporis!`

// append alle elementer inn i hoved container
bodyElement.appendChild(h1Element);
bodyElement.appendChild(imgElement);
bodyElement.appendChild(pElement);

// listen

// lage hoved container ul (unordered list)
const ulElement = document.createElement('ul');

// loop med for
for(let i = 1; i <= 24; i++) {
    console.log(i);
    const liElement = document.createElement('li');
    liElement.textContent = 'Item ' + i;
    ulElement.appendChild(liElement);
}

console.log(ulElement);
bodyElement.appendChild(ulElement)