
var movePixels = 5;
var cat = document.getElementsByTagName('img')[0];
var startBtn = document.getElementsByTagName('button')[0];
var goFasterBtn = document.getElementsByTagName('button')[1];
var stopBtn = document.getElementsByTagName('button')[2];
var slowDownBtn = document.getElementsByTagName('button')[3];
var isCatMoving = false;
var currentLeft = 0;
var walkDirection = "right";
var reachedHalfWay = false;

function catWalk() { //moves the cat a little bit
  if (walkDirection === "right") {
    currentLeft = parseInt(cat.style.left);
    cat.style.left = (currentLeft + movePixels) + 'px';
    if ((currentLeft + cat.width) >= window.innerWidth) {
      walkDirection = "left";
      cat.style.transform = "rotatey(" + 180 + "deg)";
      cat.style.transitionDuration = "0.1s";
      }
    if ((currentLeft + cat.width) >= window.innerWidth/2) {
      if (reachedHalfWay === false) {
        stopCatWalk();
        cat.src="http://i.giphy.com/8HeVsR1DXqcgM.gif";
        setTimeout(startCatWalkAgain, 2000);
        reachedHalfWay = true;
      }
    }
  } else if (walkDirection === "left") {
    currentLeft = parseInt(cat.style.left);
    cat.style.left = (currentLeft - movePixels) + 'px';
    if (currentLeft + 150 <= window.innerWidth/2) {
      if (reachedHalfWay === true) {
        stopCatWalk();
        cat.src="http://i.giphy.com/8HeVsR1DXqcgM.gif";
        setTimeout(startCatWalkAgain, 2000);
        reachedHalfWay = false;
      }
    }
    if (currentLeft <= 0) {
      walkDirection = "right";
      cat.style.transform = "rotatey(" + 0 + "deg)";
      cat.style.transitionDuration = "0.1s";
    }
  }
}

function startCatWalkAgain () {
  cat.src="https://www.kasandbox.org/programming-images/misc/cat-walk.gif";
  startCatWalk();
}

function startCatWalk () {
  if (isCatMoving === false) {
  var ticket = setInterval(catWalk, 50);
  console.log(ticket);
  isCatMoving = true;
  }
}

function stopCatWalk () {
  isCatMoving = false;
  for (var i = 1; i < 99; i++)
    clearInterval(i);
}

function goFaster () {
  if (isCatMoving === true) {
    movePixels += 5;
  }
}

function slowDown () {
  if (movePixels >5) {
  movePixels -= 5;
  } else if (movePixels === 5) {
    movePixels -=5;
    isCatMoving = false;
    for (var i = 1; i < 99; i++)
      clearInterval(i);
    }
}

startBtn.addEventListener('click', startCatWalk);
stopBtn.addEventListener('click', stopCatWalk);
goFasterBtn.addEventListener('click', goFaster);
slowDownBtn.addEventListener('click', slowDown);

console.log(window.innerWidth);
