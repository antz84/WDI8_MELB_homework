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

var makeMiddleEarth = function () {
  var $middleEarth = $('<section>').attr('id', 'middle-earth');
  for (var i=0; i<lands.length; i++) {
  $middleEarth.append('<article><h1>' + lands[i] + '</h1></article>');
  $('body').append($middleEarth);
  }
};

makeMiddleEarth();

var makeHobbits = function () {
  $('#middle-earth article').first().append('<ul>');
  for (var i=0; i<hobbits.length; i++) {
    $('#middle-earth article ul').append('<li>' + hobbits[i] + '</li>');
    $('#middle-earth article li').addClass('hobbit');
  }
};

makeHobbits();

var keepItSecretKeepItSafe = function () {
  var theRing = $('<div>').attr('id', 'the-ring');
  $('body div').addClass('magic-imbued-jewelry');
  $('.hobbit:first-child').append(theRing);
};

keepItSecretKeepItSafe();

var makeBuddies = function () {
  $('article:nth-child(2)').append('<aside><ul></ul>');
  for (var i=0; i<buddies.length; i++) {
    $('aside ul').append('<li>' + buddies[i] + '</li>');
  }
};

makeBuddies();

var beautifulStranger = function () {
  $('aside li:nth-child(4n)').replaceWith('<li>Aragorn</li>');
};

beautifulStranger();

var leaveTheShire = function () {
  $( ".hobbit" ).clone().appendTo( "aside ul" );
  $("article:first-child ul").remove();
   // assemble the `hobbits` and move them to `rivendell`
};

leaveTheShire();

var forgeTheFellowShip = function () {
  $('<div>').attr('id', 'the-fellowship').appendTo('article:nth-child(2)');
  var $list = $('article ul li');
  for (var i=0; i<$list.length; i++) {
    $('#the-fellowship').append('<li>' + $list.eq(i).text() + '</li>');
    $list.eq(i).detach();
    // alert($list.eq(i).text() + ' has joined your party'); //Commented out so it stops alerting me.
  }
   // create a new div called `'the-fellowship'` within `rivendell`
   // add each `hobbit` and `buddy` one at a time to `'the-fellowship'`
   // after each character is added make an alert that they // have joined your party
};

forgeTheFellowShip();

var theBalrog = function () {
  $("li:contains('Gandalf')").replaceWith('<li>Gandalf the White</li>');
  // .text().replaceWith('Gandalf the White');
   // change the `'Gandalf'` text to `'Gandalf the White'`
   // apply the following style to the element, make the // background 'white', add a grey border
};

theBalrog();

var hornOfGondor = function () {
  // alert('The Horn of Gondor has been blown. Boromir\'s been killed by the Uruk-hai'); // taken alert out so it's not annoying
  $("li:contains('Boromir')").remove();
   // pop up an alert that the horn of gondor has been blown
   // Boromir's been killed by the Uruk-hai!
   // Remove `Boromir` from the Fellowship
};

hornOfGondor();

var itsDangerousToGoAlone = function (){
  $('<ul>').appendTo('#middle-earth article').eq(2);
  $("li:contains('Frodo Baggins')").detach().appendTo('#middle-earth article:nth-child(3) ul');
  $("li:contains('Samwise')").detach().appendTo('#middle-earth article:nth-child(3) ul');
  $('<div>').attr('id', 'mount-doom').appendTo('#middle-earth article').eq(2);
   // take `Frodo` and `Sam` out of the fellowship and move // them to `Mordor`
   // add a div with an id of `'mount-doom'` to `Mordor`
};

itsDangerousToGoAlone();

var weWantsIt = function () {
  $('<div>').attr('id', 'gollum').appendTo('#middle-earth article:nth-child(3)');
  $("div:contains('Ring')");
  // Create a div with an id of `'gollum'` and add it to Mordor
  // Remove `the ring` from `Frodo` and give it to `Gollum`
  // Move Gollum into Mount Doom
};

weWantsIt();
