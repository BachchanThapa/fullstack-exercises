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

interface Address {
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
