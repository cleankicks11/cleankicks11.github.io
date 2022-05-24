//Number methods

const num = 999;

//toString
console.log(num.toString() + 111);

//toFixed -- arguemnt of fraction/decimal digits and length - best for regualr rounded number
console.log("$" + num.toFixed(2));


//Math.min -- minimum number of set
console.log(Math.min(12, 222, 89123, 5));

//MAth.max -- maximm number of set
console.log(Math.max(12, 222, 98876, 5, 22));

//MAth.floor --round down a decimal
console.log(Math.floor(999.999));

//math.ciel -- round any  decimal up
console.log(Math.ceil(999.00001));

//parseInt
console.log(parseInt(999.999));
