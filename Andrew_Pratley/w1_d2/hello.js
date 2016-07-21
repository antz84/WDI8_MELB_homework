console.log("w1_d2 Homework");

// The Age Calculator
var date = new Date();
var currentYear = date.getFullYear();
var birthYear = 1981

console.log("They are either " + (currentYear - birthYear) + " or " + (currentYear-1 - birthYear) + ".");

// The Lifetime Supply Calculator

var currentAge = 35
var maximumAge = 88
var yearsRemaining = maximumAge - currentAge;
var daysRemaining = yearsRemaining*365.25;
var estAmountPerDay = 1
console.log("Lifetime supply of snacks is " + estAmountPerDay*daysRemaining);

// The Geometrizer

var radius = 3;
var circumference = Math.round(2 * Math.PI * radius);
var area = Math.round(Math.PI * radius * radius);
console.log("The circumference is " + circumference + "cm");
console.log("The area is " + area + "cm2");

// The even/odd reporter

for (var num = 0; num <= 20; num++) {
  if (num % 2 == 0) {
    console.log(num + " is even")
  }
  else {
  console.log(num + " is odd")
  }
};

// Multiplication Tables

for (var number2 = 1; number2 <=10; number2++) {
for (var number = 0; number <= 10; number++) {
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
