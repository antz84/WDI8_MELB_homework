var inputOrigin = document.getElementsByTagName('input')[0];
var inputDestination = document.getElementsByTagName('input')[1];
var resultDisplay = document.getElementById('routeButton');
var result = document.getElementById('result');

// var origin = inputOrigin.value;

function findRoute(a, b) {

//   for (var line in lines) {
//     console.log(line);
//     console.log(lines[line]);
//   }
//   for (var i = 0; i < trainLines.length; i++)
//     if (trainLines[i].indexOf(origin) != -1) {
//       var originIndex = trainLines[i].indexOf(origin);
//       var destinationIndex = trainLines[i].indexOf(destination);
//       var intersection = trainLines[i].indexOf("Richmond");
//       var originLine = trainLines[i];
//       var destinationLine = trainLines[i];
//     }

  // Find Active trainlines

  if (alamein.indexOf(inputOrigin.value) != -1) {
    var originIndex = alamein.indexOf(inputOrigin.value);
    var intersectionO = alamein.indexOf("Richmond");
    var originLine = alamein;
  }
  if (glenWaverly.indexOf(inputOrigin.value) != -1) {
    var originIndex = glenWaverly.indexOf(inputOrigin.value);
    var intersectionO = glenWaverly.indexOf("Richmond");
    var originLine = glenWaverly;
  }
  if (sandringham.indexOf(inputOrigin.value) != -1) {
    var originIndex = sandringham.indexOf(inputOrigin.value);
    var intersectionO = sandringham.indexOf("Richmond");
    var originLine = sandringham;
  }

  /////////

  if (alamein.indexOf(inputDestination.value) != -1) {
    var destinationIndex = alamein.indexOf(inputDestination.value);
    var intersectionD = alamein.indexOf("Richmond");
    var destinationLine = alamein;
  }
  if (glenWaverly.indexOf(inputDestination.value) != -1) {
    var destinationIndex = glenWaverly.indexOf(inputDestination.value);
    var intersectionD = glenWaverly.indexOf("Richmond");
    var destinationLine = glenWaverly;
  }
  if (sandringham.indexOf(inputDestination.value) != -1) {
    var destinationIndex = sandringham.indexOf(inputDestination.value);
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

  //Output to HTML

  //Journey Begin
  document.getElementById("originAnnounce").innerHTML = finalJourney[0];

  //Journey Stops

  for (var k = 1; k < (finalJourney.length - 1); k++) {
    var newLi = document.createElement('li');
    var textNode = document.createTextNode(finalJourney[k]);
    newLi.appendChild(textNode);
    document.getElementById("stops").appendChild(newLi);
  }

  //Journey End
  var lastStop = finalJourney.length - 1
  document.getElementById("destinationAnnounce").innerHTML = finalJourney[Number(lastStop)];

  //Journey Stops (Numerical)
  document.getElementById("stopsNumerical").innerHTML = finalJourney.length;

  //Stops (Numerical)
  if (originLine === destinationLine) {
    document.getElementById("stopsNumerical").innerHTML = finalJourney.length;
  } else {
    document.getElementById("stopsNumerical").innerHTML = finalJourney.length;
  }

  //Box Styling

  var journeyDisplay = document.getElementsByClassName('journeyDisplay')[0];
  journeyDisplay.style.display = 'block';
}



routeButton.addEventListener('click', function () {
  findRoute()
});
