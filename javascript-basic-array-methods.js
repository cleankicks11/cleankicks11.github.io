//Array mehtods

const nums = [1,2, 3];

//concat -- method chaing
const nums2 = [4,5,6];
console.log(nums.concat(nums2).concat(nums2));

//slice
console.log(nums.slice(0, 2));

//pop, push -- add and remove
const num = nums.pop();
nums.push(4);

//shift, unshift -- add and remove from the beginning
const number = [7,8,9];
newNum = number.shift();
number.shift();

number.unshift(2);
number.unshift(newNum);

//Splice
nums.splice();
const deleted = nums.splice(1,1,6,5,4);
console.log(deleted);


