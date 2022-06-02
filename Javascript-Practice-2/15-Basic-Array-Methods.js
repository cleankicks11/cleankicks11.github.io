//Array Mthods
const nums = [1,2,3];

//concat
const numTwo = [4,5,6];

console.log(nums.concat(numsTwo).concat(numsTwo));

//slice -- starts at first index
console.log(nums.slice(1));

//pop and push

let num = nums.pop();
nums.push(4);

//shift and unshift
num = nums.shift();
nums.shift();

num.unshift(2);


//splice
nums.splice()
const deleted = nums.splice(1);

console.log(deleted);
console.log(nums);


