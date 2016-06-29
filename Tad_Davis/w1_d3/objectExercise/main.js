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

for(i = 0; i < recipe.length; i++){


}
console.log(recipe.title);
console.log(recipe.serving);

for(var j = 0; j < recipe.ingredients.length ; j++)
{
    var cake = recipe.ingredients + "\n";
}
console.log(cake);


// THE READING LIST

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
