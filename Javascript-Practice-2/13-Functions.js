//Functions -- use and resuse code
//Dont repaeat yourself
//Convert and input into an output and work the same way everytime
//Deterministically - predictable output

//Define function input and output
//Function definition
//parametr block scoped variable
//Function statement
function mulTwo(num) {
  return num * 2;
}

console.log(mulTwo(5));

const newNum = addTwo(5);
console.log(newNum);

//Fucntion expessions

const addThree = function(num) {
 return num + 3;
}

//Weird parts of javascript functions
//Anonymous function --like function expression
//closure like scope -- after uter scopr is envoked -- arguemnt frozen
function createAndFn(n3) {
    return function(n2) {
	return n1 + n2;
    }
}

var addFive = createAddFn(5);





var addNums = function(n1, n2) {
    return n1 + n2;
}




