//detecting and converting types
//not strongly typed language like Java
//No ytpe needed in Javascript

const muNum = 123;

if ( typeof myNum === 'number') {
    console.log('its a number');
} else if (typeof myNum == 'string') {
    console.log('its a string');
}

//detecting array

const myArr = [1,2,3];

console.log(Array.isArray(myArr));

if (Array.isArray(myArr)) {
    console.log('array?');
}

//detecting NaN -- not a number

console.log(isNaN(NaN));


//Converting types

let myNums = "123";

if (typeof myNums !== 'number') {
    myNums = Number(myNums);
}

if(typeof myNums !== 'number') {
    myNums = +myNums;
}

if (typeof myNums !== 'string') {
    myNums = myNums.toString();
}

console.log(typeof myNums, myNums);

//Boolean type

let myStr = undefined

myStr = Boolean(myStr);

console.log(typeof myStr, myStr);



