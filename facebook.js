var database = [
    {
        username: "andrei",
        password: "secret"
    },
    {
        username: "Youil",
        password: "password"
    },
    {
        username: "Billy",
        password: "123456"
    }
];

var newsFeed = [
    {
       username: "Bobby",
       timeline: "so tired from all the communist propaganda"
    },
    {
       username: "Sally",
       timeline: "Javascript is so fun!"
    },
    {
       username: "Joe Biden",
       timeline: "Im a stupid commie bastard"
    }
];

function isUserValid(username, password) {
    for (var i=0; i < database.length; i++)  {
        if(database[i].username === username &&
             database[i].password === password) {
             return true;
        }
    }
    return false;
}

function signIn(username, password) {
    //-- Verify is user is valid
    //console.log(isUserValid(username,password));

    if (isUserValid(username, password)) {
        console.log(newsFeed);
    } else {
        alert("Sorry, wrong username and password");
    }
}

var userNamePrompt = prompt("What\'s your username?");
var passwordPrompt = prompt("What\'s your password?");

//function signIn(user, pass) {
//    if (user === database[0].username && pass === database[0].password) {
//        console.log(newsFeed);
//    } else {
//        alert("username or password is incorrect.");
//    }
//}

signIn(userNamePrompt, passwordPrompt);
