/* Never forget another recipe!

Create an object to hold information on your favorite recipe. It should have properties for title (a string), servings (a number), and ingredients (an array of strings).

On separate lines (one console.log statement for each), log the recipe information so it looks like:

Mole
Serves: 2
Ingredients:
cinnamon
cumin
cocoa
*/

var recipe = {

    title : 'cake',
    serving : 4,
    ingredients : ['flour','milk','love','eggs','magic']

}

console.log(recipe.title);
console.log(recipe.serving);

for(var j = 0; j < recipe.ingredients.length ; j++)
{
    console.log(recipie.ingredients[i]);
}


        //This is an idea of how to add objects an array

        var book = [];
        var book1 = {
            title: 'batman',
            author: 'manning',
            alreadyRead : false
        }

         books = [book1];

         //Another book pushing to array
         var books = {
             title: 'catman',
             author: 'ranning',
             alreadyRead : false
         }

        //books.push(book2);
        books = [book1,book2];
        books[0];
        books[0].title
        books[0][title]

// THE READING LIST MY ATTEMPT

var book = [
{
    title : "javascript book 6",
    pages : "322",
    author : "boris",
    reading : true
},
{

    title : "css book 3",
    pages : "122",
    author : "rupert",
    reading : false
},
{
    title : "zoo animals 1",
    pages : "142",
    author : "sally",
    reading : true
}
];//end of book array
for(var k = 0; k < book.length ; k++ )
{
if(book[k].reading == true)
{
    console.log("You have read " + book[k].title);

}else{
    console.log("you have not read " + book[k].title);
}
}
// ALTERNATIVE FOR NO == TRUE BECAUSE OF TRUTHY FALSEY
for(var f = 0; f < book.length ; f++ )
{
    var book = book[f];
    var desc = book.title + "by" + book.author;

    if(book.reading)
    {
        console.log("You have read " + desc);

    }else{
        console.log("you have not read " + desc);
    }
}
// THE MOVIE EXERCISE

var movie = {
    title : 'sharnado',
    duration : 100,
    stars : ['90210 guy', 'sharks']
}

console.log(movie.title);
console.log(movie.duration);
console.log(movie.stars.join(','));

//join convers array into string and pass in a concatinator join can be with anything ( - )
