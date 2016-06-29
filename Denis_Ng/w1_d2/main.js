console.log('The Age Calculator')

var currentYear  = 2016;
var birthYear = 1989;
var possibleAge  = currentYear - birthYear;
console.log('They are either ' + possibleAge + ' or ' + (possibleAge - 1));


console.log('The Lifetime Supply Calculator')

var currentAge = 27;
var maxAge = 90;
var amtPerDay = 5;
var totalAmtForLife = (maxAge - currentAge) * (365 * amtPerDay);
console.log('You will need ' + totalAmtForLife + ' bags of Cheetos to last you until the ripe old age of ' + maxAge);

console.log('The Geometrizer')

var rad = 10;
var circum = rad * 2 * Math.PI;
console.log('The circumference is ' + circum );
var area = rad * rad * Math.PI;
console.log('The area is ' + area);

console.log('The Even/Odd Reporter')
for(var i = 0; i <= 20; i++){
  console.log(i);        //use this to check during first stage, counter
}
  if(i % 2===0){
    console.log(i + ' is even');
}
  else{
    console.log(i + ' is odd');
}

// Multiplication tables

for (var i =0; i<=10; i++){
  var multiple = i * 9;
  console.log(i + ' * 9 = ' + multiple);
}

// nested loop means a loop within a loop

// The Vegan Test

var choice = 'steak';

if (choice === ' fruit salad' || choice === 'tofurkey'){
  console.log('vegan friendly');
} else {
  console.log('beware');
}
