console.log('exercise1');

// ARRAYS


// Question 1
var Question1 = 'Create an array of image sources. Use image1.png, image2.png, and image3.png as the array values.';
var q1 = ['image1.png', 'image2.png','image3.png'];
console.log(Question1 +'\n'+ q1);


// Question 2
var  Question2= "Using the array from Question 1, store the first element of the array in variable q2.";
var q2 = q1[0];
console.log(Question2 +'\n'+ q2);


// Question 3
var Question3 ='Get the length of the first array (number of elements in the array) and store it in variable q3';
var q3 = q1.length;
console.log(Question3 +'\n'+ q3);


// Question 4
var Question4 ='Using the array from Question 1, store the last element of the array in variable q4. Hint: How can we get the number of elements in the array?';
var q4 = q1[q1.length -1];
console.log(Question4 +'\n'+ q4);



// ____________________________________________________________________________

// Arrays + Iteration


// Question 1
var Question1 = 'Create an array of numbers using 1,2,3, and 4 as values. Use forEach to increase each value by 1 and store the value back in the array. \n The end result should be an array of numbers with values 2,3,4,5';
var q1 = [1,2,3,4];

for (var i = 0; i < q1.length; i++) {
  console.log(q1[i] + 1);
}


console.log(Question1 +'\n'+ q1);


// Question 2
var Question2 = 'Using the array from Question 1, find the average of the numbers in the array (average=sum of all numbers/number of numbers). Store the average in q2.';
var total = 0;
//var a = q1[0] +  q1[1] + q1[2] + q1[3] ;
for (var i = 0; i < q1.length; i++){
  total+=q1[i];
}

var q2 = (total / q1.length);
console.log(Question2 +'\n'+ q2);





// ____________________________________________________________________________

// OBJECTS


// The Recipe Card
console.log('Never forget another recipe!');

var  favRecipe = {
  title : 'Cheescake',
  servings : 2,
  ingredients : ['eggs', 'sugar', 'cottage cheese', 'flour']
}

//for (var i =0; i< favRecipe ; i++){
  console.log(favRecipe['title']);
  console.log(favRecipe['servings']);
  console.log(favRecipe.ingredients);




//The Reading List
console.log('Keep track of which books you read and which books you want to read!');

var book1 = {
 title : 'Girl with the Dragon Tattoo',
 author : 'Larsson',
 alreadyRead : true
};

var book2 = {
 title : 'Batman Files',
 author : 'Manning',
 alreadyRead : false
}

var arrOfObj = [book1, book2];

for (var i = 0; i<arrOfObj.length; i++){
  console.log("The "+arrOfObj[i].title+" by "+ arrOfObj[i].author+'.');
}
//
// console.log("The "+book1.title+" by "+ book1.author+'.');
// console.log("The "+book2.title+" by "+ book2.author+'.');


for (var i = 0; i<arrOfObj.length; i++){
  if (arrOfObj[i].alreadyRead === true ){
    console.log("You already read "+arrOfObj[i].title+" by "+ arrOfObj[i].author+'.');
  }
  else{
    console.log("You still need to read "+arrOfObj[i].title+" by "+ arrOfObj[i].author+'.');
  };
};

// if (book1.alreadyRead === true ){
//   console.log("You already read "+book1.title+" by "+ book1.author+'.');
// }
// else{
//   console.log("You still need to read "+book1.title+" by "+ book1.author+'.');
// };
//
// if (book2.alreadyRead === true ){
//   console.log("You already read "+book2.title+" by "+ book2.author+'.');
// }
// else{
//   console.log("You still need to read "+book2.title+" by "+ book2.author+'.');
// };



// The Movie Database
console.log('It is like IMDB, but much much smaller!');

var favMovie = {
  title : 'Intouchables',
  duration : 120,
  stars : ['Omar Sry', 'Francois Cluzet']
}

function printOut(movie){
console.log(movie.title+ ' lasts '+ movie.duration+ ' minutes.' +'\n'+ 'Stars '+ movie.stars[0]+', '+movie.stars[1]+ '.');
}
printOut(favMovie);
