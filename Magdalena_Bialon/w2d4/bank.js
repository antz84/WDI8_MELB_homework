console.log('bank')
//savings money
var savingBalance = document.getElementById('savingsBalance');
var savAmountInput = document.getElementById('savingsAmount');

// savings buttons
var savDeposBtn = document.getElementsByClassName('btnSAav')[0];
var savWithrBtn = document.getElementsByClassName('btnSAav')[1];

//checkings money
var checkingBalance = document.getElementById('checkingsBalance');
var checkAmountInput = document.getElementById('checkingsAmount');

// checking buttons
var checkDeposBtn = document.getElementsByClassName('btnCHeck')[0];
var checkWithrBtn = document.getElementsByClassName('btnCHeck')[1];


//OPERATIONS FOR SAVINGS
var addInputSav = function(){
  var balanceAmountSav = Number(savingBalance.innerText);
  var inputAmountSav = Number(savAmountInput.value);
  var afterDeposMoney = balanceAmountSav + inputAmountSav;
  // console.log(afterDeposMoney);
  savingBalance.innerText = afterDeposMoney;
}

var substrInputSav = function(){
  var balanceAmountSav = Number(savingBalance.innerText);
  var inputAmountSav = Number(savAmountInput.value);
  if (balanceAmountSav < inputAmountSav){
    alert('YOU ARE BROKE, ACCES DENIED');
  } else {
    var afterWithdrawMoney = balanceAmountSav - inputAmountSav;
    savingBalance.innerText = afterWithdrawMoney;
  }
}


//OPERATIONS FOR CHECKINGS
var addInputCheck = function(){
  var balanceAmountCheck = Number(checkingBalance.innerText);
  var inputAmountCheck = Number(checkAmountInput.value);
  var afterDeposMoney = balanceAmountCheck + inputAmountCheck;
  // console.log(afterDeposMoney);
  checkingBalance.innerText = afterDeposMoney;
}

var substrInputCheck = function(){
  var balanceAmountCheck = Number(checkingBalance.innerText);
  var inputAmountCheck = Number(checkAmountInput.value);
  if (balanceAmountCheck < inputAmountCheck){
    alert('YOU ARE BROKE, ACCES DENIED');
  } else {
    var afterWithdrawMoney = balanceAmountCheck - inputAmountCheck;
    checkingBalance.innerText = afterWithdrawMoney;
  }
}


savDeposBtn.addEventListener('click', addInputSav);
savWithrBtn.addEventListener('click', substrInputSav);

checkDeposBtn.addEventListener('click', addInputCheck);
checkWithrBtn.addEventListener('click', substrInputCheck);


//************************************************//

//FOR BOTH ACCOUNTS substracting

//(balanceAmountCheck | balanceAmountSav, inputAmountCheck | inputAmountSav)
/*
var balanceAmountSav = Number(savingBalance.innerText);
var inputAmountSav = Number(savAmountInput.value);
var balanceAmountCheck = Number(checkingBalance.innerText);
var inputAmountCheck = Number(checkAmountInput.value);


var substrInput = function(balanceAmount, inputAmount, balance){
  if (balanceAmount < inputAmount){
      //work on if statement so that takes money from savings acc.
     alert('YOU ARE BROKE, ACCES DENIED');

  } else {
    var afterWithdrawMoney = balanceAmount - inputAmount;

    balance.innerText = afterWithdrawMoney;  // HELP ON THAAAT PLS NaN :////

    // console.log(balance);
  }
}
substrInput(balanceAmountSav,inputAmountSav, savingBalance);
substrInput(balanceAmountCheck,inputAmountCheck, checkingBalance);



savDeposBtn.addEventListener('click', addInputSav);
savWithrBtn.addEventListener('click', substrInput);

checkDeposBtn.addEventListener('click', addInputCheck);
checkWithrBtn.addEventListener('click', substrInput);
*/



/*
var savings = { balance: savingBalance, typeOfAccount: 'savings'}
var checkings = { balance: checkingBalance, typeOfAccount: 'checkings'}

accountObject >> savings ||  checkings
amountToDeposit >> deposit ||  withdraw
function deposits(accountObject, amountToDeposit){
  var blc = savingBalance;
  if(blc < amountToDeposit){
    if (bal + checkingBalance > amount)
    amount - bal;
    bal = 0;
    checkingBalance - amount
}  }
*/
