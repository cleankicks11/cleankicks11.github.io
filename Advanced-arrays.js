//Advanced Arrays -- for, forEach -- goes one by one to interate of collection
//use map to loop instead of forEach - forEach requieres new array created
//map -- always returns for each element and stores in collection

const array = [1, 2, 10, 16];

const double = [];
const newArray = array.forEach((num) => {
    double.push(num * 2);
})

console.log('forEach', double);

//map loop

const mapArray = array.map(num => num * 2);

console.log('map', mapArray);

//filter - interate through array

const filterArray = array.filter(num => num > 5);

console.log('filter', filterArray);


//reduce -- can do map and filter in this type of loop
//accumulator(acc) - stores info that happens in body of function

const reduceArray = array.reduce((accumulator, num) => {
    return accumulator + num
}, 0);

console.log('reduce', reduceArray);
