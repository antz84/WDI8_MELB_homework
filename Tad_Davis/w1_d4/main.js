var alamein = [' FlindersStreet', ' Richmond', ' EastRichmond', ' Burnley', ' Hawthorn', ' Glenferrie'];
var glen_waverly = ['Flagstaff', 'Melbourne Central', 'Parliament', 'Richmond', 'Kooyong', 'Tooronga'];
var Sandringham = ['Southern Cross', 'Richmond', 'South Yarra', 'Prahan', 'Windsor'];

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

   // var alamein = ['Flinders Street', 'Richmond', 'East Richmond', 'Burnley', 'Hawthorn', 'Glenferrie'];
    //hardcoded version of the journey
    var begin = "Glenferrie";
    var end =  "Burnley";

    

    //this gets the index of the array
    var journeyStart = alamein.indexOf(begin);
    
    var journeyEnd = alamein.indexOf(end)+1;


//**************************************
//for loop lists all the trains
    var trains= "";

    for(var i =0; i< alamein.length; i++){
       
     trains += alamein[i];

    }
     //   console.log("listing all the trains",trains);

        
    var split = trains.split(' ');
       console.log("listing all the trains",trains);
  



//*******************************************
//for loop to log where you started and will end
// if var begin matches with a spot in the array return true and number eg hawthorn[4]

//loop backwards 
/*
var inreverse = "";
  for(var i = journeyEnd; i > journeyStart;i--){
           
    inreverse = i;
     console.log("REVERSE INSIDElisting all the trains",i);
    }


//an example in looping backwards 
for(var i = 10; i > 1; i--){
    
    //this counts down 
    
}

//this gives the end result 

*/

//***********************************************





     //putting the start and end journey together
   
    //if statment for conditions normal backwards and wrong spelling (doesnt work)
/*
    if(journeyStart < journeyEnd){
    
    var theJourney = alamein.slice(journeyStart,journeyEnd);
    console.log("the journey here works", theJourney);

    }
    
     else{
 //       console.log('wrong spelling mon');
    }
    // I have the index of the array. now return it back to a string.
    // I can use the index to find out the distance between places.

  */
