let myName : string = 'Thapa';
let myAge : number = 45;
let isTired : boolean = true;

let interests : string[] = ['Fotboll', 'Music', 'Poker'];

const me : Person = {
    name : 'Thapa',
    age : 45,
    isTired : true,
    occupation : "Student",
    address : {
        street : 'Strandvagen',
        number : 13
    },
    interests : [
        'Fotboll',
        'Music',
        'Poker'
    ]
}
// After making an interface below we make an array of people including above person me and one more Mario.
// Basically above is persons info and below is that info's data type

const people : Person[] = [
    {
        name : 'Thapa',
        age : 45,
        isTired : true,
        occupation : "Student",
        address : {
            street : 'Strandvagen',
            number : 13
        },
        interests : [
            'Fotboll',
            'Music',
            'Poker'
        ]
    },
    {
        name : 'Mario',
        age : 44,
        isTired : true,
        occupation : "Plumber",
        address : {
            street : 'Kunggatan',
            number : 8
        },
        interests : [
            'Fotboll',
            'Dance',
            'kino'
        ]
    },
]

interface Person {
    name : string,
    age : number,
    isTired? : boolean,
    occupation : string,
    address : Address,
    interests : string[]
}

interface Address { // this as a dif. obj can be called from everywhere else we can write direct above as well.
    street : string,
    number : number
}

// type Person = {
//     name : string,
//     age : number,
//     isTired? : boolean,
//     occupation : string
//}

console.log(people);
