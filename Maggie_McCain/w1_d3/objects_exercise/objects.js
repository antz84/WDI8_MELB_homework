//recipe

var recipe = {
  'title' : '',
  'servings' : '',
  'ingredients' : [],
};

//The Reading List

var book1 = {
  'title' : 'Harry Potter',
  'author' : 'JK Rowling',
  'Already_read' : true,
}

var book2 = {
  'title' : 'Gone Girl',
  'author' : 'something Gillian',
  'Already_read' : false,
}

var book3 = {
  'title' : 'Horton hears a who',
  'author' : 'Dr. Suess',
  'Already_read' : true,
}
var books = [book1, book2, book3];
for (i = 0; i < books.length; i++) {
  console.log(books[i].title + ' by ' + books[i].author)
  if (books[i].already_read === true) {
    console.log('You already read this');
  } else console.log ('you havent read this');
}

//The movies database

var movie = {
  'title' : 'Jurassic Park',
  'duration' : '127',
  'stars' : ['trex', 'long neck', 'terradactil', 'old man'],
};
var movieInfo = movie.title + ' lasts '
  + movie.duration
  + ' minutes.  Stars '
  + movie.stars
console.log(movieInfo);
