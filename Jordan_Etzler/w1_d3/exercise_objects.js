//The Recipe Card

var recipes = {
  receipeName : 'Mole',
  servings : 'Serves: 2',
  ingredients: ['cinnamon', 'cumin', 'cocoa']
}

console.log(recipes.receipeName)
console.log(recipes.servings)
console.log(recipes.ingredients[0])
console.log(recipes.ingredients[1])
console.log(recipes.ingredients[2])


// The Reading List

var books = [
  {
    'Title' : 'Rework',
    'Author' : 'Jason Fried',
    'alreadyRead' : true
  },
  {
    'Title' : 'The Hobbit',
    'Author' : 'J.R.R Tolkien',
    'alreadyRead' : false
  },
  {
    'Title' : 'Zero to One',
    'Author' : 'Peter Thiel',
    'alreadyRead' : true
  }
]

for (var i = 0; i < 3; i++) {
  var result = (books[i].alreadyRead);
  console.log('It is ' + result + ' you have read ' + books[i].Title + '.');

}

// The Movie Database

var movie = [
  {
    Title : 'Puff the Magic Dragon',
    Duration : '30 Minutes',
    Stars : ['Puff', 'Jackie', 'living Sneezes']
  }
]

console.log(movie[0].Title + ' lasts for ' + movie[0].Duration + '. Stars: ' + movie[0].Stars + '.');
