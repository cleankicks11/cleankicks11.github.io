//conditionals -- truthy ad falsy, chaining  ans scope
//Every every value in data type will evaluate to truthy or falsy

const num = 5;

if (true) {
  console.log('this is true');
} else {
  console.log('this is false');
}

//falsy

if (undefined) {
  console.log('this is true');
} else {
  console.log('this is false');
}

//falsy

if (null) {
  console.log('this is true');
} else {
  console.log('this is false');
}

//chaining

let num = 0;
let firstName = 'Youil';

let numAndName = num === 0 && firstName === 'Youil';

if (numAndName) {
  console.log('this is true');
} else {
  console.log('this is false');
}

//check empty array
//check for 0 in array and 0 array is falsy

let num = [].length;

if (num) {
    console.log('this was true');
} else {
    console.log('this was false');
}

//check object is fase

let num2 = Object.keys({}).length;

if (num2) {
    console.log('this was true');
} else {
    console.log('this was false');
}


