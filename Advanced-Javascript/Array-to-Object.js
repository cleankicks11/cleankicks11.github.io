//Array to Object
//Fruit in a  database -- counter object

const fruits = ['orange', 'orange', 'apple', 'orange', 'apple','pear'];

const fruitCount = {};  //initialize the item in varibale -- ti be used as counter

for (let fruit of fruits) {  //Create variable to serve as lopp position ndex
    console.log(fruitCount); //prints count of each item in object loop
    //if condition output index of fruit variable of Fruits object loop
    if (fruitCount[fruit]) {
      fruitCount[fruit]++; //increment the fruit count of matching item in the index of Object loop
    } else {
      fruitCount[fruit] = 1; //Item in index postion of loop doesn't exist to create the counter of the item
    }
}

console.log(fruitCount);

//Array to Object II
//Creating a simple "map"

const users = [
	{username: 'aaron', fullName: 'Aaron Jack', description: 'Software developer'},
	{username: 'jan', fullName: 'Jan Frey', description: 'Shopify developer'},
	{username: 'youil', fullName: 'Youil Aushana', description: 'Linux Sysadmin'}
];

//Object that username and full user object

const userMap = {};

for ( let user of users) {
    userMap[user.username] = user;
}

console.log(userMap.youil); //Object key is user of predefined and output the entire data entry

//Array to Object III
//Creating a complex "Map"

const tweets = [
	{day: 'Monday', text: 'Im tired'},
	{day: 'Monday', text: 'Need coffee'},
	{day: 'Tuesday', text: 'Feeling better'},
	{day: 'Friday', text: 'Ready to party!'},
	{day: 'Friday', text: 'Lost my phone...'},
];

const tweetDay = {};

for (let tweet of tweets) {
    console.log(tweet.day); //list out values of day key
    console.log(tweet.text);
    if (tweetDay[tweet.day]) {
        tweetDay[tweet.day].push(tweet.text);
    } else {
        tweetDay[tweet.day] = [tweet.text];
    }
}

console.log(tweetDay);
