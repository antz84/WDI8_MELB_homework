console.log("Linked.");

// Dramatis Personae
var hobbits = [
  'Frodo Baggins',
  'Samwise \'Sam\' Gamgee',
  'Meriadoc \'Merry\' Brandybuck',
  'Peregrin \'Pippin\' Took'
];

var buddies = [
  'Gandalf the Grey',
  'Legolas',
  'Gimli',
  'Strider',
  'Boromir'
];

var lands = ['The Shire', 'Rivendell', 'Mordor'];


//var body = document.body;
var makeMiddleEarth = function() {
	var middleEarth = $('<section>', {id: 'middle-earth'});

	lands.forEach(function (element){
		
	var $article = $('article').append($h1);
	
	}//foreach
}//function 



	// console.log(element);
	// create h1 with element text
	var $h1 = $('h1').text(element);	
	// create article and append h1
    
	// append article into section
	 middleEarth.append($article);
	console.log($article);
});

var makeHobbits = function(event){

 var $theShire = $('article').eq(0);
 console.log($theShire);
 var $listOfHobbits = ( $('<ul>'));
 
 hobbits.forEach(function(elem){
 // var $listOfHobbits = ( $('<ul>'));
   $listOfHobbits.append( $('<li class="hobbit">').text(elem));
 });

 $theShire.append($listOfHobbits);
}
//3
var keepItSecretKeepItSaft = function (event){
	var $theRing = $('<div id ="the ring" class="magic-imbued-jewelry"></div');
	// var $frodo = hobbits.get(0)eq($theRing);
}
//4

// var makeBuddies = function(){

	// var $rivendell = $('article').eq(1);
	// var $aside = $('aside')
	// var $thebuddies = ( $('ul'));

	// $thebuddies.forEach(function(elem){
	// 	$thebuddies.append( $('<li class="buddies">').text(elem));
	// 	$rivendell.append($thebuddies);
	// });
		
// }




	/* My attempt.

	var createAside = document.createElement('<aside>');
	//turing it into a jquery object
	var newAside = $(createAside);
	//appending a ul to the aside 
	var newUl = $(newAside).append('<ul>');
	//appending a li to the ul 
	var $newli = $(newul).append('<li>');

	//create an empty text element
	var emptyListItem = $('<li>').text(element);
	//for each li add a buddy 
	
	//append the array items to the empty li
	$(emptyListItem).each(function (element){
		$(this).text(buddies[element]);
	});

*/





//5




