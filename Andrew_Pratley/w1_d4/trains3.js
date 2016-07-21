console.log("PT Planner for all lines with interchange");

var alamein = ["Flinders Street", "Richmond", "East Richmond", "Burnley", "Hawthorn", "Glenferrie"];
var glenWaverley = ["Flagstaff", "Melbourne Central", "Parliament", "Richmond", "Kooyong", "Tooronga"];
var sandringham = ["Southern Cross", "Richmond", "South Yarra", "Prahran", "Windsor"];

var lines = {
  alamein: [],
  glen: [],
  sand: []
}

function findLine(lines, stationName) {
  // for in
  for (line in lines) {
    console.log(line);
    console.log(lines.line);


  }
}

findLine(lines, 'Flinders Street') // returns: lineName eg line name, index of station. 0.

findLine(lines, 'Southern Cross') // sandringam, 0.

//need a function to GET TO RICHMOND from a provided position.
//need a function to FROM RICHMOND TO DEST from a provided position.

// need to say which line you are interchanging to.
// put whole code in function - the benefit of this is that is encapsulates it so your variables are only in your function, and won't affect other people's programs.
// create smaller functions where I can reuse instead of repeating
// e.g. one function could be setStartingLine would be one argument
// change data structure to have object with three properties


var start = prompt();
var finish = prompt();

// Which lines are the starting and finishing stations on?

if (start != "Richmond") {
  var startingLine = "";
  if (alamein.indexOf(start) >= 0) {
    startingLine = alamein;
    }
    else if (glenWaverley.indexOf(start) >= 0) {
      startingLine = glenWaverley;
      }
      else {
        startingLine = sandringham;
      }
} else {
  var finishingLine = "";
  if (alamein.indexOf(finish) >= 0) {
    finishingLine = alamein;
    }
    else if (glenWaverley.indexOf(finish) >= 0) {
      finishingLine = glenWaverley;
      }
      else {
        finishingLine = sandringham;
      }
      startingLine = finishingLine;
}

if (finish != "Richmond") {
  var finishingLine = "";
  if (alamein.indexOf(finish) >= 0) {
    finishingLine = alamein;
    }
    else if (glenWaverley.indexOf(finish) >= 0) {
      finishingLine = glenWaverley;
      }
      else {
        finishingLine = sandringham;
      }
} else {
  finishingLine = startingLine;
}

// If starting station is the same as the finishing station

if (startingLine == finishingLine) {
  var startIndex = startingLine.indexOf(start);
  var finishIndex = startingLine.indexOf(finish);

  if (finishIndex - startIndex >= 0) {
    var journey = startingLine.slice(startIndex, finishIndex+1);
    var journeyStore = '';
    for (var i = 0; i < journey.length; i++) {
      if (journey.length-1 != i) {
        journeyStore += journey[i] + ' -----> ';
      }
      else {
        journeyStore += journey[i];
      }
    }
    console.log(journeyStore);
  }
  else {
    var journey = startingLine.slice(finishIndex, startIndex + 1);
    journey.reverse();
    var journeyStoreReverse = '';
    for (var i = 0; i < journey.length; i++) {
      if (journey.length-1 != i) {
        journeyStoreReverse += journey[i] + ' -----> ';
      }
      else {
        journeyStoreReverse += journey[i];
      }
    }
    console.log(journeyStoreReverse);
  }
  console.log(Math.abs(finishIndex - startIndex) + ' stops total');
}

// If starting line is not the same as the finishing line

if (startingLine != finishingLine) {
  var startIndex = startingLine.indexOf(start);
  var startRichmondIndex = startingLine.indexOf("Richmond");

  if (startRichmondIndex - startIndex >= 0) {
    var journey = startingLine.slice(startIndex, startRichmondIndex+1);
    var journeyStore = '';
    for (var i = 0; i < journey.length; i++) {
      if (journey.length-1 != i) {
        journeyStore += journey[i] + ' -----> ';
      }
      else {
        journeyStore += journey[i] + ' ---Interchange---> ';
      }
    }
  }
  else {
    var journey2 = startingLine.slice(startRichmondIndex, startIndex + 1);
    journey2.reverse();
    var journeyStoreReverse = '';
    for (var i = 0; i < journey2.length; i++) {
      if (journey2.length-1 != i) {
        journeyStoreReverse += journey2[i] + ' -----> ';
      }
      else {
        journeyStoreReverse += journey2[i] + ' ---Interchange---> ';
      }
    }
  }

  //---

  var finishIndex = finishingLine.indexOf(finish);
  var finishRichmondIndex = finishingLine.indexOf("Richmond");

  if (finishRichmondIndex - finishIndex >= 0) {
    var journey3 = finishingLine.slice(finishIndex, finishRichmondIndex+1);
    var finishJourneyStore = '';
    journey3.reverse();
    for (var i = 0; i < journey3.length; i++) {
      if (journey3.length-1 != i) {
        finishJourneyStore += journey3[i] + ' -----> ';
      }
      else {
        finishJourneyStore += journey3[i];
      }
    }
  }
  else {
    var journey4 = finishingLine.slice(finishRichmondIndex, finishIndex + 1);
    var finishJourneyStoreReverse = '';
    for (var i = 0; i < journey4.length; i++) {
      if (journey4.length-1 != i) {
        finishJourneyStoreReverse += journey4[i] + ' -----> ';
      }
      else {
        finishJourneyStoreReverse += journey4[i];
      }
    }
  }
}

// - Concatenating the 2 lines

if (journeyStore && finishJourneyStore) {
var combinedJourney = journeyStore.concat(finishJourneyStore);
console.log(combinedJourney);
console.log(Math.abs(journey.length + journey3.length -2) + ' stops total');
}

if (journeyStore && finishJourneyStoreReverse) {
var combinedJourneyTwo = journeyStore.concat(finishJourneyStoreReverse);
console.log(combinedJourneyTwo);
console.log(Math.abs(journey.length + journey4.length -2) + ' stops total');
}

if (journeyStoreReverse && finishJourneyStore) {
var combinedJourneyThree = journeyStoreReverse.concat(finishJourneyStore);
console.log(combinedJourneyThree);
console.log(Math.abs(journey2.length + journey3.length -2) + ' stops total');
}

if (journeyStoreReverse && finishJourneyStoreReverse) {
var combinedJourneyFour = journeyStoreReverse.concat(finishJourneyStoreReverse);
console.log(combinedJourneyFour);
console.log(Math.abs(journey2.length + journey4.length -2) + ' stops total');
}
