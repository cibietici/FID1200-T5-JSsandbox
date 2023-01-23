// var er gammel keyword for inisialisere variabler
// anbefalt å ikke bruker keyword var
var firstName = 'Thomas';
// her bruker vi variabel med verdi 'Thomas'
console.log(firstName + ' er ikke sliten');
// her endre vi verdi av variabel firstName til 'carlo'
firstName = 'Carlo';

// vi bruker keyword const for initialisere ny variabel newName
// vi bruker camel case standard
const newName = 'Anders';
// newName = 'Jens'; det er ikke lov å endre verdi av const

// en til keyword for initialisere variabler: let
let age = 32;
// det er lov å endre variabler initialisert som let
age = 67;


// her bruker vi variabel firstName flere ganger
console.log(firstName + ' er ikke sliten fordi er ' + age);
console.log(firstName + ' begynner å bli sliten');
console.log(firstName + ' dra hjem');

// her bruker vi const for itialisere en variabel med snake case standard
// ikke lov å bruke nummer og bindestrek i variabler navn
const new_named = 'johnson';

// neste kommando ta borte alle tidligere console.log
//console.clear();
///////////////////////////////////

// syntax for å skrive funksjoner (function expression)
// krever function keyword + navn + (argumenter)
function multiply(a, b, c, d) {
    return a * b * c * d;
};

function divide(a, b) {
    return a / b;
};
// vi fortsatt trenger å bruke console for å se resultat
// vi invoke funksjonen og sender inn (parameter) vi trenger
// for å fullføre matte stykk
console.log(multiply(4, 7, 6, 9));
// det sammen med andre verdi
console.log(multiply(435, 265, 4, 5));
// vi invoke funksjonen divide og sende inn to parameter
console.log(divide(10, 2));
console.log(divide(15, 3));


function plotValue(myName) {
    console.log(myName);
};

plotValue('Thomas');
plotValue('carlo');

//////////
// finner gjennomsnitt alder av en gruppe med fire personer

// vi invoke funksjonen ved å sende inn 3 verdi for alder
averageAge(298, 650, 412);

function averageAge(a, b, c) { // void
    const totalAge = a + b + c;
    console.log(totalAge / 3);
};

console.clear();

const myAge = 44 // number
const yourAge = 56 // number

const yourName = 'Pål'; // string

const isLoggedIn = false; // boolean

console.log(isLoggedIn);

let mouse;
console.log(mouse); // undefined

let keyboard = null;

console.log(myAge + yourAge);
// 

console.log(20 >= 20);

console.clear();

if (10 < 5) {
    //alert('Ja 10 e større enn 5');
} else {
    //alert('nei 10 er mindre enn 5');
}
console.clear();

// å sjekke om butikken er åpent eller stengt akkurat nå

function checkOpeningTime() {

    // 1 tidspunkt for åpning
    const openingTime = 17;
    // 2 tidspunkt for å stenge
    const closingTime = 23;
    // 3 tid nå
    const today = new Date();
    // 4 stengt dager
    const timeNow = today.getHours();
    // vi bruker operaator for å sette en krav
    // hvis krav er tilfredstillet så faller inn i 
    // den if ... else faller vi inn i 119.
    if(timeNow > openingTime && timeNow < closingTime) {
        alert('Butikken er åpent!');
    } else {
        alert('butikken er stengt')
    }
}

//checkOpeningTime();

// bytter mellom darkmode og lightmode
function switchMode(status) {
    if(status === 'light') {
        alert('Du valgt lightmode');
    } else {
        alert('du er i darkmode')
    }
};

const myStatus = 'light';
let oneSattus = 'light';

//switchMode(oneSattus);

// kalkulere omkrets av en sirkel ved diameter verdi

function calculateCircle(diameter) {
    // 2PIr // diameter*PI
    const pi = Math.PI;
    const result = diameter * pi
    console.log(Math.ceil(result));
}

calculateCircle(13);

// lag en funksjon som console.log areal av en rektangel
// ved å gi høy og bredde verdi

function calculateRectangle(width, height) {
    console.log(width * height)
};

calculateRectangle(13, 7);

function calculateTriangle(width, height) {
    console.log((width * height) / 2)
};

calculateTriangle(22, 43);

console.clear(); // clear hele console frem til her


//DOM håndtering
console.log(document);

const section1Element = document.querySelector('section');
console.log(section1Element);

const headerElement = document.querySelector('header'); // via tag navn
console.log(headerElement);

const pElement = document.querySelector('div p'); // children og parent
console.log(pElement);

// querySelector med klassenavn
const p3Element = document.querySelector('.p-3'); 
console.log(p3Element);

p3Element.textContent = 'We change this to P-3000';
// innerText er ikke forslag av VS code
p3Element.innerText = 'With inner text' 

// querySelector med id
const p4Element = document.querySelector('#p-4');
console.log(p4Element);

// via getElementById
const p4ElementById = document.getElementById('p-4');
console.log(p4ElementById);

// querySelectorAll
const allPElement = document.querySelectorAll('.p-3');
console.log(allPElement);

allPElement[1].textContent = 'the last one';
//
