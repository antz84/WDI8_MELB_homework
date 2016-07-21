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

///////////////////////

//Part 1
var makeMiddleEarth = function () {
   var me = $('<section>').attr('id', 'middle-earth');
   lands.forEach(function (e) {
     var land = $('<article>');
     land.append($('<h1>' + e + '</h1>'))
     me.append(land)
   })
   $('body').append(me)
};

makeMiddleEarth();

//Part 2
var makeHobbits = function () {
    var list = $('<ul>');
    $('article:first').append(list);
    for (var i = 0; i < hobbits.length; i++) {
      var hobbit = $('<li>').html(hobbits[i]).addClass('hobbit');
      $('ul').append(hobbit);
    }
};

makeHobbits();

//Part 3
var keepItSecretKeepItSafe = function () {
   // create a div with an id of `'the-ring'`
  var ring = $('<div>').attr('id', 'the-ring');
  ring.addClass('magic-imbued-jewelry');
  var frodo = $('.hobbit:first')
  ring.appendTo(frodo);
};

keepItSecretKeepItSafe();

//Part4
var makeBuddies = function () {
  var buddiesAside = $('<aside>');
  var buddiesListUl = $('<ul>');
  for (var k = 0; k < buddies.length; k++) {
    var buddiesListLi = $('<li>').html(buddies[k]);
    buddiesListUl.append(buddiesListLi);
  }
  buddiesListUl.appendTo(buddiesAside);
  var rivendellList = $('article:nth-child(2)')
  buddiesAside.appendTo(rivendellList);
};

makeBuddies();

//Part 5
var beautifulStranger = function () {
  var stranger = $('aside > ul > li:nth-child(4)');
  stranger.text('Aragorn')
};

beautifulStranger();

//Part 6
var leaveTheShire = function () {
  var shireHobbits = $('article:nth-child(1) > ul');
  var rivendellHobbits = $('article:nth-child(2) > aside');
  shireHobbits.appendTo(rivendellHobbits);
};

leaveTheShire();

// Part 7
var forgeTheFellowShip = function () {
  var fellowship = $('div').addClass('the-fellowship');


// create a new div called `'the-fellowship'` within `rivendell`
// add each `hobbit` and `buddy` one at a time to `'the-fellowship'`
// after each character is added make an alert that they // have joined your party




loop
  hobbit
  buddy






































//hah
