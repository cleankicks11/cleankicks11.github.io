//Strings

let myName = 'Youil';

let myLastName = "Aushana";

let mySuffix = `jr`;

let myStuff = 'Youil\'s computer';

//string interpolation

let myFriendName = `Chris`;

let myFriendLastName = `Brown`;

let myFriendStuff = `${myFriendName} ${myFriendLastName}'s computer`;

console.log(myFriendStuff);

//Indexing

let word = 'Hippopotimus';

console.log(word[5]);

//concatenation
console.log(myName + ' ' + myLastName);

//string length method
console.log(myName.length);


//stringequality => output booolean

if(myName === 'Youil') {
  console.log('Names match');
}

//Template strings -- fill in with values of dynamic ocde

let helloString = `hello ${myName}`

let htmlString = `<h1> ${myName} </h1>`

//Escaped Special characters

var paragraphs = 'first \n second \t third';

//template stirngs with back ticks

let story = `
	first
	second
	third
`;

let aboutMe = `
    <div>
	<h1>${firstName}</h1>
	<p>Paragraph 1</p>
    </div>
`;



