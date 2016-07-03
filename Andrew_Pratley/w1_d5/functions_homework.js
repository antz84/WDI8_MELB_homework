console.log("Functions Homework");

// Question 1
function maxOfTwoNumbers(num1, num2) {
  if (num1 > num2) {
    return num1;
  }
  else {
  return num2;
  }
}

console.log(maxOfTwoNumbers(400,90));

// math.max method
function maxOfTwoNumbers(num1, num2) {
  var maxNumber = Math.max(num1, num2);
  return maxNumber;
}

console.log(maxOfTwoNumbers(564,342));

// Question 2
function maxOfThree(num1, num2, num3) {
 var maxNumber = Math.max(num1, num2, num3);
 return maxNumber;
}

console.log(maxOfThree(243,226,765));
// Question 3
function isCharacterAVowel(char) {
  if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
    return true;
  }
  else {
    return false;
  }
}

console.log(isCharacterAVowel('f'));

// Question 4

function sumArray(list) {
  var total = 0;
  for (var index = 0; index < list.length; index++) {
    total = total + list[index];
  }
  return total;
}

console.log(sumArray([2,3,4]));

// Question 4
function multiplyArray(list) {
  var total = 1;
  for (var index = 0; index < list.length; index++) {
    total = total * list[index];
  }
  return total;
}
  console.log(multiplyArray([2,3,4]));

// Question 5
function numberOfArguments(list) {
  var answer = list.length;
  return answer;
}
console.log(numberOfArguments([2,3,4,5]));

// var numberOfArguments = function(list) {
//
// };


// Question 6

function reverseString(word) {
  return word.split("").reverse().join("");
}

console.log(reverseString("testing"));

// var reverseString = function (){
//
// };


// Question 7
function findLongestWord (words) {
  var splitString = words.split(" ");
  var wordlength = [];
    for (var index = 0; index < splitString.length; index++) {
      wordlength.push(splitString[index].length);
    }
    return Math.max(...wordlength); //I know this is naughty cos it is only available in es6 :)
}

console.log(findLongestWord("so we are just chilling"));


// Question 8
function filterLongWords (arr, numLong) {
  var newlist = [];
  arr.forEach(function(word) {
    if (word.length <= numLong) {
      newlist.push(word);
    }
  });
  return newlist;
}

console.log(filterLongWords(["hello", "because", "no", "tell", "can"], 4));

// Bonus 1
//Didn't quite understand the question here.

// Bonus 2
// Not finished
function charactersOccurencesCount(str) {
  var splitAndLowerCase = str.split("").toLowerCase();
  console.log(splitAndLowerCase);


}
//
// console.log(charactersOccurencesCount("General Assembly"));
//
// a      = [5, 5, 5, 2, 2, 2, 2, 2, 9, 4];
// result = { };
// for(var i = 0; i < a.length; ++i) {
//     if(!result[a[i]])
//         result[a[i]] = 0;
//     ++result[a[i]];
// }
