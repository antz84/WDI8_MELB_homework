console.log("The age calculator");
var currentYear = 2016;
var birthYear = 1984;

var age = currentYear - birthYear;
var age2 = age+1;

console.log("They are either " + age + " or " + age2 );

//Second Question
console.log("");
console.log("The lifetime  Supply calculator")

var lifeAge = 32;
var longestAge = 98;
var dailyIntake = 3;
var yearlyIntake = dailyIntake * 365;

var average = (longestAge - lifeAge) * yearlyIntake;

console.log("You will need " + average + " to last to the ripe old age of " + longestAge );

//Third Question
console.log("The Geometrizer");

var pi = 3.141592
var radius = 10;
var diameter = 2 * radius;
var circumfrence = pi * diameter;
var area = pi * (radius * radius);

console.log("the circumfrence is " + circumfrence);
console.log("the area is" + area);

//Fourth Question

for(i = 0; i < 20; i++){

    if(i % 2 == 0 ){
        console.log(i + " is even");
    }
    else{
        console.log(i + " is odd")
    }
}
//Fifth Question
console.log("");


for(i = 0; i <10; i++){
    console.log(i + "* 9 = " + i * 9 )
}

//Sixth Question
console.log("");

console.log("On the menu tonight: Steak, fruit salad, tofurkey, pork chops");

var food = prompt("what would you like to eat tonight.");

if((food == "Steak")||(food == "pork chops")){
    console.log("Vegans beware");
}
else if ((food == "fruit salad")||(food == "tofurkey")) {
    console.log("This food is vegan friendly noice");
}
else{
    console.log("This is not on our menu tonight");
}
