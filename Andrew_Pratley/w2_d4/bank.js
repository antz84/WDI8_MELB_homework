console.log('Bank');

var checkingDepositBtn = document.querySelector('#checking_deposit_btn');
var checkingWithdrawalBtn = document.querySelector('#checking_withdraw_btn');
var checkingInput = document.querySelector('#checking_input');
var checkingBalPrint = document.querySelector('#checking_bal_print');
var checkingBal = parseFloat(0.00);
var amtToDeduct = parseFloat(0.00);


function checkingDeposit () {
  if (checkingInput.value === "") {
  clearInput();
  } else {
  checkingBal += parseFloat(checkingInput.value);
  checkingBalPrint.innerHTML = "$ " + checkingBal.toFixed(2);
  clearInput();
  if (checkingBal >= 0) {
    document.querySelector('#checking_account').style.backgroundColor = 'green';
    }
  }
}

function checkingWithdrawal () {
  if (checkingInput.value === "") {
  clearInput();
  } else {
  if (parseFloat(checkingInput.value) <= checkingBal) {
  checkingBal -= parseFloat(checkingInput.value);
  checkingBalPrint.innerHTML = "$ " + checkingBal.toFixed(2);
  clearInput();
  } else {
    if (checkingInput.value > checkingBal + savingsBal) {
      clearInput();
    } else {
    amtToDeduct = parseFloat(checkingInput.value) - checkingBal;
    checkingBal = 0;
    checkingBalPrint.innerHTML = "$ " + checkingBal.toFixed(2);
    document.querySelector('#checking_account').style.backgroundColor = 'red';
    savingsBal -= amtToDeduct;
    savingsBalPrint.innerHTML = "$ " + savingsBal.toFixed(2);
    amtToDeduct = 0;
    clearInput();
    }
  }
  }
}
// This is to clear the input after a transaction and also if the transaction is ignored e.g. insufficient funds or bad input.
function clearInput () {
  checkingInput.value = '';
  checkingInput.focus();
  savingsInput.value = '';
  savingsInput.focus();
}

var savingsDepositBtn = document.querySelector('#savings_deposit_btn');
var savingsWithdrawalBtn = document.querySelector('#savings_withdraw_btn');
var savingsInput = document.querySelector('#savings_input');
var savingsBalPrint = document.querySelector('#savings_bal_print');
var savingsBal = parseFloat(0.00);

function savingsDeposit () {
  if (savingsInput.value === "") {
  clearInput();
  } else {
  savingsBal += parseFloat(savingsInput.value);
  savingsBalPrint.innerHTML = "$ " + savingsBal.toFixed(2);
  clearInput();
  }
}

function savingsWithdrawal () {
  if (savingsInput.value === "") {
  clearInput();
  } else {
  if (savingsInput.value > savingsBal) {
    clearInput();
  } else {
  savingsBal -= parseFloat(savingsInput.value);
  savingsBalPrint.innerHTML = "$ " + savingsBal.toFixed(2);
  clearInput();
  }
  }
}

//Button Listeners for all 4 buttons
checkingDepositBtn.addEventListener('click', checkingDeposit);
checkingWithdrawalBtn.addEventListener('click', checkingWithdrawal);
savingsDepositBtn.addEventListener('click', savingsDeposit);
savingsWithdrawalBtn.addEventListener('click', savingsWithdrawal);
