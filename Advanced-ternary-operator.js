//condition ? expr1 : expr2

function isUserValid(bool) {
    return bool;
}

var answer = isUSerValid(true) ? "You May enter" : "Access Denied";

var automatedAnswer = "Your account number is: " + (isUserValid(false) ? "1234" : "Not Valid");


//Advanced control flow similar to if else else if ? :

function condition() {
    if(isUserValid(true)) {
        return "You May Enter";
    } else {
	return "Access Denied";
    }
}

var answer2 = condtion();
