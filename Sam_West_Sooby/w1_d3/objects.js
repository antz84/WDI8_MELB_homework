//QUESTION 1

//  var recipe = {
//     'title': 'Mole',
//     'servings': 2,
//     'ingredients': ['cumin', 'cinnamon', 'cocoa']
// };

// console.log(recipe.title);
// console.log('Servings: ' + recipe.servings);
// console.log('Ingredients:');

//QUESTION 2

// var books = [
//   {title: 'The Fellowship of the Ring',
//    author: 'JRR Tolkien',
//    alreadyRead: false
//   },
//   {title: 'The Hobbit',
//   author: 'JRR Tolkien',
//   alreadyRead: true
//   }];

// for (var i = 0; i < books.length; i++) {
//   var book = books[i];
//   var bookInformation = book.title + '" by ' + book.author;
//   if (book.alreadyRead) {
//     console.log('You already read "' + bookInformation);
//   } else {
//     console.log('You still need to read "' + bookInformation);
//   }
// }

//QUESTION 3

var myFavMovie = {
    title: 'Puff the Magic Dragon',
    duration: 30,
    stars: ['Puff', 'Jackie', 'Living Sneezes']
};

function printMovie(movie) {
    console.log(movie.title + ' lasts for ' + movie.duration + ' minutes');
    var starsOne = 'Stars: ';
    for (var i = 0; i < movie.stars.length; i++) {
        starsOne += movie.stars[i];
        if (i != movie.stars.length -1) {
            starsOne += ', ';
        }
    }
    console.log(starsOne);
}