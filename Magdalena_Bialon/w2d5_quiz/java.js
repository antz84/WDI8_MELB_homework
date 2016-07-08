//q1
document.getElementsByTagName('h1')[1];

//q2
var element1 = document.getElementsByTagName('h1')[0];
var element2 = document.getElementsByTagName('h1')[1];
element1.innerHTML = 'Friend';
element2.innerHTML = 'Friend';


//q3
var btn1 = document.getElementsByTagName('button')[0];
var myDiv = document.getElementsByTagName('div')[0];

function changeClr(){
  myDiv.style.backgroundColor = 'red';
}

btn1.addEventListener('click', changeClr);


//g4
var idfavCol = document.getElementById('favCol');
var favouriteColor = idfavCol.value;


//q5
var paragraphIn = document.querySelector('.my-articles');
var myDiv = getElementsByTagName('div')[0];

var addParagraph = function(){
  var paragraph = paragraphIn.value;

  var newPar = document.createElement('p');
  var textPar = document.createTextNode(paragraph);

  newPar.appendChild(textPar);
  // console.log(newPar);

  myDiv.appendChild(newPar);
  paragraphIn.value = '';
  paragraphIn.focus();
};


//q6
// var myUl = document.getElementsByTagName('ul');
var myLi = document.getElementsByTagName('li'); //which is an array

var amounOfli = myLi.length;
