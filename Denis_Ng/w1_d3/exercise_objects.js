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
console.log(recipe.ingredients[2])

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

for (var i = 0; i <= 1; i++) {
  var result = (books[i].alreadyRead);
  console.log('It is ' + result + ' you have read ' + books[i].Title + '.');
}
