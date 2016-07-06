console.log('dancing Cat')


var cat = document.getElementsByTagName('img')[0];
var movePixels = 5;
var intervalStart = 30;
var intervalFaster = 10;
var intervalDancingCat = 500;


var dancingCat = document.getElementsByTagName('img')[1];


var buttonStart = document.getElementsByTagName('button')[0];
var buttonFaster = document.getElementsByTagName('button')[1];
var buttonStop = document.getElementsByTagName('button')[2];

var walkForwards = true;


function catWalk () {
  var currentLeft = parseInt(cat.style.left);
// cat.style.left = (currentLeft + movePixels) + 'px';  //into a number, calculations and in the end pix



  if (walkForwards && (currentLeft > (window.innerWidth-cat.width))) {
    walkForwards = false;
  }

  if (!walkForwards && (currentLeft <= 0)) {
    walkForwards = true;
  }


//HALFWAY DANCING CAT
  if (walkForwards && (currentLeft > (window.innerWidth/2-cat.width))){

  //RIGHT -> FORWARD
    cat.style.left = (currentLeft + movePixels) + 'px';
    // cat.display="none";

    var showDancingCatRight = function(){
      setTimeout(hide, intervalDancingCat);
      cat.style.display="none";
      dancingCat.style.display="inline-block";
      // setTimeout(hide, 900);
    }

    var hide = function(){
      cat.style.display="inline-block";
      dancingCat.style.display = "none";
    }
    showDancingCatRight();

     //var showDancingCat = setTimeout(function(){dancingCat.style.display="inline-block";;}, 5000 );
  }



//OK walking CAT
  if (walkForwards) {
    cat.style.left = (currentLeft + movePixels) + 'px';
    cat.style.transform="scale(1,1)";


  } else {
    cat.style.left = (currentLeft - movePixels) + 'px';
    // console.dir(cat.style);
    cat.style.transform="scale(-1,1)";
  }

//HALFWAY DANCING CAT     ???  LEFT -> BACK  ???
// var walkForwards = false;
//   if (!walkForwards && (currentLeft < (window.innerWidth/2-cat.width))){
//
//   // ???  LEFT -> BACK  ???
//     cat.style.left = (currentLeft - movePixels) + 'px';
//     // cat.display="none";
//
//     var showDancingCatLeft = function(){
//       setTimeout(hide, 900);
//       cat.style.display="none";
//       dancingCat.style.display="inline-block";
//       // setTimeout(hide, 900);
//     }
//
//     var hide = function(){
//       cat.style.display="inline-block";
//       dancingCat.style.display = "none";
//     }
//     showDancingCatLeft();
// }

};



var alreadyRunning = false;

function startCatWalk () {
   if (alreadyRunning === false){
    //  console.log('start');
     catTimer = setInterval(catWalk, intervalStart);
     alreadyRunning = true;
   }
  //setInterval (callback fcn, timeinterval in milisec);
  //clearInterval(referenceNumber);
};

function walkFaster (){
  stopWalk();
  alreadyRunning = true;
  catTimer = setInterval(catWalk, intervalFaster);
};


function stopWalk (){
  if (alreadyRunning === true){
    clearInterval(catTimer);
    alreadyRunning = false;
  }
  // clearInterval(catTimer);
  //   catTimer = window.clearInterval(catTimer); ??
};




buttonStart.addEventListener('click', startCatWalk);

buttonFaster.addEventListener('click', walkFaster);

buttonStop.addEventListener('click', stopWalk);
