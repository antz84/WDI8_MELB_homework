
//1
document.getElementsByTagName('h1')[1];
//2

document.getElementsByTagName('h1')[1].innerHTML = 'Friend';

//3
function changeColor (){
 var changetoRed = document.body.style.background = 'red';
}

var btn = document.getElementsByTagName('button').addEventListener('click',changeColor);
