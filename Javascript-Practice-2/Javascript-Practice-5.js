/*
  JS Practice 5
  
    This will be the hardest practice yet, so get ready!

    We'll practice using common methods, then creating our own functions

    To test a given function or method, 
    you can put it inside a console log, like so.
        >> console.log(addTwo(2));
        >> 4

    or like so with your "expected" value of 4
        >> console.log(addTwo(2) === 4)
        >> true
    this also known as a test :)
*/


/*
    ☑️ Cool, let's create our own functions, first create a function definition that...
        >> 1. takes a number, "num" as an argument
        >> 2. divides num by 2
        >> 3. (don't forget to return!)
    ☑️ then, add some code to your function that rounds the number DOWN
    ☑️ finally, call your function with the values: 10, 25, 1235
        >> these should return: "5", "12", "617"
*/
function divTwo(num) {
  return num / 2;
}
console.log(divTwo(10));
console.log(Math.floor(25));
console.log(Math.floor(1235));
/*
    ☑️ now, create a function expression that 
        >> 1. takes a string as an argument
        >> 2. takes the first character "upper cases" it, and returns it
        >> 3. HINT: use direct indexing to get a single character from a string
    ☑️ call your function with the values: "hello", "world", "i love javascript"
        >> these should return "H", "W", "I"
    ☑️ BONUS: change your fn to return the original string capitalized
        >> these should return "Hello", "World", "I love javascript"
*/
var Upper = function(str) {
  return str[0].toUpperCase();
}
console.log(Upper('hello'));
console.log(Upper('world'));
console.log(Upper('i love javascript'));

var Capital = function(str) {
  return str[0].toUpperCase() + str.slice(1);
}

console.log(Capital('hello'));
console.log(Capital('world'));
console.log(Capital('i love javascript'));



/*
    ☑️ Now, let's get some practice with the string methods
    ☑️ given the string "i love javascript"...
        >> get the "indexOf" the "j" character (should return 7)
        >> get the "indexOf" the "z" character (should return -1)

        >> get a "slice" of just the word "javascript"
        >> get a "slice" of just the word "love"

        >> "replace" the word "javascript" with "HTML"

        >> "split" the words apart into an array (should return ["i", "love", "javascript"])
*/

let phrase = 'i love javascript';
console.log(phrase.indexOf('j'));
console.log(phrase.indexOf('z'));
console.log(phrase.slice(7, 17));
console.log(phrase.slice(2, 7));
console.log(phrase.replace(/javascript/g, 'HTML'));

console.log(phrase.split(" "));
/*
    ☑️ let's get some practice with the number methods
    ☑️ given the number 1000
        >> Convert it to a string with a "fixed" 2 decimal places
        >> add a dollar sign to the front of this string
        >> Use Math.max to compare your age with my age (28)
*/

var num = 1000;
console.log('$' + num.toFixed(2));
console.log(Math.max(28, 36));

/*
    ☑️ let's get some practice with the array methods
    ☑️ given the array [ 1, 2, 3, 4 ]
        >> Let's "slice" it to just get the last 2 numbers 
            (remember, it does not modify the array, but makes a copy)

        >> Now, let's "push" numbers 5 and 6 into our array
            ( the Array should now be [1, 2, 3, 4, 5, 6] )

        >> Let's "SPLICE" it to now remove the 4 and 5 
            (remember, this DOES modify the array "in place")

*/
var arr = [1,2,3,4];
console.log(arr.slice(2));
arr.push(5,6);
console.log(arr);
arr.splice(3, 2);
console.log(arr);
/*
    CHAINING

    A common pattern is to chain multiple methods together
    They get "evaluated" from left to right, so...

    var name = "Igor Z";

    name.toUpperCase().split(' '); 
        >> would work! 
        >> toUpperCase goes first, so we get: "IGOR Z".split(' '), and finally ['IGOR', 'Z']
        >> in other words, we use 2 string methods in a row

    name.split(' ').toUpperCase();
        >> would NOT work
        >> split goes first, so we get ["Igor", "Z"].toUpperCase(), which causes an error
        >> we cannot use .toUpperCase, a string method, on an array

    ☑️ a common pattern is chaining "split" and "join" together
        this allows us to use array methods on strings, and then convert them back

        write the following out to see for yourself
        >> create a string, var alphabet = "abc"
        >> ".split" this string with the "" (empty space) char as an argument
        >> attach the ".reverse()" method to the end
        >> now ".join" this array with the "" (empty space) char as an argument

        cool, right?
*/

var alphabet = 'abc';
console.log(alphabet.split(' ').reverse().join(''));

/*
    ☑️ ok, now it's your turn (for real this time)
        Chain these steps into a single line! (Don't use intermediary variables)

    ☑️ create a number, var myNumber = 100...
        >> Let's convert it to a "fixed" 2 decimcal places (ex. "100.00")
        >> Then let's "split" it at "." to get dollars and cents
        >> Finally, let's use DIRECT INDEXING to just get the cents (ex. "00")
*/

var myNum = 100;
console.log(myNum.toFixed(2).split('.')[1] + ' cents');


/*
    ☑️ one more, create a string, var coachName = "jan frey"...
        >> Let's split the words apart
        >> Then JUST get the last name initial (hint: direct indexing 2x)
        >> Convert the "f" to upper case
        >> Concat it, to create a string that says "F is the last initial"
        >> And finally, wrap the whole thing in a console.log!
*/

var coachName = "jan frey";
console.log(coachName.split(' ')[1][0].toUpperCase().concat(" is the last initial"));








