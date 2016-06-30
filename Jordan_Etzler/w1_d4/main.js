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





//Arrays

var alamein = ['Flinders Street', 'Richmond', 'East Richmond', 'Burnley', 'Hawthorn', 'Glenferrie']
var glenWaverly = ['Southern Cross', 'Richmond', 'South Yarra', 'Prahan', 'Windor']
var sandringham = ['Flagstaff', 'Melbourne Central', 'Parliament', 'Richmond', 'Kooyong', 'Tooronga']

//ask user origin and destination

var origin = 'Flinders Street'
var destination = 'Tooronga'

//find index of origin and destination

var originIndex = alamein.indexOf(origin);
var originIndex2 = glenWaverly.indexOf(origin);
var originIndex3 = sandringham.indexOf(origin);
var destinationIndex = alamein.indexOf(destination);
var destinationIndex2 = glenWaverly.indexOf(destination);
var destinationIndex3 = sandringham.indexOf(destination);
//
// //Origin Track
//
// if (destinationIndex != -1) {
//     var destinationX = alamein.length
//     var trip2Destination = destinationIndex2
//     var trip2Origin = alamein.indexOf('Richmond')
//     var trainLine = glenWaverly;
//     var journeyEnd = alamein.slice(trip2Origin, (trip2Destination + 1));
//   }
//   else if (destinationIndex2 != -1) {
//     var destinationX = glenWaverly.length
//     var trip2Destination = destinationIndex2
//     var trip2Origin = glenWaverly.indexOf('Richmond')
//     var trainLine = glenWaverly;
//     var journeyEnd = glenWaverly.slice(trip2Origin, (trip2Destination + 1));
//   }
//   else {
//     var destinationX = sandringham.length
//     var trip2Destination = destinationIndex3
//     var trip2Origin = sandringham.indexOf('Richmond')
//     var journeyEnd = sandringham.slice(trip2Origin, (trip2Destination + 1));
// }

//var journeyStart = alamein.slice(originIndex, (trip1Origin)); //need to define trip 1 origin



//Detination Track

if (destinationIndex != -1) {
    var destinationX = alamein.length
    var trip2Destination = destinationIndex2
    var trip2Origin = alamein.indexOf('Richmond')
    var trainLine = glenWaverly;
    var journeyEnd = alamein.slice(trip2Origin, (trip2Destination + 1));
  }
  else if (destinationIndex2 != -1) {
    var destinationX = glenWaverly.length
    var trip2Destination = destinationIndex2
    var trip2Origin = glenWaverly.indexOf('Richmond')
    var trainLine = glenWaverly;
    var journeyEnd = glenWaverly.slice(trip2Origin, (trip2Destination + 1));
  }
  else {
    var destinationX = sandringham.length
    var trip2Destination = destinationIndex3
    var trip2Origin = sandringham.indexOf('Richmond')
    var journeyEnd = sandringham.slice(trip2Origin, (trip2Destination + 1));
}

//Journey Array

//1 Line

//var journeyStart = alamein.slice(originIndex, (trip1Origin)); //need to define trip 1 origin
//var journeyEnd = alamein.slice(trip2Origin, destinationIndex);

//2 Lines (Positive)

//var JourneyStart = alamein.slice(originIndex, trip2Origin);
//var JourneyEnd = sandringham.slice(trip2Origin, (trip2Destination + 1));

//2 Lines (Negative)


// Join Arrays

TripFinal = journeyStart.concat(journeyEnd);

//Trip length

var tripLength = TripFinal.length



//Output

console.log(TripFinal)
console.log(TripFinal.length);







//cr
// var difference = function (a, b) { return Math.abs(a - b) }
