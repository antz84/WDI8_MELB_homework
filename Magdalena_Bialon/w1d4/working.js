var allLines = {
   alamein    : ['Flinders Street', 'Richmond', 'East Richmond', 'Burnley', 'Hawthorn', 'Glenferrie'],
   glenWaverly: ['Flagstaff', 'Melbourne Central', 'Parliament', 'Richmond', 'Kooyong', 'Tooronga'],
   sandringham: ['Southern Cross', 'Richmond', 'South Yarra', 'Prahran', 'Windsor']
 };

 var journeyPlanner = function(startStation, endStation, linesObject) {

   if (!startStation || !endStation || !linesObject) {
     return 'you fail';
   }
   var returnObj         = {};
   returnObj.startedFrom = startStation;
   returnObj.goingTo     = endStation;
   var startingLocation  = finder(startStation);
   var endingLocation    = finder(endStation);

   if (destinationBeforeRichmond()) {
     return destinationBeforeRichmond();
   }

   returnObj.toRichmond = toRichmond(startingLocation);
   returnObj.toDestination = toDestination(endingLocation);

   function finder(stopName) {
     var indexOfStation = 0;
     var lineName       = '';

     for (var line in linesObject) {
       if (linesObject[line].indexOf(stopName) !== -1) {
         indexOfStation = linesObject[line].indexOf(stopName);
         lineName = line;
       }
    }
     return [indexOfStation, lineName];
   }

   function toRichmond(array) {
     var indexOfStation       = array[0];
     var lineName             = array[1];
     var indexOfRichmond      = linesObject[lineName].indexOf('Richmond');
     var temp                 = linesObject[lineName].slice();
     returnObj.toRichmondLine = lineName;

     if (indexOfRichmond > indexOfStation) {
       temp = temp.splice(indexOfStation, indexOfRichmond + 1);
       return temp;
     } else {
       temp = temp.splice(indexOfRichmond, indexOfStation);
       return temp.reverse();
     }
   }

   function toDestination(array) {
     var returnLine              = array[0];
     var lineName                = array[1];
     var indexOfRichmond         = linesObject[lineName].indexOf('Richmond');
     var temp                    = linesObject[lineName].slice();
     returnObj.toDestinationLine = lineName;

     if (indexOfRichmond > returnLine) {
       temp = temp.splice(returnLine, indexOfRichmond + 1);
       return temp.reverse();
     } else {
       temp = temp.splice(indexOfRichmond, returnLine);
       return temp;
     }
   }

   function destinationBeforeRichmond() {
     var ending   = finder(endStation);
     var starting = finder(startStation);

     if (ending[1] === starting[1]) {
       var line = linesObject[starting[1]].slice();
       returnObj.toDestinationLine = ending[1];
       if (ending[0] < starting[0]) {
         returnObj.toDestination = line.splice(ending[0], starting[0]).reverse();
         return returnObj;
       } else {
         returnObj.toDestination = line.splice(starting[0], ending[0] + 1);
         return returnObj;
       }
     }
     return false;
   }
   return returnObj;
 }

 console.log(journeyPlanner('Windsor', 'Richmond', allLines));
