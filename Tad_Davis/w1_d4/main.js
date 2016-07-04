var alamein = ['Flinders Street', 'Richmond', 'East Richmond', 'Burnley', 'Hawthorn', 'Glenferrie'];
var glen_waverly = ['Flagstaff', 'Melbourne Central', 'Parliament', 'Richmond', 'Kooyong', 'Tooronga'];
var Sandringham = ['Southern Cross', 'Richmond', 'South Yarra', 'Prahan', 'Windsor'];

console.log("hi welcome to the train service" + '\n' + " Wow lucky you, trains '\n\n");

//write a JS program that works out display the journey when you give it an origin and destination.
//example:
//Melbourne Central -----> Parliament -----> Richmond
//2 stops total
//You may want to hard code the origin and destination for easier testing in the beginning.
//=======================================================================================
//write a function to search and display the name of where you are using one line
//first look for the place you are in.
//then look for the place you want to go.
// then

    var alamein = ['Flinders Street', 'Richmond', 'East Richmond', 'Burnley', 'Hawthorn', 'Glenferrie'];
    //hardcoded version of the journey
    var begin = "Hawthorn";
    var end =  "Richmond";

    //this gets the index of the array
    var journeyStart = alamein.indexOf(begin);
    var journeyEnd = alamein.indexOf(end)+1;


    //putting the start and end journey together
    var theJourney = alamein.slice(journeyStart,journeyEnd);

    //if statment for conditions normal backwards and wrong spelling (doesnt work)

    if(journeyStart < journeyEnd){
    console.log("The original journey after slice:\n " + theJourney + '\n\n');
    }
    else if(journeyEnd > journeyStart){
    var journeybackwards = theJourney.reverse();
    console.log("my new backwards journey:\n " + journeybackwards + '\n\n' );
    }
    else{
        console.log('wrong spelling mon');
    }
    // I have the index of the array. now return it back to a string.
    // I can use the index to find out the distance between places.
