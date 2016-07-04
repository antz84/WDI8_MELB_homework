var alamein = ['Flinders Street', 'Richmond', 'East Richmond', 'Burnley', 'Hawthorn', 'Glenferrie']

// var glen_waverly = ['Flagstaff', 'Melbourne Central', 'Parliament', 'Richmond', 'Kooyong', 'Tooronga']
// var Sandringham = ['Southern Cross', 'Richmond', 'South Yarra', 'Prahan', 'Windsor']

//   var enter = alamein.indexOf('Flinders Street');
//   var exit = alamein.indexOf['Hawthorn'];
//   var myStops = (exit.length - enter.length);

// var stops = alamein.length
// console.log(alamein.length)

var origin = 'Richmond';
var destination = 'Hawthorn';

var a = alamein.indexOf(origin);
var b = alamein.indexOf(destination);

var trip = alamein.slice(a, (b + 1));
var length = trip.length;

console.log(origin + ' ------> ' + destination + ' with ' + length + ' stops');
