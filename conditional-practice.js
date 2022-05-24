//javascript practice

//array literal

var days = [];

if (days.length) {
    console.log(days[0])
} else {
    days.push("MOn");
}


var months = ['Jan', 'Feb'];

if (months.length && months[0][0] === 'J' ) {
    console.log(months[0]);
} else {
    months.push("Jan");
}

console.log(Array.isArray(months));


var numOfWeeks = 0;
let areNoWeeks;

if ( typeof numOfWeeks === 'number') {
    let areNoWeeks = Boolean(numOfWeeks);
    cosnole.log(areNoWeeks);
}

console.logs(areNoWeeks);

//var can escape scope rules -- var has isseus though
