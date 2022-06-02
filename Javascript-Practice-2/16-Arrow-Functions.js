//Arrow Functions

//function statement
function addTwo(num) {
    return num + 2;
}

//Function expression
const addThree = function (num) {
    return num + 3;
}

//Arrow Function -- one parameterr doesn't need paranthesis
const addFour = num => {
    return num + 4;
}

//Arrow function -- oneline -- no curly brackets
const addFive = num => num + 5;

//Arrow function with curlybrackets
const addSix = num => {return num + 6};

//Function with two parameters converted to arrow unction
const addBothNums = function(first, second) {
    return first + second;
};

const addBothNUms = (first, second) => first + second;

//Arrow function
const doubled = function(num) {
    while (num < 1000) {
      num *= 2; 
    }
    return num;
}

const doubled = num => {
    while (num < 1000) {
      num *= 2;
    }
    return num;
};

