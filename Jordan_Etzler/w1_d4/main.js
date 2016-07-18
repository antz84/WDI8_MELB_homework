// var originInput = document.getElementById('originInput');
// var destinationInput = document.getElementById('destinationInput');
var routeButton = document.getElementsByTagName('button')[0];


var originInput = 'Richmond'
var destinationInput = 'Burnley'


function findRoute() {

  // for (var i = 0; i < trainLines.length; i++)
  //   if (trainLines[i].indexOf(origin) != -1) {
  //     var originIndex = trainLines[i].indexOf(origin);
  //     var destinationIndex = trainLines[i].indexOf(destination);
  //     var intersection = trainLines[i].indexOf("Richmond");
  //     var originLine = trainLines[i];
  //     var destinationLine = trainLines[i];
  //   }

  // Find Active trainlines

  if (alamein.indexOf(originInput.value) != -1) {
    var originIndex = alamein.indexOf(originInput.value);
    var intersectionO = alamein.indexOf("Richmond");
    var originLine = alamein;
  }
  if (glenWaverly.indexOf(originInput.value) != -1) {
    var originIndex = glenWaverly.indexOf(originInput.value);
    var intersectionO = glenWaverly.indexOf("Richmond");
    var originLine = glenWaverly;
  }
  if (sandringham.indexOf(originInput.value) != -1) {
    var originIndex = sandringham.indexOf(originInput.value);
    var intersectionO = sandringham.indexOf("Richmond");
    var originLine = sandringham;
  }

  /////////

  if (alamein.indexOf(destinationInput.value) != -1) {
    var destinationIndex = alamein.indexOf(destinationInput.value);
    var intersectionD = alamein.indexOf("Richmond");
    var destinationLine = alamein;
  }
  if (glenWaverly.indexOf(destinationInput.value) != -1) {
    var destinationIndex = glenWaverly.indexOf(destinationInput.value);
    var intersectionD = glenWaverly.indexOf("Richmond");
    var destinationLine = glenWaverly;
  }
  if (sandringham.indexOf(destinationInput.value) != -1) {
    var destinationIndex = sandringham.indexOf(destinationInput.value);
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

  //this needs to reset html elements
  console.log(journeyDisplay);

  if (originLine === destinationLine) {
    console.log(finalJourney.length);
  } else {
    console.log(finalJourney.length - 1);
  }
}


routeButton.addEventListener('click', function() {
  findRoute()
});
