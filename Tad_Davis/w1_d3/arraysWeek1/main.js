/**
 * Arrays
 * Most of your answers should be stored in variables called q1, q2 etc.. and the variables printed to the console.

 	(i.e) console.log("Question 1" + q1)
 */

/**
 * Question 1
 * Create an array of image sources. Use image1.png, image2.png, and image3.png as the array values.
 */
var q1 = ["image1.png", "image2.png"," image3.png"];

console.log(" the array " + q1);
/**
 * Question 2
 * Using the array from Question 1, store the first element of the array in variable q2.
 */

var q2 = q1[0];
console.log(q2);
/**
 * Question 3
 * Get the length of the first array (number of elements in the array) and store it in variable q3
 */

var q3 = q2.length;
console.log(q3);
/**
 * Question 4
 *  Using the array from Question 1, store the last element of the array in variable q4. Hint: How can we get the number of elements in the array?
 */
var q4 = q1[q1.length-1];
console.log(q4);

// ____________________________________________________________________________

/**
 * Arrays + Iteration
 * Most of your answers should be stored in variables called q1, q2 etc.. and the variables printed to the console.

 	(i.e) console.log("Question 1" + q1)
 */

/**
 * Question 1
 * Create an array of numbers using 1,2,3, and 4 as values. Use forEach to increase each value by 1 and store the value back in the array.
The end result should be an array of numbers with values 2,3,4,5
 */
 var qq1 = [1,2,3,4];
// Your code here
    for(var i = 0; i < qq1.length; i++) {
        qq1[i]++;
    }
    console.log(qq1);
/**

 * Question 2
 * Using the array from Question 1, find the average of the numbers in the array (average=sum of all numbers/number of numbers). Store the average in q2.
 */

// Your code here
var qq2 = [1,2,3,4];
var sum = 0;
for( var i = 0; i < qq2.length; i++ ){
    sum = sum + qq2[i]; //don't forget to add the base
};

var avg = sum/qq2.length;
console.log(sum);
