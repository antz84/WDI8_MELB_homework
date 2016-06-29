//Age Calculator
var currentYear = 2016;
var birthYear = 1990;
var possibleAge1 = (currentYear - birthYear)
var possibleAge2 = (currentYear - (birthYear -1))
// or var possibleAge2 = possibleAge1 -1 works
console.log('They are either ' + possibleAge1 + ' or ' + possibleAge2)

//The Lifetime Supply
//Forgot to differintiate days vs. years in math...
var currentAge = 27;
var maximumAge = 100;
var amtPerDay = 10;
var totalConsumed = (maximumAge - currentAge) * 10;

console.log('You will need ' + totalConsumed + ' to last you till the ripe old age of ' + maximumAge);

//The Geometrizer
//Math.PI is exact value of pi
var radius = 10;
var circumference = 2 * 3.14 * radius;
console.log('The circumference is ' + circumference);
var area = 3.14 * (radius * radius);
console.log('The area is ' + area);

//the even/odd reporter
for (var i = 0; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(i + ' is even.')
  } else console.log(i + ' is odd.')
}

//Multiplication tables
for (var i = 0; i<= 10; i++) {
  var multiplyByNine = i*9;
  console.log(i + ' * 9 = ' + multiplyByNine);
}

//Multiplication tables bonus
//nested loop
var multiplyByL
for (var k = 1; k <= 10; k++) {
  for (var l = 1; l <= 10; l++) {
    multiplyByL = l * k;
    console.log(k + ' * ' + l + ' = ' + multiplyByL)
  }
}

//The Vegan Test
var menuChoice = prompt('Would you like steak, fruit salad, tofurkey or pork chops?');
if (menuChoice === 'fruit salad' || menuChoice === 'tofurkey') {
  console.log('This cuisine is vegan friendly!');
} else console.log('Vegans Beware!');
