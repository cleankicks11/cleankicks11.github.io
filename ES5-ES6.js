// let + const
//const is ummuatable can't be changed

const player = 'bobby';
let experience = 100;
var wizardLevel = false;

if (experience > 90) {
    var wizardLevel = true;
    console.log('inside', wizardLevel);
}

console.log('outside', wizardLevel);

//let used inside curly brackets creates new scope of the variable vs var keyword

const agent = 'Chris';
let seniority = 100;
let proLevel = false;

if (seniority > 90) {
    let proLevel = true;
    console.log('inside', proLevel);
}

console.log('outside', proLevel);


//Destructuring

const obj = {
    user: "Sam",
    exp: 100,
    highLevel: false
}

//old way for call object constructors
const user = ob.user;
const exp = obj.exp;
let highLevel = obj.highLevel;

//Destructuring - new to call constructors of object methods
const { user, exp } = obj;
let { highLevel } = obj;


const name = 'john snow';

const obj = {
    [name]: 'hello',
    [1 + 2]: 'hi, there'
}

//Object Properties

const a = "Simon";
const b = true;
const c = {};

//old way to call object constructors
const obj = {
    a: a,
    b: b,
    c: c
}

//new way to call objec constructors
const obj = {
    a, b, c
}

//Template strings
const name = "sally";
const age = 36;
const pet = "Dog";

//old way
//const greeting = "hello " + name + " you are doing " + greeting + " !";

//new way
//const greetingBest = `Hello ${name} you seem to ${age-10}, What a lovely ${pet} you have`;

function greet(name='', age=30, pet='cat') {
    return `Hello ${name} you seem to be ${age-5}, what a lovely ${pet}!`
}

//Call function with parameters
greet("john", 50, "monkey");

//Symbol
let sym1 = Symbols();
let sym2 = Symbol("foo");
let sym3 = Symbol("foo");

//arrow function -- uses '=>' (arrow) to replace 'return' keyword
function add(a, b) {
     return a + b;
}

const add2 = (a, b) => a + b;
