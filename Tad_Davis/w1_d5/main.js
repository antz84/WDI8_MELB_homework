/*
Follow the requirements in the list below:

Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. Do some Googling to figure this out if you forget how conditionals work.
Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.
Write a function isCharacterAVowel that takes a character (i.e. a string of length 1) and returns true if it is a vowel and false, otherwise.
Define a function sumArray and a function multiplyArray that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24.
Write a function that returns the number of arguments passed to the function when called.
Define a function reverseString that reverses a string. For example, reverseString("jag testar") should return the string "ratset gaj".
Write a function findLongestWord that takes an array of words and returns the length of the longest word in the array.
Write a function filterLongWords that takes an array of words and a number i and returns a new array of words that are longer than i characters long.
*/
console.log("Hey  test");

// Question 1 //return the largest of the two numbers
//*********************************************88
//
function maxOfTwoNumbers(num1,num2) {
	
	var larger = Math.max(num1,num2) 
	return larger;
}
	console.log("Return the biggest number with math.Max",maxOfTwoNumbers(23, 10));
	

	// 
	//	A DIFFERENT VERSION OF EXERCISE	
	//	
	function maxTwoNumLong(num1,num2) {
	
		if(num1 > num2)	{
		return num1;
	
		}else{
			return num2	
		}

	}
		console.log("Return the biggest number",maxTwoNumLong(666, 777));


// Question 2
//*******************************
//
function maxOfThree(num1,num2,num3) {
	var bigNum = Math.max(num1,num2, num3) 
	return bigNum;
}
	console.log(maxOfThree(666, 777,888));

// Question 3
//***************************
//
function isCharacterAVowel(letter) {
	
		
	var vowel = ['e','i','o','u'];
	
	for(var i=0; i < vowel.length ;i++) {
		var vowelArr = vowel[i];

	if(vowelArr == letter) {
		return true;	
	}else{
		return false;
		}//end of else	
	}//end of for
}//end of function 

console.log("Is the character a vowel",isCharacterAVowel('e'));
		
var numberArr = [1,2,3,4];
	
// Question 4
function sumArray() {
		var totalSum = 0;
	for(var i = 0; i < numberArr.length; i++){
		 totalSum += numberArr[i];
		
	}
 	return totalSum;
}

	console.log("This is the sum Array",sumArray());
//Dont understand how to multiply
// Question 4
function multiplyArray(){
	var totalSum = 0;
	for(var i = 0; i < numberArr.length; i++){
		 totalSum += numberArr[i];
		}
 	return totalSum;
}
	console.log("This is the multiply array ", multiplyArray())
	

// Question 5
var numberOfArguments = function(){
  	
	var totArguments = 0;
	for(var i = 0; i < numberArr.length; i++){
		totArguments = i+1;	
	}
 	return totArguments;
}
	console.log("Number of arguments",numberOfArguments());
	
	




// Question 6
	var reverseString = function (sentence){
  		return sentence.split('').reverse().join('');
	 
};
	console.log(reverseString("check this out"));

// Question 7
//*******************************
//
	var words = ['this','is','longer'];
	
	function findLongestWord(words){
	forEach(words)
		
	console.log("this is length man", words);
}

var words = "I am creating the longest string";

// Question 8
function filterLongWord() {
	var longest = '';
	var words = words.split(' ');
	
	for(var i = 0; i < words.length; i++){
		if(words[i].length > longest){
			longest = words[i].length;
		}

	}
	return longest;  
}

console.log(filterLongWord);

// Bonus 1
//??????


// Bonus 2
function charactersOccurencesCount() {
  
}
