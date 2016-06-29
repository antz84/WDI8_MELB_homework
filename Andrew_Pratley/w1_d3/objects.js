console.log("Objects Homework");

// The Recipe Card

var recipe = {
  'Title': 'Mole',
  'Serves': 2,
  'Ingredients': ["cinnamon", "cumin", "cocoa"]
};
console.log(recipe.Title);
console.log("Serves: " + recipe.Serves);
console.log("Ingredients: ");

for (i=0; i < recipe.Ingredients.length; i++) {
  console.log(recipe.Ingredients[i]);
};

// The Reading List

var books = [
  {
    'Title': 'Watership Down',
    'Author': 'Duncan',
    'AlreadyRead': true
  },
  {
    'Title': 'Quiver Full of Arrows',
    'Author': 'Who knows',
    'AlreadyRead': false
  },
  {
    'Title': 'Irreversible Errors',
    'Author': 'Scott Turow',
    'AlreadyRead': true
  },
];

for (i=0; i < books.length; i++) {
  if (books[i].AlreadyRead == true) {
    console.log("You have already read " + books[i].Title + ' by ' + books[i].Author);
  }
  else {
  console.log("You still need to read " + books[i].Title + ' by ' + books[i].Author);
  }
};

// The Movie Database

var movies = {
  'Title': 'Justice League',
  'Duration': 139,
  'Stars': ["Hugh Jackman", "Natalie Portman", "Sylvester Stalone"]
};

console.log(movies.Title + " lasts for " + movies.Duration + " minutes. Stars: " + movies.Stars);
