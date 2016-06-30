console.log('PT PLANNER')


// ------- ******** -------
var metro = {
  alamain: ['Flinders Street', 'Richmond', 'East Richmond', 'Burnley', 'Hawthorn', 'Glenferrie'],
  glenwaverley: ['Flagstaff', 'Melbourne Central', 'Parliament', 'Richmond', 'Kooyong', 'Tooronga'],
  sandringham: ['Southern Cross', 'Richmond', 'South Yarra', 'Prahran', 'Windsor']
}


// ---- ****** ----
//LATER ON PROMPT AS:
// var start = prompt('Please enter your start station');
// var stop = prompt('Please enter your end station');
// ??? var startStop = [startStation, endStation]

// ---  ****** ----


var start = 'Flinders Street';
var stop =  'Prahran';
//var intersection = 'Richmond';


// you need a function that will loop over the train lines. -H. hint: 'for in' loop.
// it should take a STATION as a parameter. It should return which line its on.


// you need a second function that will use the index of the station and the line its on
// and use it to splice an array to get you to richmond.


// you need a third function that will use the index of richmond to take you to the stop station.



//start STATION - WHICH LINE?
//function whichStartStation(stopName){
  var indexOfStartSt = 0;
  var lineName       = '';

  for (var line in metro) {
    if(metro[line].indexOf(start) !== -1){
      indexOfStartSt = metro[line].indexOf(start);
      lineName = line;
    }
  }
  console.log(indexOfStartSt,lineName);
 //return [indexOfStation, lineName];
// }
// console.log(whichStartStation(start));


//Richmond STATION - WHICH LINEs?  - doesn't work
// for (var i = 0; i<metro.length; i++){
// var indexOfRichmondSt = 0;
// var lineName       = '';
//
// for (var line in metro) {
//   if(metro[line].indexOf(intersection) !== -1){
//     indexOfRichmondSt = metro[line].indexOf(intersection);
//     lineName = line;
//   }
// }
// }


//stop STATION - WHICH LINE?
//function whichStopStation(stopName){
  var indexOfStopSt = 0;
  var lineName = '';

  for (var line in metro) {
    if(metro[line].indexOf(stop) !== -1){
      indexOfStopSt = metro[line].indexOf(stop);
      lineName = line;
    }
  }
  console.log(indexOfStopSt,lineName);
 //return [indexOfStation, lineName];
//}
//console.log(whichStopStation(stop));


// ---- ****** ----
//doesn't work:
// var routeToRich = metro.start.slice(metro.start.indexOfStation, metro.start.indexOf(start[1]));
// console.log(routeToRich);
//
// var routeToDest = stop.slice(stop.indexOfStation, stop.indexOf(stop[3])+1);
// console.log(routeToDest);

// var route = routeToRich.concat(routeToDest);
// var routeLen = route.length;
// console.log('This is the route: ' + route);
// console.log('This is route length: ' + (routeLen-1));
// ---- ****** ----




// ---- ****** ----
//Manyally provided stationNames

//'Flinders Street'  / 'Richmond'
//metro.alamain[0];  / metro.alamain[1]


var testRouteA = metro.alamain.slice(metro.alamain.indexOf(metro.alamain[0]), metro.alamain.indexOf(metro.alamain[1]));
//console.log(testRouteA);

var testRouteB = metro.sandringham.slice(metro.sandringham.indexOf(metro.sandringham[1]), metro.sandringham.indexOf(metro.sandringham[3])+1);
//console.log(testRouteB);

var TESTRouteeA = testRouteA.concat(testRouteB);
var TESTRouteLenA = TESTRouteeA.length;
console.log('This is the route: ' + TESTRouteeA);
console.log('This is route length: ' + (TESTRouteLenA-1));

// ---- ****** ----





// ---- ****** ----
// FIRST TESTS FOR ONLY ONE ARRAY

// var alamain = ['Flinders Street', 'Richmond', 'East Richmond', 'Burnley', 'Hawthorn', 'Glenferrie'];
// var glenwaverley =['Flagstaff', 'Melbourne Central', 'Parliament', 'Richmond', 'Kooyong', 'Tooronga'];
// var sandringham = ['Southern Cross', 'Richmond', 'South Yarra', 'Prahran', 'Windsor'];


// var testRoute1 = alamain.slice(alamain.indexOf('Flinders Street'), alamain.indexOf('Richmond'));
// console.log(testRoute1);
//
// var testRoute2 = sandringham.slice(sandringham.indexOf('Richmond'), sandringham.indexOf('Prahran')+1);
// console.log(testRoute2);


// var TESTRoutee = testRoute1.concat(testRoute2);
// var TESTRouteLen = TESTRoutee.length
// console.log(TESTRoutee);
// console.log(TESTRouteLen);

// ---- ****** ----



// ---  ****** ----
//THIS WORKS, BUT HOW TO MAKE IT WORKS FOR ARRAYS??
// var metro = {
//   alamain: 'Flinders Street',
//   glenwaverley: 'Flagstaff',
//   sandringham: 'Southern Cross'
// }
//
//
// var start = 'Flinders Street';
// var stop =  'Prahran';
//
//
//   for (var line in metro) {
//   	var this_val = metro[line];
//         if(this_val == start){
//             console.log(line);
//         }}
// ---  ****** ----



// console.log(startStop.indexOf(startStop[0]) + '----->'+ xx2NameOfStation
//    + '----->'+ startStop.indexOf(startStop[1])
//    + '\n' +yyStops+ ' stops total');

// // Melbourne Central -----> Parliament -----> Richmond
// // 2 stops total
