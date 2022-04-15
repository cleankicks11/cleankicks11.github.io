//scope example

//Root scope (window)

var fun = 5;

function funFunction() {
    //child scope
    var fun = "hello";
    console.log(1, fun);
}

function betterFunction() {
    //shild scope
    var fun = "Bye";
    console.log(2, fun);
}

function bestFunction() {
    //child scope
    var fun = "Ciao";
    console.log(3, fun);
}

console.log("window", fun);
funFunction();
betterFunction();
bestFunction();
