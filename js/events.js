
// function declaration
const averageAge = (a, b, c) => {
    return (a + b + c) / 3;
}
/* 
console.log(averageAge(14, 18, 24));
console.log(averageAge(4, 8, 12));
console.log(averageAge(65, 88, 92));
console.log(calculate(34, 56));
 */
// function expression
function calculate(value1, value2) {
    return value1 * value2;
}

// events
// hente boks element fra DOM 
const boxElement = document.querySelector('.box');
// hente select element for å lytte på endring i det
const selectElement = document.querySelector('.colors');
// fullføre en oppgave når endring skjer i select element
selectElement.addEventListener('change', (event) => {
    console.log(event.target.value);
    boxElement.setAttribute('style', `background-color: ${event.target.value};`);
    //boxElement.classList.remove('box');
    //boxElement.classList.add(`${event.target.value}`);
});

//

// hente input elemnen med sin egen verdi når man klikke på knappen
const inputElement = document.getElementById('firstName');

// knappen, lytte på hendelse (click)
const buttonElement = document.getElementById('getName');

// hente fra html result
const resultElement = document.getElementById('result');

buttonElement.addEventListener('click', addName());

window.addEventListener('keyup', (event) => {
    if(event.key === 'Enter') {
        const liElement = document.createElement('li');
        liElement.textContent = inputElement.value;
        resultElement.appendChild(liElement);
    }
});

function addName() {
    const liElement = document.createElement('li');
    liElement.textContent = inputElement.value;
    resultElement.appendChild(liElement);
}



