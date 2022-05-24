//convert arrays to object to pass to API as JSON Objects
//Stringify data in JSON before sending
//login form -- dynamic data
//clean up data -- for lowercase and whitespaces
//encrypt password on client before sending -- server an decrypt and reencrypt password in database

var email = "youil@fakeemail.com ";
var password = "helloworld";
var tweets = [
	{content: 'im hungry', timestamp: Date.now() - 10000},
	{content: 'just got to mcdonalds', timestamp: Date.now() - 5000},
	{content: 'finished eating', timestamp: Date.now()}
];

function encrypt(pw) {
    return pw.split('').map(char => char.charCodeAt(0) + 10).join('');
}

var formattedEmail = email.toLowerCase().trim();
var encryptedPW = encrypt(password);

var tweetObject = {};
for(var tweet of tweets) {
    tweetObject[tweet.timestamp] = tweet.content;
}
console.log(tweetObject);

var requestObject = {
    email: formattedEmail,
    password: encryptedPW,
    tweets: tweetObject
};

console.log(JSON.stringify(requestObject));
