//conditionals -- chaining scope
//variables get passed down but don't getpassed up from the scope they created in

const firstName = 'Youil';
const lastName = 'Aushana';

let fullName;

if (firstName && lastName) {
  fullName = `${firstName} ${lastName}`;
}

console.log(fullName);

