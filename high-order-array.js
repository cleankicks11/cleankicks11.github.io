//Higher order Array Methods

const nums = [1,2,3,4,5];

//find method -- like for loop through array
const found = nums.find(num => {
    console.log(num);
    if (num > 2) {
	return true;
    }
});

console.log(found);

//some
const ages = [14, 21, 22, 27, 35, 40];

const hasMinors = ages.some(num => {
    if (age < 18) {
        return true;
    }
})

console.log(hasMinors);


//every

const price = [14, 21, 22, 27, 35, 40];

const hasFunds = price.every(num => {
    if (price < 18) {
        return true;
    }
})

console.log(hasFunds);

//forEach

const price = [14, 21, 22, 27, 35, 40];
let mostFunds = 0;

price.forEach(price => {
    console.log(price);
    if (price > mostFunds) {
        mostFunds = price;
    }
});

console.log(mostFunds);


//map -- save the range in array for new variabe

const grades = [70, 75, 80 , 85, 90, 95];

const classGrades = grades.map(grade => {
    if ( grade >= 90) {
    return "A";
    } else if (grade <= 90 && grade >= 80) {
	return "B";
    } else if ( grade < 80 ) {
	return "C";
    }
});

console.log(classGrades);


//filter -- simillar to some and every

const fail = grades.filter(grade => {
    if ( grade < 70) {
    return true;
   }
})

const pass = grade.filter(grade => {
    if ( grade > 70) {
      return true;
    }
})

console.log(fail, pass);


//sort -- does wiork in plae -- rather than copy -- sort by number or letter

const names = ["Alex", "Bob", "derek", "Chirs"];
grades.sort();
names.sort();
console.log(grades);
console.log(names);


//reduce -- mkes copy

const result = grades.reduce((sum, grades) => {
    console.log(sum, grade);
})

const weight = [ 100, 120, 140, 160, 180];

const total = weight.reduce((sum, weight) => sum + weight);

console.log(total);
