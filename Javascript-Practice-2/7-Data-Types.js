//Combining data types -- array and objectss
//by value and by reference type

const users = [
    {
      name: "Youil",
      age: 36,
      tags: ['new-user', 'javascript']
    },
    {
      name: 'Aaron',
      age: 27,
      tags: ['new-user', 'javascript']
    },
    {
      name: "Phillip",
      age: 30,
      tags: ['javascript']
    }
];

//by value assignment -- all primitive types have by value assignemtn
const age = 27;
let age2 = age;

age2 = 28;

//undefined, null, NaN
//undefined
let name;

//null - place holder
const user = {
    name: 'Aaron',
    age: null,
    cc: null
};

//NaN -- not anumber -- math operation to non existent number

console.log(10 + user.weight);


