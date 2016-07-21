

/* The Age calculator */
console.log('The Age calculator');
var currentDate = new Date();
var currentYear = currentDate.getFullYear();

var userBirthYear = parseInt(prompt("Please enter birth year"), 10)
var birthYear = currentYear - userBirthYear;

console.log(birthYear +' ' + currentYear + ' ' + userBirthYear)
console.log('They are either ' + (birthYear-1)+ ' or ' + birthYear);


console.log('****The Lifetime Supply Calculator');
var currentAge = 38;
var maxAge = 80;
var estAmtPerDay = 5;
var totalDays = (maxAge - currentAge) * 365;
var totalSnacks = (totalDays * estAmtPerDay);
console.log('You will need ' + totalSnacks + ' to last you until the ripe old age of ' + maxAge);


console.log('****The Geometrizer');
var pi = 3.141592;
var radius = parseInt(prompt("Please enter radius as a whole number"), 10)
var circumference = (2 * radius) * pi;
console.log('The circumference is ' + circumference);
console.log('The area is ' + (radius*radius)*pi);



console.log('****The even/odd reporter')
for (var int = 0;int<=20;int++){
  if (int%2 == 0){
    console.log(int + ' Is Even');
  }
  else {
    console.log(int + ' Is Odd')
  }
}

console.log('****Multilpication Tables');
for (var int = 0;int<=10;int++){
  var result = int * 9;
  console.log(int + ' * 9 = ' + result);

  for (var int2 = 0;int2<=10;int2++){
      var result2 = int * int2;
      console.log(int + ' * ' + int2 + ' = ' + result2);
  }
}

console.log('****The Vegan test');
var menuChoice = prompt('Please enter menu choice');
var veganFriendly = false;

if ((menuChoice == 'fruit salad')||(menuChoice == 'tofurkey')) {
  veganFriendly = true;
}
console.log('Your Choice is ' + (veganFriendly ? 'Vegan Friendly' : 'Not Vegan Friendly or invalid'));
