//flat method used for arrays

const array = [1,2,3,4,5]
array.flat()

const array2 = [1,[2,3],[4,5]]
array2.flat()


//flat several levels in the array
const array3 = [1,2,[3,4,[5]]]
array3.flat(2)

const entries = ['bob', 'sally',,,,,,'cindy']
entries.flat()

flatMap()

//Trimm -- start or end of string

const useremail1 = '              eddytheeagle@gmail.com'
const useremail2 = '_johnnydanger@gmail.com          '
console.log(consuseremail1.trimStart())
console.log(useremail2.trimend())


//fromEntries -- transforms key value pairs into object

userProfiles = [['commanderTom', 23], ['derekZlander', 40], ['hansel', 50]]

Object.fromEntries(userProfiles)

//try and catch block -- don't need to specify the catch type parameter

try{
  true + 'hi'
} catch {
   console.log('you messed up')
}

4+5
