  //The event adder function
  var listenerAdder = function(calculator,buttonElmt,eventAdd){
    var btnEventPointer = document.getElementById(buttonElmt);
    console.log(btnEventPointer);
    btnEventPointer.addEventListener(eventAdd,calculator);
  }

  //The Age Calculator
var calAge = function(){
  var getYr = new Date();
  var crtYr = getYr.getFullYear();
  var yob = document.getElementById("yob").value;
  var age = crtYr-yob;
  var ageElmt = document.getElementById("ageField");
  ageElmt.textContent = "Your age is either "+age+" or "+(age-1)+" .";
  }
  listenerAdder(calAge,"agebtn","click");

  //The Lifetime Calculator
var calLifeSup = function(){
  var lifespan = 100
  var lifeRest = lifespan - document.getElementById('age').value;
  var snack = document.getElementById('snack').value;
  var supply = snack*lifeRest;
  var supplyElmt = document.getElementById('supplyField');
  supplyElmt.textContent = "You will need "+supply+ " tons to last you until the ripe old age of "+lifespan;
}
listenerAdder(calLifeSup,"lifebtn","click");
 //The Geometrizer
   //circum
   var calCircum = function(){
     var rio = document.getElementById("rio").value;
     var circum = 2*rio* Math.PI;
     var cirElmt = document.getElementById("cirField");
     cirElmt.textContent="The circumference is "+circum;
   }
   listenerAdder(calCircum,"cirBtn","click");

     //area
   var calArea = function(){
     var rio = document.getElementById("rio").value;
     var area = 2*rio*Math.PI;
     var areaElmt = document.getElementById("areaField");
     areaElmt.textContent="The area is "+area;
   }
   listenerAdder(calArea, "areaBtn", "click");

//The even/odd reporter
  var oeReporter=function(){
    var reporter;
    reporter = document.getElementById("reporter");
    for(var i=0;i<=20;i++){
      if(i%2){
        var oddLine = document.createElement('p');
        oddLine.textContent = i + " is an odd number.";
        reporter.appendChild(oddLine);
      }else{
        var evenLine = document.createElement('p');
        evenLine.textContent = i + " is an even number.";
        reporter.appendChild(evenLine);
      }
    }
  }
  oeReporter();

 //Multiplication Tables
 var multiTab = function(){
   var tableField;
   tableField = document.getElementById("tableField");
   for(var i=1;i<=9;i++){
     var println = document.createElement('tr');
     var theLine ="";
     for(var j=1;j<=i;j++){
       theLine+="<td>"+i+" x "+j+" = "+i*j+" </td>";
     }
     println.innerHTML =theLine;
     tableField.appendChild(println);
   }
 }
 multiTab();

 //The Vegan Test
 var veganTest = function(){
   var steak = document.getElementById("Steak").checked;
   var fruitsalad = document.getElementById("fruit salad").checked;
   var tofurkey = document.getElementById("tofurkey").checked;
   var porkchops = document.getElementById("pork chops").checked;
   var alergy = document.getElementById("alergy");
   if((fruitsalad||tofurkey)&&!(porkchops||steak)){
     alergy.textContent="This cuisine is vegan friendly.";
   }else if(porkchops||steak){
     alergy.textContent="";
     alergy.textContent="Vegan be aware!";
   }
 }
 listenerAdder(veganTest, "Steak", "click");
  listenerAdder(veganTest, "fruit salad", "click");
   listenerAdder(veganTest, "tofurkey", "click");
    listenerAdder(veganTest, "pork chops", "click");
