//Allocated memory by assigning variable -- saves in memory
const a = 1;

//memory leak - global variables unused variables just sittng using memory

const b = 10;
const c = 100;

//call stack -- adds to stack pops after being called

console.log('1');
console.log('2');
console.log('3');

const one = () => {
    const two = () => {
        console.log('4');
    }
    two();
}


//Call stack overflow
//Recursion - function that calls itself
//foo function is made to call itself foo function internally

function foo() {
    foo()
}

foo()

//Asynchronous function - works independntly - 

console.log('1');
setTimeout(() => {
    console.log('2');
}, 2000)
console.log('3');

//Call stack -- Web API


//Call stack -- Callback queue

//Call stack -- event loop

