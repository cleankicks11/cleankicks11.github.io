//While loops


//This example is a for loop written out
let i = 0;

while (i < 10) {
    console.log(i)
    i++;
}

//while loops -- exact interation not known
//doubel a number before it reaches 1000

let i = 13;

let doubled = 0;

while ( i < 1000) {
    i *= 2;
    console.log(i);
    doubled++;
}
console.log(doubled);
console.log(i);

//custom break statement

const names = ['Youil', 'Aaron', 'Enrique'];

while (true) {
    const name = names.pop();
    console.log(name);
    if (name[0] === 'E') {
      console.log('Name', name);
      break;
    }
}
