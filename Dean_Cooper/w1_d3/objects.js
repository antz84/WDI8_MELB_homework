var ingredients= ['cinnamon', 'cumin', 'cocoa'];


var favRecipe = {
  'title': 'Mole',
  'servings':2,
  'ingredients':['cinnamon', 'cumin', 'cocoa']

}

console.log(favRecipe.title);
console.log(favRecipe.servings);

for (var i = 0;i < ingredients.length;i++) {
  console.log(favRecipe.ingredients[i]);
}

//the reading List

var books = [
  {
  'title' : 'The Hobbit',
  'author' : 'J. R. R. Tolkien',
  'alreadyRead' : false
  },
  {
  'title' : 'The Lord Of The Rings',
  'author' : 'J. R. R. Tolkien',
  'alreadyRead' : false
  },
  {
  'title' : 'Burial Rites',
  'author' : 'Hannah Kent',
  'alreadyRead' : true
  }
];

var bookTitleAuthor;
for(var k = 0;k < books.length;k++)
{
  //console.log(books[k]);
  var outputLine = books[k].title + ' by ' + books[k].author
  console.log(outputLine);
  //console.log(bookTitleAuthor);
  if (books[k].alreadyRead){
    outputLine = 'You already read "' + books[k].title + '" by ' + books[k].author;
  }
  else {
    outputLine = 'You still need to read "' + books[k].title + '" by ' + books[k].author;
  }
  console.log(outputLine);
}






//the movie list

var movie = {
  'title': 'Puff the Magic Dragon',
  'duration':30,
  'stars':['Puff', 'Jackie', 'Living Sneezes']
}

var printMovie = function(movie) {
  console.log(movie.title + ' lasts for ' + movie.duration  + ' minutes.');

  var stars = 'Stars : ';
  for(var i = 0;i < movie.stars.length;i++) {
    stars = stars + movie.stars[i]
    //console.log(' i - ' + i);
    //console.log('length ' + movie.stars.length);
    stars = (i < (movie.stars.length-1)) ?  (stars + ', '):stars;
    //+ ', ';
  }

  console.log(stars);
}
printMovie(movie);
