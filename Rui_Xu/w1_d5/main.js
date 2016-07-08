// Follow the requirements in the list below:
//
// Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. Do some Googling to figure this out if you forget how conditionals work.
// Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.
// Write a function isCharacterAVowel that takes a character (i.e. a string of length 1) and returns true if it is a vowel and false, otherwise.
// Define a function sumArray and a function multiplyArray that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24.
// Write a function that returns the number of arguments passed to the function when called.
// Define a function reverseString that reverses a string. For example, reverseString("jag testar") should return the string "ratset gaj".
// Write a function findLongestWord that takes an array of words and returns the length of the longest word in the array.
// Write a function filterLongWords that takes an array of words and a number i and returns a new array of words that are longer than i characters long.
// Bonus
//
// Attach the function reverseString (from question 6) to the object String so that it is possible to call: "General Assembly".reverseString().
//
// Write a function that takes a string as an argument and returns an object where:
//
// the keys are the characters that occur in the string
// the values are the number of occurrences for each letter, regardless of the case


function isVowel(str){
  var vowels = ['a','e','i','o','u'];
  //str.test(regExp(""))
  str = str.toLowerCase();
  for(var i=0;i<vowels.length;i++){
    //debugger
    vowels[i] = new RegExp(vowels[i]);
    if(vowels[i].test(str)){return true;};
  }
  //debugger
  return false;
  //vowels.forEach(this.test(str))
}
console.log(isVowel('e'));

function sumArray(arr){
  var sumArr = 0;
  while(arr.length!==0){
    sumArr+=arr.shift();
  }
  return sumArr;
}

console.log(sumArray([1,2,3,4,5]));
function multiplyArray(arr){
  var sumArr = 1;
  while(arr.length!==0){
    sumArr*=arr.shift();
  }
  return sumArr;
}
console.log(multiplyArray([1,2,3,4,5]));

function argCount(num1,num2,num3,num4,num5,num6){
  return arguments.length;
}
console.log(argCount(1,2,3,4,5,6));

function reverseStringOverWrite(str){
  str = str.split("");
  var str_rvs = [];
  var str_rvs_ch = "";
  var elemt;
  while(str.length>0){
    elemt = str.pop();
    str_rvs.push(elemt);
    str_rvs_ch = str_rvs_ch+elemt;
  }
  console.log(str_rvs_ch);
  return (str_rvs.join(""));
}
console.log(reverseStringOverWrite("abc defd"));


function longestWords(arr){
  var lth = 0;
   for(var i=0;i<arr.length;i++){
     if(lth<arr[i].length){
       lth=arr[i].length
     }
   }
  return lth;
}

function filterLongWords(arr,maxLength){
   var filtered=[];
   for(var i=0;i<arr.length;i++){
     if(arr[i]<maxLength){
       filtered.push(arr[i]);
     }
   }
   return filtered;
}
/*
var reverseString = function(str){
  str = str.split("").reverse().join().replace(/,/g,"");
  return str;
}*/
//console.log(reverseString("abcdefg"));

String.prototype.reverseString = function(){
  return this.split("").reverse().join().replace(/,/g,"");
}
// console.log("12345".reverseString());
// var q="Jet Star";
// console.log(q.reverseString());

// Write a function that takes a string as an argument and returns an object where:
//
// the keys are the characters that occur in the string
// the values are the number of occurrences for each letter, regardless of the case

function cleanString(str){
 // punctuation, case, spacing
 console.log(str);
 var strCleaned;
 strCleaned = str.toLowerCase();
 var alpha = /[ !@#$%^&*():;"'?,.`～|]/gi;
 var strCleaned = strCleaned.replace(alpha,"");
console.log(strCleaned);
return strCleaned;
}


//new RegExp(vowels[i])
function letterCount(str){
  str = cleanString(str);
  //str = str.split("");
  var letterCount={};
  for(var i=0;i<str.length;i++){
    var cursor =new RegExp(str.substr(i,1),"g");
    var record = str.match(cursor);
    console.log(cursor);
    console.log(record);
    console.log(record.length);
    letterCount[cursor] =record.length;
    //str = str.replace(cursor,"");
  }
  return letterCount;
}

console.log(letterCount("aabbdxxbcrcttxccd"));
