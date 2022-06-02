const name = 'Youil';
const age = 36;
const hasJob = true;

const userInfo = {
    name: 'Steve',
    age: 30,
    hasJob: true,
    socialMedia: {
      twitter: "www.twitter.com/Steve",
      facebook: "www.facebook.com/Steve"
    }
};

//pull key: value
console.log(userInfo.name);

//string literal indexing

console.log(userInfo['hasJob']);

//key value access
const key = 'name';
console.log(userInfo[key]);

//change/update value of key in object
console.log(userInfo['age']);

userInfo.age = 31;

console.log(userInfo.age);

//nested property

console.log(userInfo.socialMedia.twitter);

//get proerpty that doesn't exist -- undefined

console.log(userInfo.lastName;
