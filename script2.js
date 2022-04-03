var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li = document.querySelector("li");

//-- Do not repaet yourself -- Use functions

liEvent();
buttonListElement();

function inputLength() {
    return input.value.length;
}

function createListItem() {
    var li = document.createElement("li");
    var button = document.createElement("button");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    li.appendChild(button);
    button.innerHTML = "Delete";
    input.value = "";

    liEvent();
    buttonListElement();
}

function addListAfterClick() {
    if (inputLength() > 0) {
       createListItem();
    }
}

function addListAfterKeypress(event) {
    if (inputLength() > 0 && event.Keycode === 13) {
        createListItem();
    }
}

function liEvent() {
    for(var i=0; i < li.length; i++) {
       li[i].addEventListener("click", changeClass)
    }
}

function changeClass(){
    this.classList.toggle("done");
}

function buttonListElement() {
    var button = document.querySelectorAll("li button");
    for(var i=0; i < button.length; i++){
        button[i].addEventListener("click", clearElement)
    }
}

function clearElement() {
    for(var i=0; i < li.length; i++) {
        this.parentNode.remove();
    }
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

