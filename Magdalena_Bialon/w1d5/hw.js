console.log('it works');


// Question 1
function maxOfTwoNumbers(num1, num2) {
  return (num1>num2)? num1 : num2
}
console.log(maxOfTwoNumbers(3,4));



// Question 2
function maxOfThree(num1, num2, num3) {
  if(num1>num2 && num1>num3){
    return num1;
  }else if(num2>num1 && num2>num3){
    return num2;
  }else{
    return num3;
  }
}
console.log(maxOfThree(5,6,7));



// Question 3
var letter1 = 'a';
var letter2 = 'b'

function isCharacterAVowel(string){
if (string === 'a' || string === 'e' || string === 'i' || string === 'o' ||  string === 'u' ) {
  return true;
} else {
  return false;
}}
console.log(isCharacterAVowel(letter1));


//OVERTHINKING AND PRACTISING forEach
// function isCharacterAVowel(string) {
//   var vovels = ['a','e','i','o','u'];
//   var matched = false;
//
//   vovels.forEach(function(element) {
//     console.log(element);
//     if (element === string) {
//       console.log(true);
//       matched = true;
//       return true;
//     } else {
//       console.log(false);
//       return false;
//     }
//     // return element === string ? true: false;
//   })
//   return matched;
// }
// isCharacterAVowel('a');


//ANOTHER APPROACH
// var filtered =  vowels.filter(function(element) {
//   return element === string;
// })
// console.log(filtered);
// isCharacterAVowel('a');



// Question 4
var arrayNumbers=[1,2,3,4,5];

var totalSum = 0;  //sum is ok starting from 0 ;)
function sumArray(myArrS) {
  myArrS.forEach(function(element) {
    return totalSum += element;
  })}
sumArray(arrayNumbers);
console.log(totalSum);

var totalMulti = 1;  //be careful with this one :P 0*1*2*3*4 = 0!!!!!
 function multiplyArray(myArrM) {
  myArrM.forEach(function(element) {
    return totalMulti *= element;
  })}
multiplyArray(arrayNumbers);
console.log(totalMulti);



// Question 5
function numberOfArguments(){
 return arguments.length;
}
console.log(numberOfArguments(1,4,9,8));



// Question 6
var word = 'heyy you'
function reverseString (string) {
  return string.split('').reverse().join('');
}
console.log(reverseString(word));




// Question 7
var arrSomeWords = ['one4', 'two4', 'three6', 'four5', 'five5'];
var longestString = 0;

function findLongestWord (arr) {
  arr.forEach(function(index){
    if (index.length > longestString) {
      longestString = index.length;
    }
  });
}
findLongestWord(arrSomeWords);
console.log(longestString);



// Question 8
var someArr = ['array', 'of', 'words', 'ar', 'arry'];
var howLong = 3;

function filterLongWords (arrOfWords, i) {
  var longestWords = [];
    arrOfWords.forEach(function(index){
      if (index.length > i){
        longestWords[longestWords.length] = index;
      }
    })
    return longestWords;
}
console.log(filterLongWords(someArr, howLong));



// Bonus 1
var myString = "General Assembly";

String.prototype.reverseString = function(){
  return this.split('').reverse().join('');
};

//console.log(myString.reverseString());
console.log("General Assembly".reverseString()); //:D




// Bonus 2
//var myString = "General Assembly";
function charactersOccurencesCount(countedString) {
  var characters = {};
  var pureString = countedString.toLowerCase().replace(/\s/g, '');
  pureString.split('').forEach(function(letter){
    if(isNaN(characters[letter])){
      characters[letter] =  1;
    } else {
      characters[letter] = characters[letter]+1; // adding new key-value pair to object, eg: a: +1, a : +1 which gives a: 2 :))
    }
//    characters[letter] = (isNaN(characters[letter])? 1 : characters[letter]+1);
  })
  return characters;
}
console.log(charactersOccurencesCount(myString));

//isNaN() function determines whether a value is an illegal number so isNan(9) -> false
//letter is not a number - ? returns false - so else is executed
//to add new key-value pair: object[key]=value;
