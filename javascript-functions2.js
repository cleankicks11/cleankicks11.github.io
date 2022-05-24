//anonymous function --function withou tname or title
//function saved in variable 

function createAddFn(n1) {
    return function(n2){
	return n1 + n2;
    }
}

//closure -- out function envoked
var addFive = createAddFn(5);

console.log(addFive(5));
console.log(addFive(2));
console.log(addFive(1));

var addTwo = createAddFn(2);
console.log(addTwo(5));
console.log(addTwo(2));
console.log(addTwo(0));
