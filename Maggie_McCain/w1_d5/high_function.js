console.log('w1d5 homework')
// Question 1
/*Define a function maxOfTwoNumbers that takes two numbers as arguments
 and returns the largest of them. Use the if-then-else
 construct available in Javascript. Do some Googling to figure
 this out if you forget how conditionals work.*/

function maxOfTwoNumbers(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else return num2;
}

// Question 2
/*Define a function maxOfThree that takes three numbers as
arguments and returns the largest of them.*/

function maxOfThree(num1, num2, num3) {
  if (num1 > num2 && num1 > num3) {
    return num1;
  } else if (num2 > num3) {
    return num2;
  } else {
    return num3;
  }
}
// Question 3
/*Write a function isCharacterAVowel that takes a character
(i.e. a string of length 1) and returns true if it is a vowel
and false, otherwise.*/

function isCharacterAVowel(char) {
  //
  // var patt = new RegExp(/[aeiou]/);
  // patt.test(char);
  if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u' || char === 'y' || char === 'w') {
    return true;
  } else {
    return false;
  }
  // console.log(patt);
  // console.log(patt.test(char));
}

// Question 4
/*Define a function sumArray and a function multiplyArray that
sums and multiplies (respectively) all the numbers in an array of
numbers. For example, sumArray([1,2,3,4]) should return 10, and
multiplyArray([1,2,3,4]) should return 24.*/
var numArray = [1, 2, 3, 4];

function sumArray(numbers) {
var additionOfNums = 0;
for (var i = 0; i < numbers.length; i++) {
  var additionOfNums = additionOfNums + numbers[i];
} return additionOfNums;
};

// Question 4
function multiplyArray(numbers) {
  var multiplyNumbers = 1;
  for (var i = 0; i < numbers.length; i++) {
    var multiplyNumbers = multiplyNumbers * numbers[i];
  } return multiplyNumbers;
  };


// Question 5
/*Write a function that returns the number of arguments
passed to the function when called.*/
var totalRuns = 0;
var numberOfArguments = function (){
 totalRuns = totalRuns + 1;
 return totalRuns;
}

// Question 6
/*Define a function reverseString that reverses a string.
For example, reverseString("jag testar") should return the string
"ratset gaj".*/

var reverseString = function (str){
  return str.split('').reverse('').join('')
};


// Question 7
/*Write a function findLongestWord that takes an array of words
and returns the length of the longest word in the array.*/
var wordsArr = ['hi', 'hello', 'bye'];

function findLongestWord (arr) {
  var highestNumber = 0;
  for (var i = 0; i < arr.length; i++) {
    if (highestNumber < arr[i].length) {
      highestNumber = arr[i].length;
    }
  }

  return highestNumber;

}

// Question 8
/*Write a function filterLongWords that takes an array of words
and a number i and returns a new array of words that are longer
than i characters long.*/
var words = ['hello', 'hi', 'howdy', 'bye', 'alligator', 'janitor'];

function filterLongWords (list, numb) {
  var longWords = [];
  for (var i = 0; i < list.length; i++) {
    if (list[i].length >= numb) {
        longWords.push(list[i]);
    };
  };
  return longWords;
};

// Bonus 1
/*Attach the function reverseString (from question 6) to
the object String so that it is possible to
call: "General Assembly".reverseString().*/

//Think you use eval() but don't understand syntax
//or create object with reverseString property and value calls func

/*var words = {
  reverseString : reverseString(),
};

var reverseString = function (input){
  return input.split('').reverse('').join('')
}; */


// Bonus 2
/*Write a function that takes a string as an argument and
returns an object where:

the keys are the characters that occur in the string
the values are the number of occurrences for each letter,
regardless of the case*/
var charOccurance = {};
function charactersOccurencesCount(str) {
  str.split(''); //split each letter in string into its own element
  for (i = 0; i <str.length; i++) { //for statement to cycle through full array
    if (str.i !== )//if letter hasn't already been logged, log it
    charOccurance.i = //loop thru creating new property for each element with occurance being value
  }

}
