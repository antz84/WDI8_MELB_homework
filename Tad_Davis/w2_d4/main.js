console.log("hey");

//******************************* Account 1 
//Buttons Buttons!
var deposit = document.querySelector('#depositBtn');
var withdrawBtn = document.querySelector('#withdrawBtn');

//the text box to put in and take away
var enterMoney = document.querySelector('#textBox');

// Displays the current amount
var display =  document.querySelector('#displayBal')

//*************************************************

//***********************************Account2

var checkdeposit = document.querySelector('#checkdepositBtn');
var checkwithdrawBtn = document.querySelector('#checkwithdrawBtn');

//the text box to put in and take away
var checkenterMoney = document.querySelector('#checktextBox');

// Displays the current amount
var checkdisplay =  document.querySelector('#checkdisplayBal');

//************************************************

//the two accounts
var currentAcc1 = 0;
var currentAcc2 = 0;



/*

function reachZero(){

if(currentAcc1 = ;)
	console.log("no money honey");

}
*/

//*********************************************************
// Functions for the savings
function adding(){

	 currentAcc1 = currentAcc1 + parseInt(enterMoney.value); 
	display.innerHTML = currentAcc1;

	}

function taking(){

	 currentAcc1 = currentAcc1 - parseInt(enterMoney.value); 
	display.innerHTML = currentAcc1;

	}
//***********************************************************
//functions for the Check 

function checkadding(){

	 currentAcc2 = currentAcc2 + parseInt(checkenterMoney.value); 
	checkdisplay.innerHTML = currentAcc2;

	}

function checktaking(){

	 currentAcc2 = currentAcc2 - parseInt(checkenterMoney.value); 
	checkdisplay.innerHTML = currentAcc2;

	}

//***************************************************************
 




//************************************************** MR BURNS FUNCTION

 (function(){
  
    var myDiv = document.getElementById("burns");

//var myDiv = document.getElementById('burns').style.display='block';

    var show = function(){
    	
      myDiv.style.display = "block";
      setTimeout(hide, 1300);  // 5 seconds
    }

    var hide = function(){
      myDiv.style.display = "none";
    }

    show();
  })();



//***********************************************************

//events for the savings  
deposit.addEventListener('click', adding);
withdrawBtn.addEventListener('click', taking);

//events for the withdrawing 
checkdeposit.addEventListener('click', checkadding);
checkwithdrawBtn.addEventListener('click', checktaking);
//***********************************************************************