/*
 JS Practice 4

 this time you'll get a little less direction, 
 use "don't forget javascript" cheat sheet & re-watch the videos if needed!
*/

/*
    ☑️ create a string that contains your name
    ☑️ for loop over it, and print character to the console, one at a time
*/

const name = 'Youil';

for( let i = 0; name.length; i++) {
    console.log(name[i]);
}

/*
    ☑️ create an array with the first names of everyone in your family
    ☑️ for loop over the array, and print out the names one at a time
    ☑️ now, change your loop to print out first and last name on each iteration!
        (hint, your last name is the same for you whole family, right?)
*/
var names = ["Doris', "youil', 'Julian'];

for (var i = 0; i < names.length; i++ ) {
    console.log(names[i] + ' Aushana');
}

/*
    ☑️ copy the code you wrote above and paste it below this comment
    ☑️ now "refactor" this code into a "declarative" "for of" loop
*/

var names = ["Doris', "youil', 'Julian'];

for (var name of names ) {
    console.log(name[i] + ' Aushana');
}


/*
    ☑️ now, declare an index variable "i" (on its own) and set it to zero
    ☑️ now write a while loop, with the break condition being i < 10. DON'T SAVE THE FILE
    ☑️ ...because you need to increment i by one each time the loop runs (do this inside the loop body)
    ☑️ now console log i in the body, and make sure it's printing numbers 0-9
*/

var i = 0;

while ( i < 10 ) {
    i++;
    console.log(i);
}

/*
    ☑️ ok take the while loop code from above and paste it below
    ☑️ now, change i to be an empty string
    ☑️ set the break condition to be when the string length is > 10
    ☑️ and add a new "A" character to the end of i every time the loop runs.
*/

var i = "";

while ( i.length < 10 ) {
    i += 'A';
    console.log(i);
}


/*
    ☑️ still with me? let's create an object in variable "computer"
    ☑️ set the following keys & values: ram is "8GB", cpu is "quad core", storage is "1TB"
    ☑️ now, loop over the object with a "for in" loop
    ☑️ on each loop iteration, print out the key and value in a string formatted like so:
        "ram spec is 8GB", "cpu spec is quad core", "storage spec is 1TB"
*/

const computer = {
  ram: "8Gb",
  cpu: "quad core",
  storage: "1TB"
}

for (var spec in computer) {
  console.log(`${spec} spec is ${computer[spec]}`);
}
