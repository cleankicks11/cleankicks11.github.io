//consitionals -- if statement has it own scope and is interanll not recognized externally

const firstName = 'Aaaron';
const lastName = 'Jack';

//created outide thhen redifined inside for scope purpose
let fullName;

if (firstName && lastname) {
    const fullName = `${firstName} ${lastName}`
}

console.log(fullName);

//detecting and converting types
//striing get concated not added
const myNum = "123";

if (typeof myNum === 'number') {
    console.log('its a number');
} else if (typeof myNum === 'string') {
    console.log('its a string'):
}


//deecting arrays
const myArr = [1,2,3];

if (Array.isArray(myArr)) {
    console.log(array?');
}


//detecting nan
console.log(isNan(Nan));


//converting types
const myNum2 = "123";

if (typeof myNum2 !== 'number') {
    myNum2 = Number(myNum2);
}

console.log(typeof myNum2, myNum2);

if (typeof myNum2 !== 'number') {
    myNum2 = +myNum;
}


//convert to string
if (typeof myNum2 !== 'string') {
    myNum2 = myNum.toString();
}


//convert boolean
if (typeof myNum2 !=='string') {
    myNum2 = Boolean(myNum);
}

let myNum3 = typeof 123;

console.log(myNum3);

//exception of convert is Array, naN

console.log(Array.isArray([]), isNaN(NaN));

console.log(Number("123"), +"123");


const num4 = 123;
console.log(String(123), num4.toString());

console.log(Boolean(0), Boolean(''), Boolean(nul));
