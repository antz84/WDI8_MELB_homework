console.log('exercise_objects');

// The Recipe Card

var recipe = {
  title : 'Mole',
  serves : 'Serves 2',
  ingredients : ['cinnamon','cumin','cocoa']
}

console.log(recipe.title);
console.log(recipe.serves);
console.log(recipe.ingredients[0]);
console.log(recipe.ingredients[1]);
console.log(recipe.ingredients[2]) //var.name[#] chooses which array item above

for (var i=0; i<recipe.ingredients.length; i++) {  //.length is telling it to get max length of ingredients
  console.log(recipe.ingredients[i]);

}

// //The Reading List

var books = [
  {
    'Title' : 'The Legend',
    'Author' : 'John Cena',
    'alreadyRead' : true
  },
  {
    'Title' : 'The Awesome',
    'Author' : 'The Rock',
    'alreadyRead' : false
}
]

for (var i = 0; i <=1; i++) {
  var result = (books[i].alreadyRead);
  console.log('It is ' + result + ' you have read ' + books[i].Title + '.');
}

//Movies

// var movie = {
//   title: 'sharknado'
//   duration: 100,
//   stars: ['the guy from 90210', 'sharks']
// }
//
// console.log(movie.title);
// console.log(movie.duration);
// console.log(movie.stars.join(', '));  //.join() converts an array to a string
