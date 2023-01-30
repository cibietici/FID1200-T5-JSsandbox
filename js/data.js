// data type
const box0 = '"lang" tekst'; // string
const box1 = "dette er en string";
const box2 = `en tekst ${box0}`;
console.log(box2);

const age = 3456; // nummer
const isLogIn = true // false, boolean
let firstName;
console.log(firstName); // undefined
let secondName = null;
console.log(secondName) // null

// arrays 
const names = [
        'Thomas', 
        'Lise', 
        45, 
        'Maria', 
        'Mario', 
        'Tom', 
        true, 
        76,
        [
            'footbaal',
            'swimming',
        ],
    ];
//names.push('Edvind');
//names.pop();
//names.reverse();
//console.log(names.slice(1, 3));
console.log(names.length);
console.log(names[8]);
console.log(names.includes('Paula'));

names[0] = 'Harry'; // change first value of array 
console.log(names);

//______________________////
// OBJECTS ///

const person = {
    firstName: 'Thomas',
    lastName: 'Johansen',
    age: 23,
    hobbies: ['sport', 'gaming', 'travel'],
    gender: 'male',
    isWorking: true
}

console.log(person.firstName)
person.firstName = 'Harry';
person.age = 28;
console.log(person);


const persons = [
    {
        firstName: 'Mario',
        age: 12,
        hobbies: ['gaming', 'tiktok', 'sport']
    },
    {
        firstName: 'Ada',
        age: 15,
        isStudent: true,
        hobbies: ['gaming', 'volleyball', 'ski']
    },
    {
        firstName: 'Tom',
        age: 13,
        hobbies: ['gaming', 'chess']
    }
]
console.log(persons);
console.clear();
console.log(`Ada main hobby is: ${persons[1].hobbies[0]}`);

console.log(persons[0].hobbies[1]);

console.clear();

const employees = [
    {
        person: {
            firstName: 'Jarle',
            lastName: 'Johnson',
            age: 28,
            dob: '1998-08-03',
            nationality: 'Chile'
        },
        department: [
            'sales',
            'account',
            'shipping'
        ],
        address: {
            street: 'Vinterbrovei',
            streetNumber: 25,
            city: 'Oslo'
        },
        email: 'jj@firma.no'
    },
    {
        person: {
            firstName: 'Ida',
            lastName: 'Melhus',
            age: 29,
            dob: '1994-11-03',
            nationality: 'Norwegian'
        },
        department: [
            'shipping'
        ],
        address: {
            street: 'Maridalsvei',
            streetNumber: 3,
            city: 'Oslo'
        },
        email: 'im@firma.no'
    },
    {
        person: {
            firstName: 'Lise',
            lastName: 'Strid',
            age: 33,
            dob: '1990-04-03',
            nationality: 'Norwegian'
        },
        department: [
            'sales',
            'account'
        ],
        address: {
            street: 'Tristvei',
            streetNumber: 44,
            city: 'Moss'
        },
        email: 'ls@firma.no'
    },
    {
        person: {
            firstName: 'Karl',
            lastName: 'Ihagen',
            age: 40,
            dob: '1983-11-03',
            nationality: 'Swedish'
        },
        department: [
            'sales'
        ],
        address: {
            street: 'Kloppvegen',
            streetNumber: 66,
            city: 'Frederikstad'
        },
        email: 'ki@firma.no'
    },
    {
        person: {
            firstName: 'James',
            lastName: 'Kelky',
            age: 22,
            dob: '2001-11-03',
            nationality: 'English'
        },
        department: [
            'sales'
        ],
        address: {
            street: 'Mossveien',
            streetNumber: 35,
            city: 'Oslo'
        },
        email: 'jK@firma.no'
    },
    {
        person: {
            firstName: 'Jenny',
            lastName: 'Poppins',
            age: 50,
            dob: '1983-11-03',
            nationality: 'American'
        },
        department: [
            'shipping',
            'sales'
        ],
        address: {
            street: 'Blidveistengt',
            streetNumber: 23,
            city: 'Vestby'
        },
        email: 'jp@firma.no'
    },
    {
        person: {
            firstName: 'Luigi',
            lastName: 'Bianco',
            age: 30,
            dob: '1993-11-03',
            nationality: 'Italian'
        },
        department: [
            'shipping',
            'sales'
        ],
        address: {
            street: 'Dårligveien',
            streetNumber: 33,
            city: 'Halden'
        },
        email: 'lb@firma.no'
    },
    {
        person: {
            firstName: 'Otto',
            lastName: 'Swartz',
            age: 38,
            dob: '1984-11-03',
            nationality: 'German'
        },
        department: [
            'sales',
            'account'
        ],
        address: {
            street: 'Sortvei',
            streetNumber: 3,
            city: 'Bærum'
        },
        email: 'os@firma.no'
    },
    {
        person: {
            firstName: 'Bianca',
            lastName: 'Melby',
            age: 44,
            dob: '1979-11-03',
            nationality: 'Danish'
        },
        department: [
            'sales',
            'shipping'
        ],
        address: {
            street: 'Hvittvei',
            streetNumber: 32,
            city: 'Drammen'
        },
        email: 'bm@firma.no'
    },
    {
        person: {
            firstName: 'James',
            lastName: 'Melby',
            age: 42,
            dob: '1981-11-03',
            nationality: 'Danish'
        },
        department: [
            'shipping'
        ],
        address: {
            street: 'Hvittvei',
            streetNumber: 32,
            city: 'Drammen'
        },
        email: 'bm@firma.no'
    },
]

// forEach

const bodyElement = document.querySelector('body');
const ulElement = document.createElement('ul');

employees.forEach(employee => {
    const liElement = document.createElement('li');
    liElement.textContent = `
        ${employee.person.firstName} 
        ${employee.person.lastName}
        (${employee.department[0]}) epost: ${employee.email}
        `;
    ulElement.appendChild(liElement);
});

bodyElement.appendChild(ulElement);

// map
const employeeEmails = employees.map(person => {
    return {
        epost: person.email,
        dob: person.person.dob
    }
});

console.log(employeeEmails);

// filter
const nationalityEmployees = employees.filter(employee => {
    return employee.person.nationality === 'Danish';
});
console.log(nationalityEmployees);

const filterDepEmployees = employees.filter(
        employee => employee.department.includes('shipping')
    )
console.log(filterDepEmployees);

const Ul1Element = document.createElement('ul')
filterDepEmployees.forEach(employee => {
    const liElement = document.createElement('li');
    liElement.textContent = `
        ${employee.person.firstName} 
        ${employee.person.lastName}
        (${employee.department[0]}) epost: ${employee.email}
        `;
    Ul1Element.appendChild(liElement);
});

bodyElement.appendChild(Ul1Element);

// find
const findedEmail = employees.find(employee => {
    return employee.email === 'os@firma.no'
})

console.log(findedEmail)