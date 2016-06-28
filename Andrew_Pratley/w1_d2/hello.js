console.log("JS is working");

// The Age Calculator
var date = new Date();
var currentYear = date.getFullYear();
var birthYear = 1981

console.log("They are either " + (currentYear - birthYear) + " or " + (currentYear-1 - birthYear) + ".");

// The Lifetime Supply Calculator

var currentAge = 35
var maximumAge = 88
var estAmountPerDay = 4
console.log("Lifetime supply of snacks is " + (maximumAge - currentAge)*estAmountPerDay);

// The Geometrizer

var radius = 3
var pi = 3.141592
console.log("The circumference is " + Math.round(2*pi*radius) + "cm");
console.log("The area is " + Math.round(pi*radius*radius) + "cm2");

// The even/odd reporter

var num = 0

for (num = 0; num <= 20; num++) {
  if (num % 2 == 0) {
    console.log(num + " is even")
  }
  else {
  console.log(num + " is odd")
  }
};

// Multiplication Tables

var number = 0;
var number2 = 0;

for (number2 = 1; number2 <=10; number2++) {
for (number = 0; number <= 10; number++) {
  var multipliedNumber = number * number2;
  console.log(number + " x " + number2 + " = " + multipliedNumber);
}
};


// The Vegan Test

var choice = prompt("Which option would you like to eat?");

if (choice == "steak" || choice == "pork chops") {
  console.log("Vegans beware!");
}
else if (choice == "fruit salad" || choice == "tofurkey") {
  console.log("This cuisine is vegan friendly")
}
else {
  console.log("Make sure that you can eat what you order. There are no refunds. Especially at GA :P")
}
