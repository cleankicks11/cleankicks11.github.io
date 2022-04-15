const basket = ['apples', 'oranges', 'grapes'];

const detailedBasket = {
    apples: 5,
    oranges: 10,
    grapes: 1000
}

//for loop - iterating
for (let i = 0; i < basket.length; i++) {
    console.log(basket[i]);
}

//forEach Loop - iterating

basket.forEach(item => {
    console.log(item);
})

// for of loop - iterating inervals - strings and arrays

for (item of basket) {
    console.log(item);
}

//for in loop - works with objects - enumerating for objects
//javascript arrays are like objects to be listed
//entries.keys() - alternative

for (item in detailedBasket) {
    console.log(item)
}




