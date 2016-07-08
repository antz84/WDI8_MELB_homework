console.log('hi Sam'); 

var inputSave = document.getElementsByTagName('input')[0];
var inputCheck = document.getElementsByTagName('input')[1];

var btnSaveDep = document.getElementsByTagName('button')[0];
var btnSaveWith = document.getElementsByTagName('button')[1];
var btnCheckDep = document.getElementsByTagName('button')[2];
var btnCheckWith = document.getElementsByTagName('button')[3];
var savingCurrent = document.querySelector('#saveSpan');
var checkCurrent = document.querySelector('#checkSpan');



function savingsDeposit() {
  var currentBalance = savingCurrent.innerHTML;
  var input = inputSave.value;
  var newBalance = Number(currentBalance) + Number(input);
  saveSpan.innerHTML = newBalance;
}

function savingsWithdrawal() {
  var currentBalance = savingCurrent.innerHTML;
  var input = inputSave.value;
  var newBalance = Number(currentBalance) - Number(input);
  saveSpan.innerHTML = newBalance;
}

function checkingDeposit() {
  var currentBalance1 = checkCurrent.innerHTML;
  var input1 = inputCheck.value;
  var newBalance = Number(currentBalance1) + Number(input1);
  checkSpan.innerHTML = newBalance;
}

function checkingWithdrawal() {
  var currentBalance1 = checkCurrent.innerHTML;
  var input1 = inputCheck.value;
  var newBalance = Number(currentBalance1) - Number(input1);
  checkSpan.innerHTML = newBalance;
}


btnSaveDep.addEventListener('click', function() {
  savingsDeposit();
})

btnSaveWith.addEventListener('click', function() {
  savingsWithdrawal();
})

btnCheckDep.addEventListener('click', function() {
  checkingDeposit();
})

btnCheckWith.addEventListener('click', function() {
  checkingWithdrawal();
})