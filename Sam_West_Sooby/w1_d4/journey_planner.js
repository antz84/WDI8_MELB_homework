// var ptv = {alamein, glen_waverly, sandringham};

var alamein = ['Flinders Street', 'Richmond', 'East Richmond', 'Burnley', 'Hawthorn', 'Glenferrie']
var glen_waverly = ['Flagstaff', 'Melbourne Central', 'Parliament', 'Richmond', 'Kooyong', 'Tooronga'];
var sandringham = ['Southern Cross', 'Richmond', 'South Yarra', 'Prahan', 'Windsor'];


var origin = document.getElementsByTagName('input')[0];
var destination = document.getElementsByTagName('input')[1];

var btn = document.getElementsByTagName('button')[0];
var resultSpan = document.getElementsByTagName('span')[0];

// function journeyPlanner(origin, destination) {
//   var a = alamein.indexOf(origin);
//   var b = alamein.indexOf(destination);
//   var trip = alamein.slice(a, (b + 1));
//   var length = trip.length;
//   return (origin + ' -------> ' + destination + ' with ' + length + ' stops');
// }

function journeyPlanner1(origin, destination) {
  var a = glen_waverly.indexOf(origin);
  var b = glen_waverly.indexOf(destination);
  var trip = glen_waverly.slice(a, (b + 1));
  var length = trip.length;
  return (origin + ' -------> ' + destination + ' with ' + length + ' stops');
}

function journeyPlanner2(origin, destination) {
  var a = sandringham.indexOf(origin);
  var b = sandringham.indexOf(destination);
  var trip = sandringham.slice(a, (b + 1));
  var length = trip.length;
  return (origin + ' -------> ' + destination + ' with ' + length + ' stops');
}

btn.addEventListener('click', function(origin, destination) {
  var a = alamein.indexOf(origin);
  var b = alamein.indexOf(destination);
  var trip = alamein.slice(a, (b + 1));
  var length = trip.length;
  resultSpan.innerText = length + ' stops';
});

// var origin = 'Richmond';
// var destination = 'Hawthorn';

// var a = alamein.indexOf(origin);
// var b = alamein.indexOf(destination);

// var trip = alamein.slice(a, (b + 1));
// var length = trip.length;

// console.log(origin + ' ------> ' + destination + ' with ' + length + ' stops');
