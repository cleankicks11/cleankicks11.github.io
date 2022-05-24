//simple for loop

var myName = 'Youil';

for (var i = 0; i < myName.length; i++ ){
    console.log(myName[i]);
}


var names = ['Aaron', 'Youil', 'macy'];

for ( var i = 0; i < names.length; i++) {
    console.log(names[i] + "Aushana");

}

var names = ['Aaron', 'Youil', 'macy'];

for ( var name of  names) {
    console.log(name + "Aushana");
}

var i = 0;
while(i < 10) {
  i++;
  console.log(i);
}


var i = 0;
while(i++ < 10) {
  console.log(i);
}

var i = 0;
while(++i < 10) {
  console.log(i);
}

var i = "";
while(i.length < 10) {
    i += "A";
    console.log(i);
}

var computer = {
    ram: "8GB",
    cpu: "quad core",
    storage: "1TB"
};

for (var spec in computer) {
    console.log(`${spec} is ${computer[spec]}`);
}

