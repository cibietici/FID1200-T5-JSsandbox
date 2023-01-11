// var er gammel keyword for inisialisere variabler
// anbefalt å ikke bruker keyword var
var firstName = 'Thomas';
// her bruker vi variabel med verdi 'Thomas'
console.log(firstName + ' er ikke sliten');
// her endre vi verdi av variabel firstName til 'carlo'
firstName = 'Carlo';

// vi bruker keyword const for initialisere ny variabel newName
// vi bruker camel case standard
const newName = 'Jonas';
// newName = 'Jens'; det er ikke lov å endre verdi av const

// en til keyword for initialisere variabler: let
let age = 32;
// det er lov å endre variabler initialisert som let
age = 33;


// her bruker vi variabel firstName flere ganger
console.log(firstName + ' er ikke sliten fordi er ' + age);
console.log(firstName + ' begynner å bli sliten');
console.log(firstName + ' dra hjem');

// her bruker vi const for itialisere en variabel med snake case standard
// ikke lov å bruke nummer og bindestrek i variabler navn
const new_named = 'johnson';

// neste kommando ta borte alle tidligere console.log
console.clear();
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
averageAge(26, 65, 42);


function averageAge(a, b, c) {
    const totalAge = a + b + c;
    console.log(totalAge / 3);
};