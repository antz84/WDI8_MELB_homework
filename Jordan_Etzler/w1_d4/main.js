// Arrays where I have stores all 'line' & 'station' information

var alamein = ['Flinders Street', 'Richmond', 'East Richmond', 'Burnley', 'Hawthorn', 'Glenferrie']
var glenWaverly = ['Southern Cross', 'Richmond', 'South Yarra', 'Prahan', 'Windor']
var sandringham = ['Flagstaff', 'Melbourne Central', 'Parliament', 'Richmond', 'Kooyong', 'Tooronga']

// User Entry for Origin & Destination

// var origin = prompt('Where would you like to begin your journey?');
// var destination = prompt('Where would you like to end your journey?');

var origin = 'Burnley'
var destination = 'Glenferrie'

// Calculate index postion of string(station) that matches the user entry

var originIndex = alamein.indexOf(origin);
var originIndex2 = glenWaverly.indexOf(origin);
var originIndex3 = sandringham.indexOf(origin);
var destinationIndex = alamein.indexOf(destination);
var destinationIndex2 = glenWaverly.indexOf(destination);
var destinationIndex3 = sandringham.indexOf(destination);

//function to manage stations that have an index of less than the interestion e.g. 'Richmond'
function swap() {
    trip2Destination = [trip2Slice, trip2Slice = trip2Destination][0];
}

function reverseDestination() {
  journeyEnd.reverse();
}

function reverseOrigin() {
  journeyStart.reverse();
}


// If statement to decide which track User will begin on.

if (originIndex != -1 && originIndex < alamein.indexOf('Richmond')) {
    var OriginX = alamein.length;
    var tripOrigin = originIndex;
    var tripSlice = alamein.indexOf('Richmond');
    var trainLine = 'alamein';
    var journeyStart = alamein.slice( tripOrigin, (tripSlice + 1) );
  }
  else if (originIndex2 != -1 && originIndex2 < glenWaverly.indexOf('Richmond')) {
    var OriginX = glenWaverly.length;
    var tripOrigin = originIndex2;
    var tripSlice = glenWaverly.indexOf('Richmond');
    var trainLine = 'glenWaverly';
    var journeyStart = glenWaverly.slice(tripOrigin, (tripSlice + 1) );
  }
  else if (originIndex3 != -1 && originIndex3 < sandringham.indexOf('Richmond')) {
    var OriginX = sandringham.length;
    var tripOrigin = originIndex3;
    var tripSlice = sandringham.indexOf('Richmond');
    var trainLine = 'sandringham';
    var journeyStart = sandringham.slice(tripOrigin, (tripSlice + 1) );
  }
  else if (originIndex != -1 && originIndex > alamein.indexOf('Richmond')) {
    var OriginX = alamein.length;
    var tripOrigin = originIndex;
    var tripSlice = alamein.indexOf('Richmond');
    var trainLine = 'alamein';
    swap();
    var journeyStart = alamein.slice((tripOrigin), (tripSlice + 1) );
    reverseOrigin();
  }
  else if (originIndex2 != -1 && originIndex2 > glenWaverly.indexOf('Richmond')) {
    var OriginX = glenWaverly.length;
    var tripOrigin = originIndex2;
    var tripSlice = glenWaverly.indexOf('Richmond');
    var trainLine = 'glenWaverly';
    swap();
    var journeyStart = glenWaverly.slice((tripSlice), (tripOrigin + 1) );
    reverseOrigin();
  }
  else if (originIndex3 != -1 && originIndex3 > sandringham.indexOf('Richmond')){
    var OriginX = sandringham.length;
    var tripOrigin = originIndex3;
    var tripSlice = sandringham.indexOf('Richmond');
    trainLine = 'sandringham';
    swap();
    var journeyStart = sandringham.slice((tripSlice), (tripOrigin + 1) );
    reverseOrigin();
  }

// If statement to decide which track User will finish on.

if (destinationIndex != -1 && destinationIndex > alamein.indexOf('Richmond')) {
    var destinationX = alamein.length;
    var trip2Destination = destinationIndex;
    var trip2Slice = alamein.indexOf('Richmond');
    var trainLine = 'alamein';
    var journeyEnd = alamein.slice((trip2Slice + 1), (trip2Destination + 1));
  }
  else if (destinationIndex2 != -1 && destinationIndex2 > glenWaverly.indexOf('Richmond')) {
    var destinationX = glenWaverly.length;
    var trip2Destination = destinationIndex2;
    var trip2Slice = glenWaverly.indexOf('Richmond');
    var trainLine = 'glenWaverly';
    var journeyEnd = glenWaverly.slice((trip2Slice + 1), (trip2Destination + 1));
  }
  else if (destinationIndex3 != -1 && destinationIndex3 > sandringham.indexOf('Richmond')){
    var destinationX = sandringham.length;
    var trip2Destination = destinationIndex3;
    var trip2Slice = sandringham.indexOf('Richmond');
    var trainLine = 'sandringham';
    var journeyEnd = sandringham.slice((trip2Slice + 1), (trip2Destination + 1));
  }
  else if(destinationIndex != -1 && destinationIndex < alamein.indexOf('Richmond')) {
    var destinationX = alamein.length;
    var trip2Destination = destinationIndex;
    var trip2Slice = alamein.indexOf('Richmond');
    var trainLine = 'alamein';
    swap();
    var journeyEnd = alamein.slice((trip2Slice), (trip2Destination + 1));
    reverseDestination();
  }
  else if (destinationIndex2 != -1 && destinationIndex2 < glenWaverly.indexOf('Richmond')) {
    var destinationX = glenWaverly.length;
    var trip2Destination = destinationIndex2;
    var trip2Slice = glenWaverly.indexOf('Richmond');
    var trainLine = 'glenWaverly';
    swap();
    var journeyEnd = glenWaverly.slice((trip2Slice), (trip2Destination + 1));
    reverseDestination();
  }
  else if (destinationIndex3 != -1 && destinationIndex3 < sandringham.indexOf('Richmond')){
    var destinationX = sandringham.length;
    var trip2Destination = destinationIndex3;
    var trip2Slice = sandringham.indexOf('Richmond');
    var trainLine = 'sandringham';
    swap();
    var journeyEnd = sandringham.slice((trip2Slice), (trip2Destination + 1));
    reverseDestination();
  }

// Join Arrays to create a trip for the user

tripArr = journeyStart.concat(journeyEnd);
tripFinal = tripArr.join('  ----->  ');

// Array length calculator to provide user with amount of trips

var tripLength = tripArr.length

// Output

console.log(tripFinal)
console.log(tripArr.length);
