var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

//-- Do not repaet yourself -- Use functions

function inputLength() {
    return input.value.length;
}

function createListItem() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";
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

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

