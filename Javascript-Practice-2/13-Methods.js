//Methods

const user = {
    user: 'Youil',
    age: 30,
    sayHello: function() {
      console.log("hello there");
    }
};

user.sayHello();

//Method by data type -- built in javascript methods

//String Methods

const animal = "dog";

//length

console.log(animal.length);

//indexOf -- find char or substring in a string

console.log(animal.indexOf("s"));

//Slice
console.log(animal.slice());

//toUpperCase / to LowerCase
console.log(animal.toUpperCase());
console.log(animal.toLowerCase());

//concat

console.log(`${animal} (not)`);
console.log(animal + " (really)");
console.log(animal.concat(" (definitely)"));

//replace
console.log(animal.replace(/dogs/g, "cats"));

//split -- split at delimitor
console.log(animal.split("")):

