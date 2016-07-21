
//Savings Variables
var savingsBalance = document.querySelector('#savingsBalance');
var savingsEntry = document.querySelector('#savingsEntry');
var sWithdrawButton = document.querySelector('#savingsWithdraw');
var sDepositButton = document.querySelector('#savingDeposit');

// Deposit Variables
var chequeBalance = document.querySelector('#chequeBalance');
var chequeEntry = document.querySelector('#chequeEntry');
var cWithdrawButton = document.querySelector('#chequeWithdraw');
var cDepositButton = document.querySelector('#depositDeposit');


//Saving Functions
function savingsDeposit() {
  var inputAmount = savingsEntry.value;
  var currentBalance = savingsBalance.innerHTML;
  var newBalance = Number(currentBalance) + Number(inputAmount);
  savingsBalance.innerHTML = newBalance;
}

function savingWithdrawl() {
  var inputAmount = savingsEntry.value;
  var currentBalance = savingsBalance.innerHTML;
  var newBalance = negativeCheckSavings(inputAmount, currentBalance);
  savingsBalance.innerHTML = newBalance;
}

//Cheque Functions
function chequeDeposit() {
  var inputAmount = chequeEntry.value;
  var currentBalance = chequeBalance.innerHTML;
  var newBalance = Number(currentBalance) + Number(inputAmount);
  chequeBalance.innerHTML = newBalance;
}

function chequeWithdrawl() {
  var inputAmount = chequeEntry.value;
  var currentBalance = chequeBalance.innerHTML;
  var newBalance = negativeCheckCheque(inputAmount, currentBalance);
  chequeBalance.innerHTML = newBalance;
}


//Validation Functions
function negativeCheckCheque (input, current) {
  var oppositeBalance = savingsBalance.innerHTML;
  if ( Number(input) <= Number(current) ) {
    return Number(current) - Number(input);
  } else if ( (Number(input) > ( Number(current) + Number(oppositeBalance) ) ) ){
    return current;
  } else {
    var defecit = Number(input) - Number(current);
    var newBalance2 = Number(oppositeBalance) - defecit;
    savingsBalance.innerHTML = newBalance2;
    return 0.00;
  }
}

function negativeCheckSavings (input, current) {
  var oppositeBalance = chequeBalance.innerHTML;
  if ( Number(input) <= Number(current) ) {
    return Number(current) - Number(input);
  } else if ( (Number(input) > ( Number(current) + Number(oppositeBalance) ) ) ){
    return current;
  } else {
    var defecit = Number(input) - Number(current);
    var newBalance2 = Number(oppositeBalance) - defecit;
    chequeBalance.innerHTML = newBalance2;
    return 0.00;
  }
}

//Savings Listeners
sWithdrawButton.addEventListener('click', function () {
  savingWithdrawl()
} );
sDepositButton.addEventListener('click', function () {
  savingsDeposit()
} );

//Cheque Listeners
cWithdrawButton.addEventListener('click', function () {
  chequeWithdrawl()
} );
cDepositButton.addEventListener('click', function () {
  chequeDeposit()
});
