var student = {
  //key value pair, the key has to be unique
  'name':'Ray',
  'age' :28
}


console.log(student.name);
console.log(student['age']);


//array
var testArray = [1,2,"abc",true,null];
console.log(testArray);
console.log(testArray[2]);

var recipeObject = {
  title : 'Chips',
  servings : 3,
  ingredients : ['potato', 'oil', 'salt']
}

var recipeCard = function(recipe){
    var card = document.getElementsByTagName('ul')[0];
    var title  = document.createElement('li');
    title.textContent = recipe.title;
    card.appendChild(title);
    var servings = document.createElement('li');
    servings.textContent = recipe.servings;
    card.appendChild(servings);
    var ingredients = "";
    var ingreString = document.createElement('li');
    for(var i=0;i<recipe.ingredients.length;i++){
      ingredients+=recipe.ingredients[i]+", ";
    }
    ingreString.textContent = ingredients;
    card.appendChild(ingreString);
}
recipeCard(recipeObject);

/*Keep track of which books you read and which books you want to read!

Create an array of objects, where each object describes
  a book and has properties for the title (a string),
  author (a string), and alreadyRead (a boolean indicating if you read it yet).
Iterate through the array of books. For each book,
log the book title and book author like so: "The Hobbit by J.R.R. Tolkien".
Now use an if/else statement to change the output depending on whether you read it yet or not. If you read it,
log a string like 'You already read "The Hobbit" by J.R.R. Tolkien', and if not,
log a string like 'You still need to read "The Lord of the Rings" by J.R.R. Tolkien.'*/

var bk1 = {
  title : "theHuntForRedOctober",
  author: "Tom Clancy",
  alreadyRead: true
}
var bk2 = {
  title : "TheRedCardinal",
  author: "Tom Clancy",
  alreadyRead: true
}
var bk3 = {
  title : "We Were Soldier Once and Young",
  author: "Gen.Moore",
  alreadyRead: false
}
var bookArray = [bk1,bk2,bk3];
var bookCard = function(bkarray){
    var card = document.getElementById('books');
    //var book  = document.createElement('li');
    for(var i=0; i<bkarray.length; i++){
        var book  = document.createElement('li');
        var bookOb = bkarray[i];
        if(bookOb.alreadyRead){
        book.textContent = "I have read "+bookOb.title + " By " + bookOb.author;
      }else{
        book.textContent = "I still need to read "+bookOb.title + " By " + bookOb.author;
      }
        card.appendChild(book);
    }
  }
    bookCard(bookArray);
    /*
    It's like IMDB, but much much smaller!
Create an object to store the following information about your favorite movie:
title (a string), duration (a number), and stars (an array of strings).

Create a function to print out the movie information like so:
"Puff the Magic Dragon lasts for 30 minutes. Stars: Puff, Jackie, Living Sneezes."
    */
var movie = {
  title : "Fast'n Fusious",
  duration: "30 mins",
  stars : ['Van Diesel','Paul Walker','Chicks']
}

var tellMovie = function(movieObject){
  var card = document.getElementById('movie');
  var stars = movieObject.stars;
  var starStr ="";
  for(var i=0;i<stars.length;i++){
    starStr +=stars[i]+", ";
  }
  var movieList  = document.createElement('li');
  movieList.textContent = movieObject.title+" for "+movieObject.duration+". Stars: "+starStr;
  card.appendChild(movieList);
}
tellMovie(movie);
