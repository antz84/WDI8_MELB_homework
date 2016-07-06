var cat = document.getElementsByTagName('img')[0];
var movePx = 25;
var startBtn = document.getElementsByTagName('button')[0];
var fasterBtn = document.getElementsByTagName('button')[1];
var stopBtn = document.getElementsByTagName('button')[2];
var int = 0;


function catWalk() {
  //moves cat one step perhaps
  var currentLeft = parseInt(cat.style.left);
  cat.style.left = (currentLeft + movePx) + 'px';
  if (currentLeft > (window.innerWidth - cat.width)){
    cat.style.transform="scale(-1,1)";
    cat.style.left = (currentLeft - movePx) + 'px';
}
}

    //setTimeout(function() {callback();}, 10);

    // cat.style.left = '0px';
    //mirror image
    // travel in opposite direction

function startCatWalk() {
 int = setInterval(catWalk, 50);
}

function fastCatWalk() {
  int = setInterval(catWalk, 10);
}

function stopCatWalk() {
 clearInterval(int);
 // var [int here] must be set to setInterval and be empty,
 // so just set var to both setInterval statements, and it
 //takes the log # from console and that's how it stops it
}

startBtn.addEventListener('click', startCatWalk);
fasterBtn.addEventListener('click', fastCatWalk);
stopBtn.addEventListener('click', stopCatWalk);

//stop when document.body.scrollWidth
