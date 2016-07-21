console.log('PT PLANNER')

var metro = {
  alamain: ['Flinders Street', 'Richmond', 'East Richmond', 'Burnley', 'Hawthorn', 'Glenferrie'],
  glenwaverley: ['Flagstaff', 'Melbourne Central', 'Parliament', 'Richmond', 'Kooyong', 'Tooronga'],
  sandringham: ['Southern Cross', 'Richmond', 'South Yarra', 'Prahran', 'Windsor']
}


/* ---- ****** ----
LATER ON input tag  AS:
var start = prompt('Please enter your start station');
var stop = prompt('Please enter your end station');
??? var startStop = [startStation, endStation]
---  ****** ----  */



var startStation = 'Flinders Street';
// var stopStation = 'South Yarra';
var stopStation = 'Hawthorn';


//'Richmond'  INTERSECTION;
var interstAlIndex = metro.alamain.indexOf('Richmond');
var interstGlvIndex = metro.glenwaverley.indexOf('Richmond');
var interstSanIndex = metro.sandringham.indexOf('Richmond');
// console.log(interstAlIndex); console.log(interstGlvIndex); console.log(interstSanIndex);

// var interstAl = metro.alamain[1];
// var interstGlv = metro.glenwaverley[3];
// var interstSan = metro.sandringham[1];




// **** STATION - WHICH LINE station is in ****

function whichLine(station){
  var indexOfStartSt = 0;
  var lineName       = '';

  for (var line in metro) {
    if(metro[line].indexOf(station) !== -1){
      indexOfStartSt = metro[line].indexOf(station);
      lineName = line;
    }
  }
  // console.log('Your START/STOP station is '+ station+ ', Line Name: '+lineName+', stop Number: '+(indexOfStartSt+1));
  return [indexOfStartSt, lineName];
}
// console.log(whichLine(startStation)); console.log(whichLine(interStation)); console.log(whichLine(stopStation));



// start / stop station LINE NAME
var startLine = whichLine(startStation)[1];
var stopLine = whichLine(stopStation)[1];

// start / stop station INDEX
var startStatIndex = whichLine(startStation)[0];
var stopStatIndex = whichLine(stopStation)[0];

// console.log(startLine);  console.log(stopLine);  ||  console.log(startStatIndex);   console.log(stopStatIndex);
console.log('Your START station is '+ startStation+ ', Line Name: '+startLine+', stop #: '+(startStatIndex+1));
console.log('Your STOP station is '+ stopStation+ ', Line Name: '+stopLine+', stop #: '+(stopStatIndex+1));
// console.log(startLine);





//     ****     ONE LINE ONLY    ****
//              alamain : START STATION - TO INTERSECTION - Richmond

function routeStartInters (){
  var route = metro.alamain.slice();        //Slice() - Creates a new array from elements of an existing array. It does not modify the original array.

  if (interstAlIndex > startStatIndex) {
    route = route.splice(startStatIndex, interstAlIndex + 1);   //Splice() – Deletes and/or inserts elements in an array. Unlike slice(), the splice() method modifies the original array and returns a new array.
    return route;
  } else {
    route = route.splice(interstAlIndex, startStatIndex);
    return route.reverse();
  }
}
// console.log(routeStartInters());


//                alamain :  INTERSECTION - Richmond TO STOP STATION

function routeIntersStop (){
  var route = metro.alamain.slice();

  if (interstAlIndex > stopStatIndex) {
    route = route.splice(stopStatIndex, interstAlIndex + 1);
    return route.reverse();
  } else {
    route = route.splice(interstAlIndex, stopStatIndex);
    return route;
  }
}
// console.log(routeIntersStop());

var startInterRoute = routeStartInters();   //array
var interStopRoute = routeIntersStop();     //array
console.log(startInterRoute);
console.log(interStopRoute);




console.log('This is the route ||  Start - Intersection: ' + startInterRoute + ' >> ' +'\n' +'||  Intersection - Stop: >> ' +interStopRoute + ' ||');

var startIntLen = startInterRoute.length - 1;
var stopIntLen = interStopRoute.length -1;
var journeyLen = startIntLen + stopIntLen;
console.log('Route length - number of stops: ' + (journeyLen));

// var journey = startInterRoute.concat(interStopRoute);
// var journeyLen = journey.length;






//    ****    ALL  LINES   ****

// **** START STATION - TO INTERSECTION - Richmond ****

// to check on which line is start & interstation
function whichLineInterst(startLine){
  if(startLine === 'alamain'){
      interstLine = metro.alamain;
      return interstLine;
  } else if (startLine === 'glenwaverley'){
      interstLine = metro.glenwaverley;
      return interstLine;
  } else if(startLine === 'sandringham'){
      interstLine = metro.sandringham;
      return interstLine;
  }
  // else {
  //
  // }
}
console.log(whichLineInterst(startLine));



function routeStartInters (intRichmline){

  // var route = metro.line.slice();


  if (interstAlIndex > startStatIndex) {
    route = route.splice(startStatIndex, interstAlIndex + 1);
    return route;
  } else {
    route = route.splice(interstAlIndex, startStatIndex);
    return route.reverse();
  }
}

console.log(routeStartInters(startLine));





// // ****  INTERSECTION - Richmond  TO  STOP STATION****
// function routeIntersStop (){
//
// }
// // console.log(routeIntersStop());










// // ---- ****** ----
// //Manyally provided stationNames
//
// //'Flinders Street'  / 'Richmond'
// //metro.alamain[0];  / metro.alamain[1]
//
// var testRouteA = metro.alamain.slice(metro.alamain.indexOf(metro.alamain[0]), metro.alamain.indexOf(metro.alamain[1]));
// //console.log(testRouteA);
//
// var testRouteB = metro.sandringham.slice(metro.sandringham.indexOf(metro.sandringham[1]), metro.sandringham.indexOf(metro.sandringham[3])+1);
// //console.log(testRouteB);
//
// var TESTRouteeA = testRouteA.concat(testRouteB);
// var TESTRouteLenA = TESTRouteeA.length;
// console.log('Journey - stops names: ' + TESTRouteeA);
// console.log('Journey - number of stations: ' + (TESTRouteLenA-1));
//
// // ---- ****** ----



/* ---- ****** ----
FIRST TESTS FOR ONLY ONE ARRAY

var alamain = ['Flinders Street', 'Richmond', 'East Richmond', 'Burnley', 'Hawthorn', 'Glenferrie'];
var glenwaverley =['Flagstaff', 'Melbourne Central', 'Parliament', 'Richmond', 'Kooyong', 'Tooronga'];
var sandringham = ['Southern Cross', 'Richmond', 'South Yarra', 'Prahran', 'Windsor'];


var testRoute1 = alamain.slice(alamain.indexOf('Flinders Street'), alamain.indexOf('Richmond'));
console.log(testRoute1);

var testRoute2 = sandringham.slice(sandringham.indexOf('Richmond'), sandringham.indexOf('Prahran')+1);
console.log(testRoute2);


var TESTRoutee = testRoute1.concat(testRoute2);
var TESTRouteLen = TESTRoutee.length
console.log(TESTRoutee);
console.log(TESTRouteLen);

---- ****** ----
*/



/*
console.log(startStop.indexOf(startStop[0]) + '----->'+ xx2NameOfStation
   + '----->'+ startStop.indexOf(startStop[1])
   + '\n' +yyStops+ ' stops total');

Melbourne Central -----> Parliament -----> Richmond
2 stops total
*/
