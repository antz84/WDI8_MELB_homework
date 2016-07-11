//several of the  functions are set to variables, why did I still
//have to  call them with () to get them to run?
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
var body = document.body;

//PART 1
var makeMiddleEarth = function () {
   // create a section tag with an id of `middle-earth`
   var $middleEarthSection = $('<section id="middle-earth">');
   // add each land as an `article` tag
   lands.forEach(function(elem) {
    //  $middleEarthSection.append( $('<article>').text(elem));
     $middleEarthSection.append( $('<article>').append($('<h1>').text(elem)));
   })
   // inside each `article` tag include an `h1` with the name of the land
   // append `middle-earth` to your document `body`
   $(body).append($middleEarthSection);

};
makeMiddleEarth();

//PART 2
var makeHobbits = function () {
  var $theShire = $('article').eq(0);
  console.log($theShire);
  var $listOfHobbits = ( $('<ul>'));
  hobbits.forEach(function(elem){
  // var $listOfHobbits = ( $('<ul>'));
  $listOfHobbits.append( $('<li class="hobbit">').text(elem));
  $theShire.append($listOfHobbits);
})
   // display an `unordered list` of hobbits in the shire
      // (which is the second article tag on the page)
   // give each hobbit a class of `hobbit`
};
makeHobbits();

//PART 3
var keepItSecretKeepItSafe = function () {
   // create a div with an id of `'the-ring'`
  var theRing = $('<div id="the-ring" class="magic-imbued-jewelry">');
   // give the div a class of `'magic-imbued-jewelry'`
   // add the ring as a child of `Frodo`
  var $frodo = $('li').eq(0).append(theRing);
};
keepItSecretKeepItSafe();

//PART 4
var makeBuddies = function () {
  var $aside = $('<aside>');
  var $rivendell = $('article').eq(1);
  var $listOfBuddies = ( $('<ul>'));
  buddies.forEach(function(elem) {
    $listOfBuddies.append( $('<li>').text(elem));
    // $aside.append($listOfBuddies);
    $rivendell.append($aside).append($listOfBuddies);
  })
   // create an `aside` tag
   // attach an `unordered list` of the `'buddies'` in the aside
   // insert your aside as a child element of `rivendell`
};
makeBuddies();

//PART 5
var beautifulStranger = function () {
   // change the `'Strider'` text to `'Aragorn'`
  var $rivendell = $('article').eq(1);
  console.log($rivendell);
  $rivendell.find('li').eq(3).text('Aragorn');
};
beautifulStranger();

//PART 6
var leaveTheShire = function () {
   // assemble the `hobbits` and move them to `rivendell`
   var $listOfHobbits = $('.hobbit')
   var $rivendell = $('article').eq(1);
   var $rivHobbits = ( $('<ul>')).append($listOfHobbits);
   $rivendell.append($rivHobbits)
     }
leaveTheShire();

//PART 7  THINK THIS ISN'T TOTALLY RIGHT
var forgeTheFellowShip = function () {
   // create a new div called `'the-fellowship'` within `rivendell`
   var $rivendell = $('article').eq(1);
   var $theFellowship = $rivendell.append(($('<div>')).text('the-fellowship'));
   var $listOfHobbits = $('.hobbit');
   var $listOfBuddies = $rivendell.find('li');
   for (var i = 0; i < $listOfHobbits.length; i++){
    //  $theFellowship.append('li').text();
    $listOfHobbits.detach().appendTo( $theFellowship);
    // debugger
    alert($listOfHobbits.eq(i).text() + ' has joined the party')}//alert incorrect
   for (var i = 0; i < $listOfBuddies.length; i++){
      // $theFellowship.append('li').text();
      $listOfBuddies.detach().appendTo( $theFellowship);
      alert($listOfBuddies.eq(i).text() + ' has joined the party')};
   };
   // add each `hobbit` and `buddy` one at a time to `'the-fellowship'`
   // after each character is added make an alert that they // have joined your party
forgeTheFellowShip();

//PART 8 GET 126 AND 127 DOWN TO ONE LINE
var theBalrog = function () {
   // change the `'Gandalf'` text to `'Gandalf the White'`
   var $rivendell = $('article').eq(1);
   $rivendell.find('li').eq(0).text('Gandalf the White');
   var $gandalf = $rivendell.find('li').eq(0);
   $gandalf.css('background-color', 'white');
   $gandalf.css('border', '2px solid gray');
   // apply the following style to the element, make the // background 'white', add a grey border
};
theBalrog();

//PART 9
var hornOfGondor = function () {
  alert('the horn of gondor has been blown');
  alert('Boromir\'s been killed by the uruk-hai!')
   // pop up an alert that the horn of gondor has been blown
   // Boromir's been killed by the Uruk-hai!
   // Remove `Boromir` from the Fellowship
   var $rivendell = $('article').eq(1);
   var $theFellowship = $rivendell.find('li').eq(4).remove();
};
hornOfGondor();

//PART 10
var itsDangerousToGoAlone = function (){
   // take `Frodo` and `Sam` out of the fellowship and move // them to `Mordor`
   var $mordor = $('article').eq(2);
   var $rivendell = $('article').eq(1);
   var $frodo = $rivendell.find('li').eq(4);
   var $sam = $rivendell.find('li').eq(5);
   $sam.detach().appendTo( $mordor);
   $frodo.detach().appendTo( $mordor);
   // add a div with an id of `'mount-doom'` to `Mordor`
   $mordor.append( $('<div id="mount-doom">'));
}; itsDangerousToGoAlone();

//PART 11
var weWantsIt = function () {
  // Create a div with an id of `'gollum'` and add it to Mordor
  var $mordor = $('article').eq(2);
  var $gollum = $('<div id="gollum">');
  $mordor.append( $gollum);
  // Remove `the ring` from `Frodo` and give it to `Gollum`
  var $theRing = $mordor.find('#the-ring');
  $theRing.detach().appendTo( $gollum);
  // Move Gollum into Mount Doom
  var $mountDoom = $('#mount-doom');
  $mountDoom.append($gollum);
}; weWantsIt();

//PART 12
var thereAndBackAgain = function () {
   // remove `Gollum` and `the Ring` from the document
   var $gollum = $('#gollum');
   var $theRing = $('#the-ring');
   $gollum.remove();
   $theRing.remove();
   // Move all the `hobbits` back to `the shire`
}; thereAndBackAgain();
