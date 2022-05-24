//Functions statements --hoisting function is read at all parts of screen
//Don't repeat yourself
//cnvert input to an output
//Deterministic
//input -- parameter --blocked scope variable --only available in body
//function definition

function addTwo(num) {
    const twoAdded = num + 2;
    return twoAdded;
}

//call functions addTwo -- with arguemnt
const myNum = addTwo(1);
const mySecondNum = addTwo(2);
const myThirdNum = addTwo(3);

conosle.log(myNum, mySecondNum, myThirdNum);


function mulTwo(num) {
    return num * 2;
}

const mulNum = mulTwo(2);

console.log(mulNum);

//move function into varable -- function expression

const addThree = function(math) {
    return math + 3;
}

const myFourthNum = addThree(7);

console.log(myFourthNum);
