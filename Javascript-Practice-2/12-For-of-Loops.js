//for OF loop -- for in loop
//declaractive loop

const names = ['Youil', 'Steve', 'John'];

for ( let name of names) {
    console.log(name);
}

//For in loop -- declarative

const user = {
    name: 'Youil',
    age: 30
};

//key is string literal

for ( let key in user) {
    console.log(key);
    console.log(user[key]);
}
