//For loops 

let j = 0;
j++;
console.log(j)

for (let i = 0; i < 10; i++) {
    console.log(i);
}

const fName = "Youil";


for (let i = 0; i < fName.length; i++) {
    let char = fName[i];
    console.log(char);
}


//reverse string -- run the loop backwards

const lName = 'Aushana';

for(let i = lName.length; i>= 0; i--) {
    let char = lName[i];
    console.log(char);
}

//Count letter repaeting times

const word = 'Aaron';

let letter = 0;

for (let i = 0; i < word.length; i++) {
    let char = word[i];
    if ( char === 'a' || char === 'A') {
      letter++;
    }
}
console.log(letter);


//Loop througharray and count items
//can use const because we are pushing in not reassigning

const nums = [10,20,30];
const newArr = [];

for (let i = 0; i < nums.length; i++) {
    console.log(nums[i]);
    newArr.push(nums[i] * 2);
}

console.log(newArr);


//2nd way to create new array

const nums1 = [10,20,30];

for (let i = 0; i < nums1.length; i++) {
    console.log(nums1[i]);
    nums1[i] = nums1[i] * 2;
}

console.log(nums1);
