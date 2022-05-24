//for loops -- repetive taks

//iteration - each time the loop runs thourhg it logic = 10 times

for (let i = 0; i < 10; i++) {
    console.log(i);
}

//for loop users

const firstName = 'Youil';

for( let i = 0; i < firstName.length; i++) {
    let char = firstName[i];
    console.log(char);
}

//count charaters in a string
//count all

const name = "Larry";

let aCount = 0;

for (let i = 0; i < name.length; i++) {
    let char = name[i];
    if (char === 'r') {
	aCount++;
    }
}

console.log(aCount);

const num = [100,200,300];
const doubled = [];


for (let i = 0; i < num.length; i++) {
    doubled.push(num[i] * 2);
}

console.log(doubled);


