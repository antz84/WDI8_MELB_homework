
var numbers = [1, 2, 3]


// Question 1
function maxOfTwoNumbers(x, y) {
  if ( x > y ) {
    console.log(x + 'is the larger number')
  } else {
    console.log(y + 'is the largest number')
  }
}

// Question 2
function maxOfThree(x, y ,z ) {
  if ( x > y && x > z) {
    console.log(x + 'is the largest number')
  } else if (y > x && y > z) {
    console.log(y + 'is the largest number')
  } else {
    console.log(z + 'is the largest number')
  }
}

// Question 3
function isCharacterAVowel(word) {
  if( word.indexOf('a') >= 0){
    result=true;
  } else if (word.indexOf('e') >= 0){
    result=true;
  } else if (word.indexOf('i') >= 0){
    result=true;
  } else if (word.indexOf('o') >= 0){
    result=true;
  } else if (word.indexOf('u') >= 0){
    result=true;
  } else {
    result=false;
  }
}

// Question 4
function sumArray(arr) {
    var sum = arr.reduce(function(a, b) {
      return a + b;
    });
    return sum;
}

// Question 4
function multiplyArray(arr) {
  var sum = arr.reduce(function(a, b) {
    return a * b;
  });
  return sum;
}


// Question 5
var numberOfArguments = function(){

}



// Question 6
var reverseString = function (arr){
  return arr.split('').reverse().join('');
};

reverseString('Jerry');

// Question 7
function findLongestWord(words) {
  var longest = words[0];

  for (var i = 0; i < words.length; i++) {
    if (words[i].length > longest.length) {
      longest = words[i];
    }
  }
  return longest;
}

findLongestWord(['caramel', 'chffffocolate', 'vanilla'])


// Question 8
var iceCream = ['chocolate', 'vanilla', 'lemon', 'strawberry', 'mango'];

function namesLessThanFive (list) {
  if (list.length < 6) {
    return true;
  } else {
    return false;
  }
}

function filterLongWords (list, func) {
  var shortWords = [];

  for ( var index = 0; index < list.length; index++ ) {
    if ( func(list[index]) === true ) {
      shortWords.push( list[index] );
    }
  }
  return shortWords;
}

console.log(filterLongWords(iceCream, namesLessThanFive));
