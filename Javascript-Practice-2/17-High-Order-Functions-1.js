//high order functions
//array methonds
//Will create a copy and not modify array in place

const nums = [1,2,3,4,5];

//find

const found = nums.find(function(num) {
    console.log(num);
})

const found = nums.find(num => {
    console.log(num);
    if ( num > 2 ) {
      return true;
    }
});

console.log(found);

//some

const ages = [14, 21, 13, 42, 54];

const hasMinors = ages.some(age => {
    if (age < 18) {
      return true;
    }
});

console.log(hasMinors);

//ForEach

let highestAge = 0;

ages.forEach(age) => {
    console.log(age);
    if (age > highestAge) {
      highestAge = age;
    }
})


let highestAge = 0;

ages.forEach(age, index, arr) => {
    console.log(age, index);
})

//Map

const newAges = ages.map(age => age / 2);

console.log(newAges);

//map -- modify array
const newAges = ages.map(age => {
    if ( age > 40) {
      return 'boomer';
    } else {
      return 'mellenial';
    }
})

console.log(newAges);

//filter

const zoomers = ages.filter(ages => {
    if (ages < 40) {
      return true;
    }
})

const boomers = ages.filter(ages => {
    if (ages > 40) {
      return true;
    }
})

console.log(zoomers, boomers);

//sort

ages.sort();
console.log(ages);

const names = ['Aaron', 'Chris', 'enrique', 'Youil'];

names.sort();
console.log(names);

//reduce

const result = ages.reduce((sum, age) => {
    console.log(sum, age);
}, 1)

const result = ages.reduce((sum, age) => {
    console.log(sum, age);
    const total = sum + age;
    console.log(total);
    return total;
})

//singleline arrow function
const result = ages.reduce((sum, age) =>  sum + age);

console.log(result);
