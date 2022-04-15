//Pass by Value



//Pass by Reference - objects stored in memory location and passed value stored

let obj1 = {name: 'Yao', password: '123'};
let obj2 = obj1;

obj2.password = 'easypeasy'

console.log(obj1)
console.log(obj2)

let obj = {a: 'a', b: 'b', c: 'c'};

let clone = Object.assign({}, obj);

let clone2 = {...obj}

obj.c = 5;

console.log(obj)
console.log(clone)
console.log(clone2)
