//combined arrays and object
//by value vs by refernce


const users = [
    {
	name: "Youil:,
	age: 36,
	tags: ['new-user', 'development']
    },
    {
	name: "phillip",
	age: 30,
	tags: ['accounting']
     },
    {
	name: "Jan",
	age: 25,
	tags: ['MArketing']
    }
];

///copy of age variable and placed it inn age2 -- by value assignment
const age = 27;
let age2 = age;

age2 = 28;


//by reference -- combined arrays are by reference
const anme = ['Aaron'];
let name2 = names;

name2.push('Jan');

console.log(names, name2);

//undefined, null, Nan

let name;

const user = {
    name: 'Aaron',
    age: null,
    ccNum: null
};

//NaN is a number that is not real
console.log(10 + user.age); 
