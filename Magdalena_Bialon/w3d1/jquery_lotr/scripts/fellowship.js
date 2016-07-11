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
  var $newSection = $('<section id= "middle-earth">');    // create a section tag with an id of `middle-earth`
   lands.forEach(function (e) {                          // add each land as an `article` tag
     var $land = $('<article>');
     $land.append($('<h1>' + e + '</h1>'));                // inside each `article` tag include an `h1` with the name of the land
     $newSection.append($land);                            // append `middle-earth` to your document `body`
   })
   $('body').append($newSection)
};
makeMiddleEarth(lands);



// PART 2
var makeHobbits = function () {
  var $newUl = $('<ul>');                                  // display an `unordered list` of hobbits in the shire

   hobbits.forEach(function(h){                           // (which is the first article tag on the page)
     var $hobbit = $('<li>').html(h).addClass("hobbit");       // give each hobbit a class of `hobbit`
     $newUl.append($hobbit);
   })
  $('article').first().append($newUl);
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
  $('article').second().append($newAside);
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
  $('.hobbit').detach()
  $('article').second().append($('.hobbit'))
   // assemble the `hobbits` and move them to `rivendell`
};
leaveTheShire();



// PART 7     *** ??? ***
var forgeTheFellowShip = function () {
  var $newDiv = $('<div id="the-fellowship">');
  //?? $('.hobbit').detach();
  $('article').second().append()$newDiv;
  $('.hobbit').each(function(h){
    $('.buddies').each(function(b){
      $(this).appendTo($("#the-fellowship"));  //  both ok? $(this).appendTo($newDiv);
    })
    // ?? $(this).appendTo($("#the-fellowship"));
  })
   // create a new div called `'the-fellowship'` within `rivendell`
   // add each `hobbit` and `buddy` one at a time to `'the-fellowship'`
   // after each character is added make an alert that they // have joined your party
};
forgeTheFellowShip.alert("They have joined your party!");



// PART 8
var theBalrog = function () {
  var $gandal = $('.buddies li:eq(0)');
  $gandal.text('Gandalf the White');
  $gandal.css({"background-color":"white","border":"1px solid gray"});
   // change the `'Gandalf'` text to `'Gandalf the White'`
   // apply the following style to the element, make the // background 'white', add a grey border
};
theBalrog();


// PART 9
var hornOfGondor = function () {


  alert("The horn of Gondor has been blown! Boromir's been killed by the Uruk-hai!");
  $('.buddies li').last().remove();
   // pop up an alert that the horn of gondor has been blown
   // Boromir's been killed by the Uruk-hai!
   // Remove `Boromir` from the Fellowship  >? the-fellowship
};
hornOfGondor();



// PART 10
var itsDangerousToGoAlone = function (){
   // take `Frodo` and `Sam` out of the fellowship and move // them to `Mordor`
   // add a div with an id of `'mount-doom'` to `Mordor`
};



// PART 11
var weWantsIt = function () {
  // Create a div with an id of `'gollum'` and add it to Mordor
  // Remove `the ring` from `Frodo` and give it to `Gollum`
  // Move Gollum into Mount Doom
};



// PART 12
var thereAndBackAgain = function () {
   // remove `Gollum` and `the Ring` from the document
   // Move all the `hobbits` back to `the shire`
};
