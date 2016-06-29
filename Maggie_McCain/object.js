console.log('objects');

//form
//var myObject = {};


//variable.property in console will print just that part or var[property]
//ex student.name or student['name'] outputs 'mj'

//in console, var property = 'age' then student[property] = 21
//can add a property in console ex student.surname = 'code_dependent'
var student = {
  'name' : 'mj',
  'age' : 21
};

var wdi8 = {
  'class name' : 'code_dependent',
  awesome : true,
  studentCount : 10.

};

//use array for a property that is a collection of things
// form: var students = []
//each value is a locker. 'tad' is a locker
//var students = ['tad', 'dean', '']

var languages = ['js', 'ruby', 'scala', 'php', 'basic'];
//arrays are ordered (note: index), objects are not

//METHODS
//.reverse -reverses array.  array_name.reverse();

//.push - adds elements to end of array. array_name.push('element to add', 'add me');

//.splice - removes elements from array by index. array.splice(0,1);
//--> removes up to the  number but not that number itself so (0,1) not inclusive
// --> array_name.splice(0,1, 'newelement', 'newelement1') -  deleting and adding
// --> .splice changes the original array.

//.slice(startindex,endindex) - goes from start point until the end index in the array
// and returns a new array. doesn't change original array.

//.sort - sorts elements inside array by character code. array.sort()
// can tell it how to sort
//-->changes original array

//.shift -changes original array by shifting out the first element and pushes everything fwd

//.pop - removes last element. array.pop();

//.concat - leaves orig arrays unchanged var newArray = array1.concat(array2)

//arrays can go inside objects

var wdi8 = {
  'class name' : 'code_dependent',
  awesome : true,
  studentCount : 10,
  students : ['tad', 'dean', '']
};
