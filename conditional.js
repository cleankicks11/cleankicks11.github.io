//conditionals ( truthy, falsy, chianin, scope)

const num = 5;

if (5 < num) {
    console.log('this was true');
} else {
    console.log('this was false');
}

if (undefined) {
    console.log('this was true');
} else {
    console.log('this was false');
}

const num2;

if (num2) {
    console.log('this was true');
} else {
    console.log('this was false');
}

const num3 = null;

if (num3) {
    console.log('this was true');
} else {
    console.log('this was false');
}

const num4 = NaN;

if (num4) {
    console.log('this was true');
} else {
    console.log('this was false');
}

const num5 = 5;

if (num5) {
    console.log('this was true');
} else {
    console.log('this was false');
}

//empty array and object are true

let num6 = [].length;

if (num6) {
    console.log('this was true');
} else {
    console.log('this was false');
}

let num7 = Object.keys({}).length;

if (num7) {
    console.log('this was true');
} else {
    console.log('this was false');
}

//chaining and scope -- using && || expressions

let num8 = 0;
let fName = 'Youil';

if (num8 === 0 && fName === 'Youil') {
    console.log('this was true');
} else {
    console.log('this was false');
}

let numAndName = num8 === 0 && fName === 'Youil';

if (numAndName) {
    console.log('this was true');
} else {
    console.log('this was false');
}


