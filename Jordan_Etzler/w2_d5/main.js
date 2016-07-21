//1
var header = document.getElementsByClassName('h1')[1];

//2
function changeHeader() {
  header.innerHTML = "Friend?";
}

//3
var buttonRed = document.getElementsByClassName('button')[0];

function changeColor() {
  buttonRed.style.backgroundcolor = "red";
}

//4
var favouriteColor = document.getElementById('favCol');

//5
document.getElementsByClassName('div')[0].className = 'my-articles';

//6
var list = document.getElementsByTagName('li');
list.length('');
