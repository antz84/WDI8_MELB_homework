// console.log('WHAT THE FUCK!')
//
// //Arrays
//
// var alamein = ['Fliners Street', 'Richmond', 'East Richmond', 'Burnley', 'Hawthorn', 'Glenferrie']
//
// var glenWaverly = ['Flagstaff', 'Melbourne Central', 'Parliament', 'Richmond', 'Kooyong', 'Tooronga']
//
// var sandringham = ['Southern Cross', 'Richmond', 'South Yarra', 'Prahan', 'Windor']
//
// //all trains intersect @ Richmond
//
//
//
// //find index of origin
//
// function originIndex() {
//   var alameinOriginIndex = alamein.indexOf(origin);
//   var glenWaverlyOriginIndex = glenWaverly.indexOf(origin);
//   var sandringhamOriginIndex = sandringham.indexOf(origin);
// }
//
// //find index of destination
//
// function destinationIndex () {
//   var alameinDestinationIndex = alamein.indexOf(destination);
//   var glenWaverlyDestinationIndex = glenWaverly.indexOf(destination);
//   var sandringhamDestinationIndex = sandringham.indexOf(destination);
// }
//
// //-1 Signifies not on that line
//
//
// //Origin and Destination
//
// function originDestination () {
//   var origin = 'Richmond'
//   var destination = 'Tooronga'
//   // var origin = prompt('What is your origin?')
//   // var destination = prompt('What is your destination')
// }
//
// //Need to add a verification if user enters invalid address
//
// function verification () {
//   if (originIndex < 0) {
//     prompt('Sorry that station is not in this city. Please pick another station')
//     again = false
// }}
//













// //Practice 1 station//
//
// var practice = ['Fliners Street', 'Richmond', 'East Richmond', 'Burnley', 'Hawthorn', 'Glenferrie']
//
// //ask user origin and destination
//   var origin = 'Richmond'
//   var destination = 'Hawthorn'
// //find index of origin and destination
//   var originIndex = practice.indexOf(origin);
//   var destinationIndex = practice.indexOf(destination);
// //verify it above 0
//   //later :P
// //slice Array
//   var practiceTrip = practice.slice(originIndex, (destinationIndex + 1));
// // find difference between stations
//   var tripLength = practiceTrip.length
// //cr
// // var difference = function (a, b) { return Math.abs(a - b) }
//





// Arrays where I have stores all 'line' & 'station' information

var alamein = ['Flinders Street', 'Richmond', 'East Richmond', 'Burnley', 'Hawthorn', 'Glenferrie']
var glenWaverly = ['Southern Cross', 'Richmond', 'South Yarra', 'Prahan', 'Windor']
var sandringham = ['Flagstaff', 'Melbourne Central', 'Parliament', 'Richmond', 'Kooyong', 'Tooronga']

// User Entry for Origin & Destination

var origin = 'Southern Cross'
var destination = 'Flagstaff'

// Calculate index postion of string(station) that matches the user entry

var originIndex = alamein.indexOf(origin);
var originIndex2 = glenWaverly.indexOf(origin);
var originIndex3 = sandringham.indexOf(origin);
var destinationIndex = alamein.indexOf(destination);
var destinationIndex2 = glenWaverly.indexOf(destination);
var destinationIndex3 = sandringham.indexOf(destination);

// If statement to decide which track User will begin on.

if (originIndex != -1) {
  var OriginX = alamein.length
  var tripOrigin = originIndex
  var tripSlice = alamein.indexOf('Richmond')
  var journeyStart = alamein.slice( tripOrigin, (tripSlice + 1) );
  }
  else if (originIndex2 != -1) {
    var OriginX = glenWaverly.length
    var tripOrigin = originIndex2
    var tripSlice = glenWaverly.indexOf('Richmond')
    var journeyStart = glenWaverly.slice(tripOrigin, (tripSlice + 1) );
  }
  else {
    var OriginX = sandringham.length
    var tripOrigin = originIndex3
    var tripSlice = sandringham.indexOf('Richmond')
    var journeyStart = sandringham.slice(tripOrigin, (tripSlice + 1) );
}

// If statement to decide which track User will finish on.

if (destinationIndex != -1) {
    var destinationX = alamein.length
    var trip2Destination = destinationIndex
    var trip2Slice = alamein.indexOf('Richmond')
    var trainLine = glenWaverly;
    var journeyEnd = alamein.slice((trip2Slice + 1), (trip2Destination + 1));
  }
  else if (destinationIndex2 != -1) {
    var destinationX = glenWaverly.length
    var trip2Destination = destinationIndex2
    var trip2Slice = glenWaverly.indexOf('Richmond')
    var trainLine = glenWaverly;
    var journeyEnd = glenWaverly.slice((trip2Slice + 1), (trip2Destination + 1));
  }
  else {
    var destinationX = sandringham.length
    var trip2Destination = destinationIndex3
    var trip2Slice = sandringham.indexOf('Richmond')
    var journeyEnd = sandringham.slice((trip2Slice + 1), (trip2Destination + 1));
}

// Join Arrays to create a trip for the user

TripFinal = journeyStart.concat(journeyEnd);

// Array length calculator to provide user with amount of trips

var tripLength = TripFinal.length

// Output

console.log(TripFinal)
console.log(TripFinal.length);
