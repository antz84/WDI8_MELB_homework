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

   // create a section tag with an id of `middle-earth`
   // add each land as an `article` tag
   // inside each `article` tag include an `h1` with the name of the land
   // append `middle-earth` to your document `body`

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

// var indexNum = 0;

var makeHobbits = function () {
   // display an `unordered list` of hobbits in the shire
    // (which is the second article tag on the page)
   // give each hobbit a class of `hobbit`

  $('h1').first().append("<ul>");
  $("ul").append("<li>" + hobbits[0] + "</li>");
  $("ul").append("<li>" + hobbits[1] + "</li>");
  $("ul").append("<li>" + hobbits[2] + "</li>");
  $("ul").append("<li>" + hobbits[3] + "</li>");
  $("li").addClass("hobbit");
}


    // for (i = 0; i < hobbits.length; i++) {
    //   $("ul").append("<li>" + hobbits[i] + "</li>");


//     }
//     $.each(hobbits, function(idx, value){
//       $("#the-shire ul").append("<li>" + value + "</li>")
//     });

//     $("#the-shire ul").addClass("hobbit");
// };

makeHobbits();


function keepItSecretKeepItSafe() {
   // create a div with an id of `'the-ring'`
   // give the div a class of `'magic-imbued-jewelry'`
   // add the ring as a child of `Frodo`
   var tor = $('<div>').attr('id', 'the-ring').addClass('magic-imbued-jewelry');
   // $("#the-ring").addClass("magiv-imbued-jewelry");
   var frodo = $('ul li').first();
   frodo.append(tor);
   // $(.hobbit[0])

};


keepItSecretKeepItSafe();



var makeBuddies = function () {
   // create an `aside` tag
   // attach an `unordered list` of the `'buddies'` in the aside
   // insert your aside as a child element of `rivendell`
   $('h1').second().append("<aside>");

};




























