

var movePixels = 5;
var scale = 1.0;
var poke = document.getElementsByTagName('img')[0];
var goRight = true;
var start = document.getElementById('startPokeWalk');
var startBtn = document.getElementById('startPokeWalk');
var fasterBtn = document.getElementById('fasterPokeWalk');
var stopBtn = document.getElementById('stopPokeWalk');
var windowWidth = window.innerWidth;

// var stop = document.getElementById('stopPokeWalk');
// var faster = document.getElementById('fasterPokeWalk');
// var hasTimer;

function pokeWalk() {
  var currentLeft = parseInt(poke.style.left);

  if (goRight === true && currentLeft >= (windowWidth - poke.width)) {
    console.log('come back check check');
    goRight = false;
  }
  if (goRight === false && currentLeft <= 0) {
    console.log('trigger');
    goRight = true;
  }

  if (goRight === true) {
    poke.style.transform = "scaleX(1)";
    poke.style.left = (currentLeft + movePixels) + 'px';
  }

  if (goRight === false) {
    poke.style.transform = "scaleX(-1)";
    poke.style.left = (currentLeft - movePixels) + 'px';
  }
}



function startPokeWalk() {
  setInterval(pokeWalk,20);
}

function fasterPokeWalk() {
  setInterval(function() {
    pokeWalk(movePixels * 2);
  }, 20);
}

function stopPokeWalk() {
  for (var i = 0; i <= 100; i++) {
  clearInterval(i);
  }
}

startBtn.addEventListener('click', startPokeWalk);
// this addEventListener button gives a function to the startPokeWalk id which is the start button
fasterBtn.addEventListener('click', fasterPokeWalk);
stopBtn.addEventListener('click', stopPokeWalk);

// setInterval(callback,milliseconds);
// clearInterval(ref)

// poke is the img, style is the CSSStyleDeclaration and left is where it starts from which is 0px. parseInt converts the string into number, hence + 'px'
// can't use Number() this time, use parseInt(poke.style.left)
