4 + 3;

if (4+3 === 7) {
    alert("You're Right!");
}

if (4+4 === 8) {
   console.log("YOu're Right!");
}

function sayHello() {
    console.log("ello");
}

sayHello();

var sayBye = function() {
    console.log("Bye");
}

sayBye();

function sing(song) {
    console.log(song);
}

sing("Hey ho!");
sing("Let's go!");
sing("yeah!");


function multiply(a, b) {
  return a * b
}

multiply(5, 10);


var list = [
     ["dog", "cat", "bird", "fish"]
];
console.log(list[0][2]);

function checkDriverAge(age) {
	if (Number(age) < 18) {
		console.log("Sorry, you are too yound to drive this car. Powering off");
	} else if (Number(age) > 18) {
		alert("Powering On. Enjoy the ride!");
	} else if (Number(age) === 18) {
		console.log("Congratulations on your first year of driving. Enjoy the ride!");
	}
}

checkDriverAge(21);

var array = ["Banana", "Apples", "Oranges", "Blueberries"];
array.shift();
array.sort();
array.push("Kiwi");
array.splice(0, 1);
array.reverse();
console.log(array);

var array2 = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
console.log(array2[1][1][0]);

var user = {
    name: "YOuil",
    age: 36,
    hobby: "Cars",
    isMarried: false,
    cars: ["240", "FD", "FC", "Supra" ],
    shout: function() {
       console.log("GET OVER HERE");
    }
};

user.shout();

var list = [
    {
       username: "andy",
       password: "123456"
    },
    {
       username: "jess",
       password: "password"
    }
];

user.favoriteFood = "Pizza";
console.log(user);
