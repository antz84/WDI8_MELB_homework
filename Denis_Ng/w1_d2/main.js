The Age Calculator

var currentYear  = 2016;
var birthYear = 1989;
var possibleAge  = currentYear - birthYear;
console.log('They are either ' + possibleAge + ' or ' + (possibleAge - 1));


The Lifetime Supply Calculator

var currentAge = 27;
var maxAge = 90;
var amtPerDay = 5;
var totalAmtForLife = (maxAge - currentAge) * (365 * amtPerDay);
console.log('You will need ' + totalAmtForLife + ' bags of Cheetos to last you until the ripe old age of ' + maxAge);

The Geometrizer

var rad = 10;
var circum = rad * 2 * Math.PI;
console.log('The circumference is ' + circum );
var area = rad * rad * Math.PI;
console.log('The area is ' + area);

The even/odd reporter

for(var i=0; i<=20){
  if(i % 2===0){
    console.log(i + ' is even');
}
  else{
    console.log(i + ' is odd');
}
//can't figure out error above

Multiplication tables

for (var i =0; i<=10; i++){
  var results = i *9;
    console.log(results)
}

The Vegan Test
//Need help completing this last question and Bonus above
