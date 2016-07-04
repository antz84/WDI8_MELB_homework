

var alamein = ['Flinders Street', 'Richmond', 'East Richmond', 'Burnley', 'Hawthorn', 'Glenferrie']
var glenWaverly = ['Flagstaff', 'Melbourne Central', 'Parliament', 'Richmond', 'Kooyong', 'Tooronga']
var sandringham = ['Southern Cross', 'Richmond', 'South Yarra', 'Prahan', 'Windsor']

var start = "Windsor";
var end = "Burnley"
var intersectingStation = "Richmond";

function findStationIndex(station, line){
  var returnValue = line.indexOf(station);
  //console.log('findStationIndex (station) ' + station + ',' + ' - ' + returnValue);
  return returnValue;
}
//debugger



function moveToStation(sourceStation, destinationStation, line){
  var indexSource= findStationIndex(sourceStation, line);
  var indexDest = findStationIndex(destinationStation, line);
  console.log('moveToStation (sourceStation, destinationStation): ' +  indexSource + ' '+ indexDest)

  var finalArray;

  if (indexSource > indexDest){
      finalArray = line.slice(indexDest,indexSource + 1).reverse();
  }
  else {
      finalArray = line.slice(indexSource,indexDest + 1)
  }
  return finalArray;
}

function findForeignStationLine(station) {
  var index = findStationIndex(station, alamein);
  if (index != -1){
    return alamein;
  }
  index = findStationIndex(station, glenWaverly);
  if (index != -1){
    return glenWaverly
  }
  return sandringham;
}

  function returnFinalForeignLine(station, line){
    var indexOfRichmond = findStationIndex("Richmond", line);
    var indexOfStation = findStationIndex(station, line);

    console.log('returnFinalForeignLine (indexOfRichmond, indexOfStation): ' +  indexOfRichmond + ' '+ indexOfStation)
    var finalArray;
    console.log('returnFinalForeignLine (orig array): ' +  line)
    if (indexOfRichmond > indexOfStation){
      console.log('a');
        finalArray = line.slice(indexOfStation,indexOfRichmond + 1).reverse();
    }
    else {
      console.log('b');
        finalArray = line.slice(indexOfRichmond,indexOfStation + 1)
    }
    console.log('returnFinalForeignLine (finalArray array): ' +  finalArray)
    return finalArray;
  }

//name of line - value is the lines (array);

//check if we need to switch lines or not.
//we can do this by checking which line we are on now and which line we need to go onto

console.log('(Start / End) - ' + start + ', ' + end );
var currentLine = findForeignStationLine(start);
var destinationLine = findForeignStationLine(end);
var finalJourney;

if ((currentLine == destinationLine)||(end == intersectingStation))
{
  console.log('Start and end are on the same line. lets just go there');
  finalJourney = moveToStation(start, end, currentLine);
}
else {
  console.log('we need to switch lines. work out how to get to richmomd first, but dont include it here. so find the station before');

  //stop at the one before richmond.
  var oneBeforeRichmondIndex = findStationIndex(intersectingStation, currentLine);
  var oneBeforeRichmond = currentLine[oneBeforeRichmondIndex-1];
  console.log(oneBeforeRichmond);
  finalJourney = moveToStation(start, oneBeforeRichmond, currentLine);
  console.log(finalJourney);
  console.log('   ');
  console.log('now continue our journey');
  var finalJourney2 = returnFinalForeignLine(end, destinationLine);


  console.log(finalJourney2);
}





//concatinate the foreign stops now (including richmond, in the correct order)

//var destinationLine = findForeignStationLine("Windsor");
//var finalLine = returnFinalForeignLine("Windsor", destinationLine);

//console.log('<br/>');
//var destinationLine1 = findForeignStationLine("Burnley");
//var finalLine1 = returnFinalForeignLine("Burnley", destinationLine1);
//console.log(finalLine);


/*



function makeCake() {
  console.log('go to the shop');
  console.log('buy cake');
  console.log('pretend i made it');
}
//makeCake();



function calcArea(radius) {
  var area = Math.PI  * radius * radius
  console.log(area);
  return area;

}

//calcArea(3);
//console.log(calcArea(3));




//  1. Write a function `lengths` that accepts a single parameter as an argument,
//namely
// an array of strings. The function should return
//an array of numbers where each
// number is the length of the corresponding string.

// your code here

// 2. Write a Javascript function called `transmogrifier`
// This function should accept three arguments, which you can assume w
//will be numbers.
// Your function should return the "transmogrified" result
//
// The transmogrified result of three numbers is the
//product of the first two numbers,
// raised to the power of the third number.

// your code here

// 3. Write a function `wordReverse` that accepts a single argument, a string. The
// method should return a string with the order of the words reversed. Don't worry
// about punctuation.

// your code here

function reverse(s) {
  return s.split('').reverse().join('');
}

function lengths(stringArray){

  var returnArray = [];
  for(var i = 0;i<stringArray.length;i++) {
    returnArray.push(stringArray[i].length);
  }
  return returnArray;
}

function transmogrifier(number1, number2, number3){
  var product = number1 * number2;
  return Math.pow(product, number3);
}

function sentenceReverse(word) {
  return word.split(' ').reverse().join(' ');
}


function wordReverse(word) {
  return reverse(word);
}




console.log(lengths(['test', 'wer']));
console.log('transmogrifier : ' + transmogrifier(1,2,22));
console.log('reverse : ' + reverse('hello'));


*/
