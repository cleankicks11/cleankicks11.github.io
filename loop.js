var todo = [
   "Clean Room",
   "Brush Teeth",
   "Exercise",
   "Study Javascript",
   "Eat healthy"
];

for (var i=0; i < todo.length; i++) {
    todo[i] = todo[i] + "!";
}

var todolength = todo.length;

for (var i=0; i < todolength; i++) {
    console.log(todo[i], i);
}

// function
function logTodo(todo, i) {
    console.log(todo, i);
}

//call function - simplified
todo.forEach(logTodo);

//-- loop forEach --
//todo.forEach(function(todo, i) {
//    console.log(todo, i);
//})

//-- While Loop --
// var counterOne = 10;
// while (counterOne > 10) {
//    console.log("while", counterOne);
//    counterOne--;
//}

//-- Do While Loop --
// var counterTwo = 10;
// do {
//     console.log("do while", counterTwo);
//     counterTwo--;
// } while (counterTwo > 10);

