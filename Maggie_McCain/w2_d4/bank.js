var withdrawBtn = document.getElementsByClassName('withdrawBtn')[0];
var depositBtn = document.getElementsByClassName('depositBtn')[0];
var inputSavings = document.getElementsByTagName('input')[0];
var savingsAccount = 100;
var savingsBalPosted = document.getElementById('savingsBalPosted');


savingsBalPosted.innerHTML = savingsAccount;

function withdrawChecking() {
  var inputCheckingQuan = parseInt(inputChecking.value, 10);
  if (inputCheckingQuan <= checkingAccount){
    checkingAccount = (checkingAccount - inputCheckingQuan);
    // console.log(inputSavingsQuan);
    // console.log(savingsAccount);
    checkingBalPosted.innerHTML = checkingAccount;
} else if (inputCheckingQuan > checkingAccount) {
    if ((inputCheckingQuan - checkingAccount) <= savingsAccount) {
    var takeFromSavings = (inputCheckingQuan - checkingAccount);
    checkingAccount = 0;
    checkingBalPosted.innerHTML = checkingAccount;
    savingsAccount = (savingsAccount - takeFromSavings);
    savingsBalPosted.innerHTML = savingsAccount;
  } else {alert('Sorry you do not have adequate funds');}
}}


function withdrawSavings() {
  var inputSavingsQuan = parseInt(inputSavings.value, 10);
  if (inputSavingsQuan <= savingsAccount) {
    savingsAccount = (savingsAccount - inputSavingsQuan);
    // console.log(inputSavingsQuan);
    // console.log(savingsAccount);
    savingsBalPosted.innerHTML = savingsAccount;
} else if (inputSavingsQuan > savingsAccount) {
    if ((inputSavingsQuan - savingsAccount) <= checkingAccount){
    var takeFromChecking = (inputSavingsQuan - savingsAccount);
    savingsAccount = 0;
    savingsBalPosted.innerHTML = savingsAccount;
    checkingAccount = (checkingAccount - takeFromChecking);
    checkingBalPosted.innerHTML = checkingAccount;
} else {alert('Sorry you are too poor');}
}}

withdrawBtn.addEventListener('click', withdrawSavings);

var withdrawBtn1 = document.getElementsByClassName('withdrawBtn')[1];
var depositBtn1 = document.getElementsByClassName('depositBtn')[1];
var inputChecking = document.getElementsByTagName('input')[1];
var checkingAccount = 500;
var checkingBalPosted = document.getElementById('checkingBalPosted');

checkingBalPosted.innerHTML = checkingAccount;

withdrawBtn1.addEventListener('click', withdrawChecking);


var depositBtn = document.getElementsByClassName('depositBtn')[0];
var inputSavings = document.getElementsByTagName('input')[0];
var savingsAccount = 100;
var savingsBalPosted = document.getElementById('savingsBalPosted');

//deposits money to savings
function depositSavings() {
  var inputSavingsQuan = parseInt(inputSavings.value, 10);
  savingsAccount = (savingsAccount + inputSavingsQuan);
  // console.log(inputSavingsQuan);
  // console.log(savingsAccount);
  savingsBalPosted.innerHTML = savingsAccount;
}

depositBtn.addEventListener('click', depositSavings);


var depositBtn1 = document.getElementsByClassName('depositBtn')[1];
var inputChecking = document.getElementsByTagName('input')[1];
var checkingAccount = 500;
var checkingBalPosted = document.getElementById('checkingBalPosted');

//deposits money to checking
function depositChecking() {
  var inputCheckingQuan = parseInt(inputChecking.value, 10);
  checkingAccount = (checkingAccount + inputCheckingQuan);
  // console.log(inputSavingsQuan);
  // console.log(savingsAccount);
  checkingBalPosted.innerHTML = checkingAccount;
}

depositBtn1.addEventListener('click', depositChecking);
