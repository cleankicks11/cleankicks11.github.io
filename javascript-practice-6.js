var nums = [1,2,3,4];

const positive = nums.every(num => {
    console.log(num);
    return num > 0;
})

console.log(positive);

const plus = nums.some(num => {
    var isGreater = num > 3
    console.log(isGreater);
    return isGreater;
})

console.log(plus);

nums.forEach(num => {
    console.log(num + ' sheep');
})


var doubled = nums.map(num => {
    return num * 2;
})

console.log(doubled);

var dollar = nums.map(num => {
    return '$' + num.toFixed(2);
})

console.log(dollar);

var isPositive = nums.map(num => {
    return num > 0;
})

console.log(isPositive);

var onlyNegative = nums.filter(num => {
    return num < 0;
})

console.log(onlyNegative);

var isEven = nums.filter(num => {
    return num % 2 === 0;
})

console.log(isEven);


var allSum = nums.reduce((sum, num) => {
    console.log(sum);
    return sum + num;
})

console.log(allSum);

var sheepString = nums.reduce((str, num) => {
    return str + num + ' sheep, ';
}, '');

console.log(sheepString.slice(0, -2));


var coach = "aaron";

coach.split('').filter(char => {
    console.log(char);
    if (char !== 'a') {
	return true;
    } else {
	return false;
    }
});


//expression
var addition = nums.map(function(num) {
    return num * 3;
}).reduce(function(sum, num) {
    return sum + num;
});

console.log(addition);

//arrow function
var addition = nums.map(num => num * 3).reduce((sum, num) => sum + num);

console.log(addition);
