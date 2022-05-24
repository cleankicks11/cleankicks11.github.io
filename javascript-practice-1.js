//Problem #1

var printHelloName = function(firstName) {
  firstName = 'Aaron';
  var fullString = 'Hello, ' + firstname + '!';
  return fullString;
}

//Problem #2

var getInitials = function(name) {
  var split = name.split(" ");
  var firstLetter = split[0][0];
  var secondLetter = split[1][0];
  var initials = firstLetter + '.' + secondLetter;
  var upInit = initials.toUpperCase();
  return upInit;
}

var getInitials = function(name) {
  var split = name.split(" ");
  return `${split[0][0]}.${split[1][0]}`.toUpperCase();
}

//PRoblem #3 -- sumOfPositive

function sumOfPositive(nums) {

  var sum = 0;

  for( var i = 0; i < nums.length; i++) {
    if (nums[i] > 0 ) {
      sum += nums[i];
    }
  }
  return sum;
}

function sumOfPositive(nums) {
  var num = 0;
    for (var num of nums) {
      if (num > 0 ) {
        sum += num;
     }
   }
   return sum;
}

//Problem #4

var multiplyNumbers = function(num1, num2) {
  var sum = 0;
  for ( var i = 0; i < num2; i++) {
     sum += num1;
  }
  return sum;
}

var multiplyNumers = function(num1, num2) {
    var sum = 0;
    while (num1--) {
      sum += num2;
    }
    return sum;
}

//Problem #5

var repeatString = function(s, n) {
    var str = "";
    for (var i = 0; i < n; i++) {
      str += s;
    }
  return str;
}

//problem #6 -- isPalindrome
var isPalindrome = function(str) {
  const pal = str === str.split('').reverse().join('');
  return pal;
}

var isPalindrome = function(str) {
  return str === str.split('').reverse().join('');
}

function isPalindrome(str) {
    for (let i = 0; i < str.length; i++) {
      //i is a pointer
      let rightIndex = str.length - 1 - i;
      if(str[i] !== str[rightIndex]) {
	return false;
      }
      if ( i >= rightIndex) {
        break;
      }
    }
    return true;
}

function isPalindrome(str) {
    for (let i = 0; i < str.length; i++) {
      //i is a pointer
      let rightIndex = str.length - 1 - i;
      if(str[i] !== str[rightIndex]) {
        return false;
      }
      if (i >= rightIndex) {
        break;
      }
    }
    return true;
}

//Problem #7 -- counntOdd

function countOdd(n) {
    var sum = n / 2;
    var count = Math.floor(sum);
    return count;
}

var countOdd = function(n) {
  var sum = 0;
  while(n--) {
    if(n % 2 === 1) {
      sum++;
    }
  }
  return sum;
}

//Problem #8 - sumMultiples

var sumMultiples = function(n) {
  var sum = 0;
  while(n--) {
    if(n % 3 === 0 || n % 5 === 0) {
     sum += n;
    }
  }
  return sum;
}

//Problem #9 -- unbalancedArray

var unbalancedArray = function(nums) {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
  sum += nums[i]
  }
  return sum;
}

var unbalancedArray = function(nums) {
    var sum =0;
    for (var num of nums) {
      sum += num;
    }
    return sum;
}

function unbalancedArray(nums) {
    return nums.reduce(function(sum, num) {
      return sum + num
    })
}

//PRoblem #10 -- countVowels

var countVowels = function(s) {
  var sum = 0;
  for(var str1 of s ) {
    if(str1 === 'a' || str1 === 'e' || str1 === 'i' || str1 === 'o' || str1 === 'u' ) {
    sum++;
    }
  }
  return sum;
}

//max number negative

function makeNegative(num) {
  return num < 0 ? num : -num;
}
