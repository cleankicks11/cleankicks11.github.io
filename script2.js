var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

//function to check input.value length

function inputLength() {
    return input.value.length;
}

//funtion that contains all elements to create and added to child li field in ul section

function createListItem() {
    var li = document.createElement("li");
    var button = document.createElement("button");
    li.appendChild(document.createTextNode(input.value + " "));
    ul.appendChild(li);
    li.appendChild(button);
    li.classList.add("taskClass");
    button.innerHTML = "Delete";
    input.value = "";
    button.classList.add("delClass");
    console.log("Create added");
}

//listen for click function

function addListAfterClick() {
    if (inputLength() > 0) {
       createListItem();
       console.log('Click Added');
    }
}

//listen for enter keyfunction

function addListAfterKeypress(event) {
    if (inputLength() > 0 && event.keyCode === 13) {
        createListItem();
        console.log('Enter Added');
    }
}

//toggle item class to done

function doneTask(task) {
    if (task.target.className === "li") {
        task.target.classList.toggle("done");
        console.log("toggle class");
    }
}

//remove item

function delListItem(element) {
    if (element.target.className === "delClass"){
        element.target.parentElement.remove();
        console.log("Deleted list item");
    }
}

//function to call and delete element

function handleUlClick(element) {
    doneTask(element);
    delListItem(element);
    console.log("Delete Ul Click");
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

ul.addEventListener("click", handleUlClick);
