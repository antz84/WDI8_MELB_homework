//The Age Calculator
var currentYear = (new Date()).getFullYear();
var birthYear = prompt('What year you were born?');
var possibleAge1 = currentYear - birthYear;
var possibleAge2 = currentYear - birthYear - 1;
console.log("They are either "+ possibleAge1+ " or "+possibleAge2);



//The Lifetime Supply Calculator
var currentAge = 22;
var maximumAge = 102;
var estimatedAmountPday = 3;
var lifelongSnackAmount = (maximumAge - currentAge)*(365*estimatedAmountPday);
console.log("You will need "+lifelongSnackAmount+" to last you until the ripe old age of "+maximumAge+".")

// ohhh and how much money I would spend on my Snack?!
var snackPrice = 5.99;
var snackSpended = lifelongSnackAmount * snackPrice;
console.log(snackSpended+" $$ ?! I could drive a lambo by the age "+maximumAge)



//The Geometrizer
var radius = 5;
var circumference = (2* Math.PI *radius).toFixed(3);
console.log("The circumference is "+circumference)
var area = (Math.PI *radius*radius).toFixed(3);
console.log("The area is "+area);



//The even/odd reporter
for (var i =0; i<=20; i++){
  if (i%2 ===0){
    console.log(i+' is even');
  }
  else {
  	console.log(i +' is odd');
  }
}



//Multiplication Tables
for (var i =0; i<=10; i++){
  var result = i *9;
  console.log(result)
}

//bonus
var table = [];
  for(var i = 0; i <= 10; i++) {
      table[i] = [];
      for(var a = 0; a <=10; a++) {
          var multi = i*a
          document.write(multi) ;
          table[i].push(multi);
      }
      document.write("<br>");
  }
  console.table(table);

//or:
for (var i =0; i<=10; i++){
  var result = i *9;
  console.log(i + ' *9 = ' +result)
}

//bonus, nested loop
var table = '';
for(var i = 0; i <= 10; i++) {
    for(var a = 0; a <=10; a++) {
        var multi = i*a
        table += multi + ' ';
        console.log(multi) ;
    }
    table += "\n";
}
console.log(table);

//another version
for (var i=1; i<=10; i++) {
  for (var j=1; j<=10; j++) {
      console.log(i + ' * ' + j + ' = ' + (i * j));
  }
}




//The Vegan Test
var userMenuChoice = prompt('What youw would like to order? Today we have delcioius: steak, fruit salad, tofurkey, pork chops')
if ((userMenuChoice == 'tofurkey') || (userMenuChoice === 'fruit salad')){
  console.log("This cuisine is vegan friendly.")
}
else if ((userMenuChoice == 'steak') || (userMenuChoice == 'pork chops')){
  console.log("Vegans beware!");
}
else {
  console.log("It's not on the menu!");
}
