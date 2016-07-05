
function maxOfTwoNumbers(num1, num2) {
  if (num1 > num2)
  {
    return num1;
  }
  return num2;
}


console.log(maxOfTwoNumbers(3,4));


// Question 2
function maxOfThree(num1, num2, num3) {
  var result = num1;
  result = maxOfTwoNumbers(result,num2);
  result = maxOfTwoNumbers(result, num3);

  return result;
}

console.log(maxOfThree(3,4,5));


// Question 3
function isCharacterAVowel(char) {
  var vowels = ['a','e','i','o','u'];
  var isVowel = vowels.indexOf(char.toLowerCase())
  console.log(isVowel);
  return (isVowel == -1 ? false : true);
}

console.log(isCharacterAVowel('p'));


// Question 4
function sumArray(arrayOfNum) {

  var total = 0;
  for (var index = 0;index < arrayOfNum.length;index++)
  {
    total += arrayOfNum[index];
  }
  return total;
}
console.log(sumArray([1,2,3,4]));

//arr.reduce
//high order functions...

// Question 4
function multiplyArray(arrayOfNum) {

  var total = arrayOfNum[0];
  for (var index = 1;index < arrayOfNum.length;index++)
  {
    total = total * arrayOfNum[index];
  }
  return total;

}
console.log(multiplyArray([1,2,3,4]));

// Question 5
var numberOfArguments = function(){
  return arguments.length;
}
console.log(numberOfArguments('wed','wed','2323d',99));



// Question 6
var reverseString = function (stringToReverse){
  return stringToReverse.split('').reverse().join('');
};

console.log(reverseString('ratset gaj'));


// Question 7

//filter..


function findLongestWord (arrayOfWords) {
  var longest = arrayOfWords.reduce(function(a, b) {
    return (a.length > b.length ? a : b);
  });

return longest;
}
console.log(findLongestWord(['ratsetgaj','tqdwwdessdsdt','hello']));



// Question 8
function filterLongWords (arrayOfWords, i) {

//first argment, doesnt have to be called element.
var filtered = arrayOfWords.filter(function(element){
  return (element.length > i);
})

return filtered;
}

console.log(filterLongWords(['abcd','abc','abcdefg'], 6));



// Bonus 1
//??????

// Bonus 2
//(not finished)
function charactersOccurencesCount(inputString) {

var keys = inputString.split('');
var keyArray = [];

for (var index = 0; index < keys.length;index++){
  console.log('index, key :', index,keys[index]);

  var findKey = keyArray.indexOf(keyArray.filter(function(i){
    return i.key == keys[index]})[0]);

  if (findKey === -1){
    keyArray.push({
      key : 'e',
      count : 1
    })
  }

console.log(findKey);

/*
o1 = {id:1}
o2 = {id:2}
o3 = {id:3}
o4 = {id:4}
a = [o1,o2,o3,o4]
var fff = a.indexOf( a.filter( function(i){return i.id==4} )[0] );
console.log(fff);

}

  if (index == 0)
  {

  }
  else
  {
    var findKey = keyARray
  }

  o1 = {id:1}
  o2 = {id:2}
  o3 = {id:3}
  o4 = {id:4}
  a = [o1,o2,o3,o4]
  a.indexOf( a.filter( function(i){return i.id==4} )[0] );
}


var index = myArray.map(function(el) {
  return el.id;
}).indexOf(4);
{
  id: 4,
  property1: 'something',
  property2: 'something'
}
*/



return keyArray;

  //returnObject.values = 4
  //returnObject.

}

console.log(charactersOccurencesCount('string'));
