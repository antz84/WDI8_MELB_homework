console.log('bank Better one');


// SAVINGS
var savingAccount = document.getElementById('savingsBalance');
var savingsInput = document.getElementById('savingsAmount');

var savingsDeposBtn = document.getElementsByClassName('btnSAav')[0];
var savingsWithrBtn = document.getElementsByClassName('btnSAav')[1];


// CHECKINGS
var checkingAccount = document.getElementById('checkingsBalance');
var checkingInput = document.getElementById('checkingsAmount');

var checkingsDeposBtn = document.getElementsByClassName('btnCHeck')[0];
var checkingsWithrBtn = document.getElementsByClassName('btnCHeck')[1];


// SILLY CATS
var cat = document.getElementById('cat');
var greedyCat = document.getElementById('cat2');
var catFail = document.getElementById('cat3');
var catBroke = document.getElementById('cat4');


// I cant assign them outside the fcn as user must provide input :)
// balanceAmountSav, inputAmountSav  || balanceAmountCheck, inputAmountCheck



// **** OPERATIONS FOR SAVINGS ****
var depositSavings = function(){

  var balance = Number(savingAccount.innerText);
  var input = Number(savingsInput.value);

  var newBalance = balance + input;
  // console.log(newBalance);
  savingAccount.innerText = newBalance;

  savingAccount.style.backgroundColor = 'white';
  cat.style.display='inline-block';
  catFail.style.display='none';
  greedyCat.style.display='none';
  catBroke.style.display='none';

};


var withdrawSavings = function(){

   var balance = Number(savingAccount.innerText);
   var input = Number(savingsInput.value);
   if (balance < input){
     alert(' YOU ARE POOR MAN  ->  USE CHECKINGS'+'\n' +' ACCES DENIED AS YOU CAN\' HAVE DEBIT ON SAVINGS');

     savingAccount.style.backgroundColor = 'red';
     catFail.style='inline-block';
     cat.style.display='none';

   } else if (balance >= input){
     var newBalance = balance - input;
     savingAccount.innerText = newBalance;
   }

};



// **** OPERATIONS FOR CHECKINGS ****
var depositCheckings = function(){

  var balance = Number(checkingAccount.innerText);
  var input = Number(checkingInput.value);
  var newBalance = balance + input;
  // console.log(newBalance);
  checkingAccount.innerText = newBalance;

  checkingAccount.style.backgroundColor = 'white';
  cat.style.display='inline-block';
  greedyCat.style.display='none';

};



var withdrawCheckings = function(){

  var balance = Number(checkingAccount.innerText);
  var input = Number(checkingInput.value);
  var balSavings = Number(savingAccount.innerText);

  if(balance < input){
    if((input - balance) <= balSavings){
      var newBalance = input - balance;
      balance = 0;
      balSavings -= newBalance;
      checkingAccount.innerText = balance;
      savingAccount.innerText = balSavings;

      checkingAccount.style.backgroundColor = 'red';
      savingAccount.style.backgroundColor = 'yellow';
      greedyCat.style='inline-block';
      cat.style.display='none';
      catBroke.style.display='none';
    }

  } else if (balance >= input){
      var newBalance = balance - input;
      checkingAccount.innerText = newBalance;
      // greedyCat.style="none";
      // cat.style.display="inline-block";
  }

  if ((balance === 0) && (balSavings === 0)){
    checkingAccount.style.backgroundColor = 'red';
    savingAccount.style.backgroundColor = 'red';
    catBroke.style.display='inline-block';
    catFail.style.display='none';
    greedyCat.style.display='none';
    cat.style.display='none';
    alert('YOU ARE BROKE, ACCES DENIED');
  }

};



savingsDeposBtn.addEventListener('click', depositSavings);
savingsWithrBtn.addEventListener('click', withdrawSavings);

checkingsDeposBtn.addEventListener('click', depositCheckings);
checkingsWithrBtn.addEventListener('click', withdrawCheckings);
