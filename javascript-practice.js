//let const

const num = 1;
const num2 = 2;
console.log(num + num2);

//numbers = primitive data type - building block of language
const myMoney = 100;
const myFriendsMoney = 200 + 20;

const totalMoney = myMoney + myFriendsMoney;

//remainder / modulo

const change = totalMoney % 100;

console.log(change);

//booleans - comparison
const iHaveMoreMoney = myMoney > myFreindsMoney;

console.log(iHaveMoreMoney);

if (myMoney > iHaveMoreMoney) {
   console.log("I'm rich")
} else  if (myMoney > 200 ) {
    console.log("I paid the bills")
} else {
    console.log("i'm poor")
}

//strings
let myName = 'Youil\'s computer';
let myMiddleName = "jack";
let friendsName = "peter";

//interpolation
let fullName = `${myName} ${myMiddleName} Rogers`;

console.log(myname[0]);

//string method
console.log(myName.length);

//template string
var firstname = 'Youil';

var helloString = `hello ${firstName}`
var big String = `<h1> ${firstName}`

var paragraphs = 'first pargraph \t second paragraph \n\n\n third paragraph';

var paragraphs = `
  <div>
    <h1>${firstName}</h1>
    <p>second paragraph</p>
    <p>third paragraph</p>
  </div>
`;

var point = 2;

if (point % 2 === 0) {
    then(" modulo point equals zero")
}
