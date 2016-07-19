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



// PART 1
var makeMiddleEarth = function () {
  var $newSection = $('<section id= "middle-earth">');
   lands.forEach(function (e) {
     var $land = $('<article>');
     $land.append($('<h1>' + e + '</h1>'));
     $newSection.append($land);
   })
   $('body').append($newSection);
   // create a section tag with an id of `middle-earth`
// add each land as an `article` tag
// inside each `article` tag include an `h1` with the name of the land
// append `middle-earth` to your document `body`
};
makeMiddleEarth(lands);



// PART 2
var makeHobbits = function () {
  var $newUl = $('<ul>');

   hobbits.forEach(function(h){
     var $hobbit = $('<li>').html(h).addClass("hobbit");
     $newUl.append($hobbit);
   })
  $('article').first().append($newUl);
  // display an `unordered list` of hobbits in the shire
     // (which is the second article tag on the page)
  // give each hobbit a class of `hobbit`
};
makeHobbits(hobbits);



// PART 3
var keepItSecretKeepItSafe = function () {
  var $newDiv = $('<div id="the-ring">').addClass("magic-imbued-jewelry");
  var $frodo = $('.hobbit').first();
      $frodo.append($newDiv)
  // create a div with an id of `'the-ring'`
   // give the div a class of `'magic-imbued-jewelry'`
   // add the ring as a child of `Frodo`
};
keepItSecretKeepItSafe();



// PART 4
var makeBuddies = function () {
  var $newAside = $('<aside>');
  var $newUl = $('<ul>').addClass('buddies');
  $newAside.append($newUl)
    buddies.forEach(function(b){
      var $buddy = $('<li>').html(b);
      $newUl.append($buddy);
    });
  $('article').eq(1).append($newAside);
   // create an `aside` tag
   // attach an `unordered list` of the `'buddies'` in the aside
   // insert your aside as a child element of `rivendell`
};
makeBuddies(buddies);



// PART 5
var beautifulStranger = function () {
   var $strider = $('.buddies li:eq(3)');
   $strider.text('Aragorn');
   // change the `'Strider'` text to `'Aragorn'`
};
beautifulStranger();



// PART 6
var leaveTheShire = function () {
  // $('.hobbit').detach();
  $('article').eq(1).append($('.hobbit'))
   // assemble the `hobbits` and move them to `rivendell`
};
leaveTheShire();



// PART 7     *** ??? ***
var forgeTheFellowShip = function () {
  var $newUl = $('<ul>');
  var $newDiv = $('<div id="the-fellowship">');
  $newDiv.append($newUl);
  //?? $('.hobbit').detach();
  $('article').eq(1).append($newDiv);
  $('.hobbit').each(function(h){
      $(this).appendTo($newUl);  //  both ok? $(this).appendTo($newDiv);
  });
  var $newLi= $('.buddies li')
  $($newLi).each(function(b){
    $(this).appendTo($newUl);
  });
  //alert("They have joined your party!");
   // create a new div called `'the-fellowship'` within `rivendell`
   // add each `hobbit` and `buddy` one at a time to `'the-fellowship'`
   // after each character is added make an alert that they // have joined your party
};
forgeTheFellowShip();



// PART 8
var theBalrog = function () {
  var $gandal = $('#the-fellowship li:eq(4)');
  $gandal.text('Gandalf the White');
  $gandal.css({"background-color":"white","border":"1px solid gray"});
   // change the `'Gandalf'` text to `'Gandalf the White'`
   // apply the following style to the element, make the // background 'white', add a grey border
};
theBalrog();



// PART 9
var hornOfGondor = function () {


  alert("The horn of Gondor has been blown! Boromir's been killed by the Uruk-hai!");
  $('#the-fellowship li').last().remove();
   // pop up an alert that the horn of gondor has been blown
   // Boromir's been killed by the Uruk-hai!
   // Remove `Boromir` from the Fellowship  >? the-fellowship
};
hornOfGondor();



// PART 10
var itsDangerousToGoAlone = function (){
  $('#the-fellowship li:eq(0)').appendTo($('article').eq(2));
  $('#the-fellowship li:eq(1)').appendTo($('article').eq(2));
  //$('div:contains("Samwise")').appendTo($('article').eq(2));
  console.log($('div:contains("Samwise")'));
  var $newDiv = $('<div id= "mount-doom">');
  $newDiv.appendTo($('article').eq(2));
   // take `Frodo` and `Sam` out of the fellowship and move // them to `Mordor`
   // add a div with an id of `'mount-doom'` to `Mordor`
};
itsDangerousToGoAlone();



// PART 11
var weWantsIt = function () {
  var $newDiv = $('<div id="gollum">');
  $newDiv.appendTo($('article').eq(2));
  $('#the-ring').appendTo($('#gollum'));
  $('#gollum').appendTo($('#mount-doom'));
  // Create a div with an id of `'gollum'` and add it to Mordor
  // Remove `the ring` from `Frodo` and give it to `Gollum`
  // Move Gollum into Mount Doom
};
weWantsIt();


// PART 12
var thereAndBackAgain = function () {
  $('#gollum').remove();
  $('#the-ring').remove();
  $('.hobbit').appendTo($('article').eq(0));
   // remove `Gollum` and `the Ring` from the document
   // Move all the `hobbits` back to `the shire`
};
thereAndBackAgain();
