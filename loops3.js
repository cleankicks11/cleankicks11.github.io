//for in and for of loops
//declaritive loop only works on arrays (vs imperative loops)

const names = ["Youil", "Chris", "Steve"];

for (let name of names) {
    console.log(name);
}

//for in loop

const user = {
    name: "Youil",
    age: 36
};

//string literal of array

for (let key in user) {
    console.log(key);
    console.log(user[key]);
}

//while loops -- only has middle expression of for loop
//condtional statement
//how many times to double number

let num = 13;
let counter = 0;

while (num < 1000) {
    num *= 2;
    console.log(num);
    counter++;
}

console.log(counter);


const names = ["Youil", "Chris", "Steve"];

while (true) {
   const name = name.pop();
   console.log(name);
   if (name[0] === 'C') {
     console.log('found C name!', name);
     break;
   }
}
