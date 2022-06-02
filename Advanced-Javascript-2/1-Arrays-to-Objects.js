//Array to Object
//fruits in a database

const fruits = [
	'orange', 'orange', 'apple', 'orange', 'apple', 'pear'
];


//Count item appeanrce in array -- to declare and display object
const count = {};
  for (let item of fruits) {
    console.log(count);
    if(count[item]) {
      count[item]++;
      console.log(item);
    } else {
     count[item] = 1;
    }
}
console.log(count);


//Array to object --using map

const users = [
    {username: 'youil', fullName: 'youil aushana', description: 'junior developer'},
    {username: 'aaron', fullName: 'aaron jack', description: 'Senior developer'},
    {username: 'jan', fullName: 'jan frey', description: 'Shopify developer'},
];

var usersMap = {};

for(let user of users) {
    console.log(user.username);
    usersMap[user.username] = user;
}

console.log(usersMap.youil);


//Array to object - create complex map

const tweets = [
    {day: 'Monday', text: 'I\'m tired'},
    {day: 'Monday', text: 'Need Coffee'},
    {day: 'Tuesday', text: 'Feeling better'},
    {day: 'Friday', text: 'Redy to party'},
    {day: 'Friday', text: 'Lost my phone'},
];

//create -- object with all grouped object texts

const tweetsByDay = {};
for (let tweet of tweets) {
    console.log(tweet.day);
    if(tweetsByDay[tweet.day]) {
      tweetsByDay[tweet.day].push(tweet.text);
    } else {
      tweetsByDay[tweet.day] = [tweet.text];
    }
}

console.log(tweetByDay);

