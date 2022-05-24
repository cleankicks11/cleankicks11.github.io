function divByTwo(num) {
    return Math.floor(num / 2);
}

console.log(divByTwo(4));
console.log(divByTwo(5));

var getFirstChar = function(str) {
    return str[0].toUpperCase();
}

console.log(getFirstChar("hello"), getFirstChar("world"), getFirstChar("i love javascript"));


var Capital = function(str) {
    return str[0].toUpperCase() + str.slice(1);
}

console.log(Capital("hello"), Capital("world"), Capital("i love javascript"));

var loveString = "i love javascript";

console.log(loveString.indexOf('j'), loveString[7]);

console.log(loveString.slice(7), loveString.slice(2, 6));

console.log(loveString.replace('javascript', 'HTML'));

console.log(loveString.split(" "));


var num = 1000;

console.log(num.toFixed(2));
console.log(Math.max(28, 32));

var myArr = [1,2,3,4,5];

console.log(myArr.slice(-2));
myArr.push(5, 6)
console.log(myArr);

arr.splice(3, 2);
console.log(myArr);

var alphabet = "abc";
console.log(alphabet.split('').reverse().join(''));

var myNumber = 100;

console.log(myNumber.toFixed(2).split('.')[1] + ' cents');

var coachName = 'Jan Frey';
console.log(coachName.split(' ')[1][0].toUpperCase().concat(" is the lat initial"));
