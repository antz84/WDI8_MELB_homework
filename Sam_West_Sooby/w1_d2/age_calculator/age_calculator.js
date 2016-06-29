var currentYear = 2016;
var birthYear = 1990;
	
function calculateAge(birthYear, currentYear) {
    var age = currentYear - birthYear;
    console.log('You are either ' + age + ' or ' + (age - 1));
}

calculateAge(1990, 2016);