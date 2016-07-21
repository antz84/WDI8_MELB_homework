console.log("PT Planner - just for alamein line");

var alamein = ["Flinders Street", "Richmond", "East Richmond", "Burnley", "Hawthorn", "Glenferrie"];
var glenWaverley = ["Flagstaff", "Melbourne Central", "Parliament", "Richmond", "Kooyong", "Tooronga"];
var sandringham = ["Southern Cross", "Richmond", "South Yarra", "Prahran", "Windsor"];

var start = prompt();
var finish = prompt();

var startIndex = alamein.indexOf(start);
var finishIndex = alamein.indexOf(finish);

//----
// function to know whether destination infront or behind me
// function to tell me which line it is on
// hardcode richmond as meeting point

if (finishIndex - startIndex >= 0) {
  var journey = alamein.slice(startIndex, finishIndex+1);
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
  var journey = alamein.slice(finishIndex, startIndex + 1);
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
