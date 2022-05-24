//Arrow functions
//functions expression


const addTwo = function(num) {
    return num + 2;
}

console.log(addTWo(2));

const addThree = num2 => {
   return num2 + 3;
}

console.log(addThree(3));

//single line arrow function

const addFour = num3 => num3 + 4;

console.log(addFour(4));

//arrow function single line -- no retun with expression
const addBothNums = (first, second) => first + second;

console.log(addBothNums(9, 9));

//arrow function -- multiple expresions
const keepDoubleNums = num => {
    while (num < 1000) {
        num *= 2;
    }
    return num;
};

console.log(keepDoubleNums(5));
