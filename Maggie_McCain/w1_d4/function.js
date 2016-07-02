//make an object with each train as a property and value the array of stops

//from Richmond to Burnley on train alamein
var origin = 'Richmond';
var destination = 'Burnley';
var alamein = ['Flinders Street', 'Richmond', 'East Richmond', 'Burnley', 'Hawthorn', 'Glenferrie'];
var glenWaverly = ['Flagstaff', 'Melbourne Central', 'Parliament', 'Richmond', 'Kooyong', 'Tooronga'];
var sandringham = ['Southern Cross', 'Richmond', 'South Yarra', 'Prahran', 'Windsor'];

var originIndex = alamein.indexOf(origin);
var destinationIndex = alamein.indexOf(destination);
var richmondIndex = alamein.indexOf('Richmond')
var allTrains = {
  alamein : ['Flinders Street', 'Richmond', 'East Richmond', 'Burnley', 'Hawthorn', 'Glenferrie'],
  glenWaverly : ['Flagstaff', 'Melbourne Central', 'Parliament', 'Richmond', 'Kooyong', 'Tooronga'],
  sandringham : ['Southern Cross', 'Richmond', 'South Yarra', 'Prahran', 'Windsor'],
}

var trip = alamein.slice(originIndex, (destinationIndex + 1));
var tripLength = trip.length
console.log('Take train '+ tripLength + ' stops: ' + trip);

//If you search index of stop not on array, then the index shows negative
//if its on the same train do this, otherwise go to Richmond then...i don't know!

// if (destinationIndex >= 0) {
// //enter code for single train trip
//
//
// } else allTrains.slice(originIndex, (richmondIndex +1));
// // else go to Richmond station
//
for (destination in allTrains) {
  var destinationId = allTrains(destination);
//can't figure out how to retreive index of array in object and the property (train name) corresponding to destination...
}
