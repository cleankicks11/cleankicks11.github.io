//Methods -- similar to functions
//function inside of object is called method

const user = {
    name: "Youil",
    age: 36,
    sayHello: function() {
	console.log("Hello There!");
    }
}

const num = 123;
num.toString();

const arr = [1,2,3];
arr.push(4);
console.log(arr);

//specific methods tied to different datatypes
//string methods

const animal = "dogs are great";

//length
console.log(animal.length);

//indexof -- method --find substring in string
console.log(animal.indexOf("s"));
console.log(animal.indexOf("great"));

//slice method -- cut at point -- can accept two arguemtns start and endppoint
//upto but not including the end point index
console.log(animal.slice(1));
console.log(animal.slice(0, 4));
console.log(animal.slice(0, -5));


//to upper case --to lowercas

console.log(animal.toUpperCase());
console.log(animal.toLowerCase());

//Concat

console.log(`${animal} (not)`);
console.log(animal + " (really)");
console.log(animal.concat(" (definitely)"));


//replace -- regex or string --2nd is the repalce item
console.log(animal.replace("dogs", "cats"));

//replace each entry with sed like '/""/g'
const name = "yo yo yo i'm in the house";
console.log(name.replace(/yo/g, "hey"));

//split -- convert string o an array with each character as index value
//arguemtns are split areas -- delimiter
const country = "United States";
console.log(country.split(" "));


