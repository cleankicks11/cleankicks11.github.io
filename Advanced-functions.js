//Original function javascript

function first() {
    var greet = "Hi";
    function second() {
        alert(greet);
    }
    return second;
}

var newFunc = first();
newFunc();

const first = () => {
    const greet ="Hello";
    const second = () => {
        alert(greet);
    }
    return second;
}

const newFunc = first();
newFunc();

//Closures in functions -- function ran and will never execute again
//child scope will remember and have access to parent scope
//but parent scope don't have access to children scope

//Currying

const multiply = (a, b) => a * b;
const curriedMultiply = (a) => (b) => a * b;
const multiplyBy5 = curriedMultiply(5);

//Compose -- put functions together where output of first two function is input of third function
//(f, g) is first function funnels output to 2nd function (a) and uses variable sum to input variable num to code


const compose = (f, g) => (a) => f(g(a));

const sum = (num) => (num) + 1;

compose(sum, sum)(a);

//Avoiding side effects, functional purity - Determinism
//side effects - unintended outcomes of function, interacts, reads, write to variable
//function purity is to avoid side effects in fuctions and return output = Deterministic (to work properly and have expected outcomes)

var a = 1;

function b() {
    a = 2;
}

