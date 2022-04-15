const fun = (
	     a,
	     b,
	     c,
	     d,
	     ) => {
  console.log(a);
}

fun(1,2,3,4,)

//new version
Object.values
Object.entries

//old style
Object.keys

let obj = {
    username0: 'Santa',
    username1: 'Rudolf',
    username2: 'Grinch'
}

Object.keys(obj).forEach((key, index) => {
   console.log(key, obj[key]);
})

Object.values(obj).forEach(value => {
 console.log(value);
})

Object.entries(obj).forEach(value => {
    return value[1] + value[0].replace('username', '');
})
