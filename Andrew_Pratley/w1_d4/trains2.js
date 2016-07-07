console.log("PT Planner for all lines - but no interchange");

var alamein = ["Flinders Street", "Richmond", "East Richmond", "Burnley", "Hawthorn", "Glenferrie"];
var glenWaverley = ["Flagstaff", "Melbourne Central", "Parliament", "Richmond", "Kooyong", "Tooronga"];
var sandringham = ["Southern Cross", "Richmond", "South Yarra", "Prahran", "Windsor"];

var start = prompt();
var finish = prompt();

//----
// function to know whether destination infront or behind me
// function to tell me which line it is on
// hardcode richmond as meeting point

// find which arrays (and index number) the station is on
// if they are on the same line then run my code below
// if not on the same line, for each array, find out how far it is from Richmond
// store the journey from that station to richmond (as I have done - adding to it)
// concatenate the other jouney to the original one.
// print it out.

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

//---

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
