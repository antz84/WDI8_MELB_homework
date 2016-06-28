// //Age Calculator
//
// var currentYear = (new Date()).getFullYear();
// var birthYear = prompt('Please enter year you were born');
// var ageDiff = currentYear - parseInt(birthYear);
//
// console.log('Your age is ' + ageDiff );


// //The Lifetime Supply Calulator
//
// var currentAge = prompt('What is your age?');
// var maximumAge = 80;
// var dailyConsumption = prompt('How much candy can you eat a day for the rest of your life?');
// var lifetimeConsumption = (((maximumAge - currentAge) * dailyConsumption) * 365);
//
// console.log("You're lifetime supply of candy would need to be " + lifetimeConsumption + " units.");
//

// //The Geometrizer
//
// var radius = prompt('What is the radius of the circle?');
// var circumference = 2 * Math.PI * radius
// var area = Math.PI * Math.pow(radius, 2);
//
// console.log('The circumference of the circle is ' + circumference + '.');
// console.log('The area of the cicle is ' + area + '.');
//

// //The Even/Odd Reporter
//
// for (num=1; num <21; num = num + 1) {
//   if (num === 0 || !!(num && !(num%2))) {
//     result = 'even';
//   } else {
//     result = 'odd';
//   }
// console.log (num + ' is ' + result + '.');
// }


// //Multiplication Tables (1-100 table)
//
// var table = [];
// for(var num = 1; num < 11; num++) {
//     table[num] = [];
//     for(var num2 = 1; num2 < 11; num2++) {
//         document.write(num*num2) ;
//         table[num].push(num*num2);
//     }
//     document.write("<br>");
// }
// console.table(table);


// //Vegan Test
//
// var menuOption = prompt('What would you like from the menu tonight? Yours choices are steak, fruit salad, tofurkey and pork chops.');
//
// if (menuOption == 'tofurkey') {
//   console.log('This cuisine is vegan friendly :)')
// } else {
//   console.log('Vegans beware!')
// }
