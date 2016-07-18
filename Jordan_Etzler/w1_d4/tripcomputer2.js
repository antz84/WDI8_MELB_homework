console.log('tripcomputer2');

// 4 Hardcoded Options

// Same Line Forward
// var origin = 'Flinders Street';
// var destination = 'Hawthorn';

// // Same Line Backward
// var origin = 'Flinders Street';
// var destination = 'Prahan';
//
// // Different Line Forward
// var origin = 'Hawthorn';
// var destination = 'Flagstaff';
//
// // Different Line Backward
// var origin = 'Glenferrie';
// var destination = 'Melbourne Central';


  // for (var i = 0; i < trainLines.length; i++)
  //   if (trainLines[i].indexOf(origin) != -1) {
  //     var originIndex = trainLines[i].indexOf(origin);
  //     var destinationIndex = trainLines[i].indexOf(destination);
  //     var intersection = trainLines[i].indexOf("Richmond");
  //     var originLine = trainLines[i];
  //     var destinationLine = trainLines[i];
  //   }


// Find Active trainlines

if (alamein.indexOf(origin) != -1) {
  var originIndex = alamein.indexOf(origin);
  var intersectionO = alamein.indexOf("Richmond");
  var originLine = alamein;
}
if (glenWaverly.indexOf(origin) != -1) {
  var originIndex = glenWaverly.indexOf(origin);
  var intersectionO = glenWaverly.indexOf("Richmond");
  var originLine = glenWaverly;
}
if (sandringham.indexOf(origin) != -1) {
  var originIndex = sandringham.indexOf(origin);
  var intersectionO = sandringham.indexOf("Richmond");
  var originLine = sandringham;
}

/////////

if (alamein.indexOf(destination) != -1) {
  var destinationIndex = alamein.indexOf(destination);
  var intersectionD = alamein.indexOf("Richmond");
  var destinationLine = alamein;
}
if (glenWaverly.indexOf(destination) != -1) {
  var destinationIndex = glenWaverly.indexOf(destination);
  var intersectionD = glenWaverly.indexOf("Richmond");
  var destinationLine = glenWaverly;
}
if (sandringham.indexOf(destination) != -1) {
  var destinationIndex = sandringham.indexOf(destination);
  var intersectionD = sandringham.indexOf("Richmond");
  var destinationLine = sandringham;
}


//Slice Origin and/or Destination arrays to build Journey



if (originLine === destinationLine) {

  if (originIndex < destinationIndex) {
    var singleLine = originLine.slice( originIndex, (destinationIndex + 1) );
  } else {
    originIndex = [destinationIndex, destinationIndex = originIndex][0];
    var singleLine = originLine.slice( originIndex, (destinationIndex + 1) ).reverse();
  }

  var finalJourney = singleLine;
  var journeyDisplay = finalJourney.join('  ----->  ');


  } else {

    if (originIndex < intersectionO) {
      var journeyStart = originLine.slice( originIndex, (intersectionO + 1) );
    } else if (originIndex > intersectionO) {
      originIndex = [intersectionO, intersectionO = originIndex][0];
      var journeyStart = originLine.slice( originIndex, (intersectionO + 1) ).reverse();
    }

    if (destinationIndex < intersectionD) {
      var journeyEnd = destinationLine.slice( destinationIndex, (intersectionD + 1) ).reverse();
    } else if (destinationIndex > intersectionD) {
      destinationIndex = [intersectionD, intersectionD = destinationIndex][0];
      var journeyEnd = destinationLine.slice( (destinationIndex + 1), (intersectionD + 1) );
    }

    var finalJourney = journeyStart.concat(journeyEnd);
    var journeyDisplay = finalJourney.join('  ----->  ');

}

console.log(journeyDisplay);

if (originLine === destinationLine) {
  console.log(finalJourney.length);
} else {
  console.log(finalJourney.length - 1);
}
