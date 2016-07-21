console.log('bank')

// savings money
var savingBalance = document.getElementById('savingsBalance');
var savAmountInput = document.getElementById('savingsAmount');

console.log(savingBalance);

// savings buttons
var savDeposBtn = document.getElementsByClassName('btnSAav')[0];
var savWithrBtn = document.getElementsByClassName('btnSAav')[1];

//checkings money
var checkingBalance = document.getElementById('checkingsBalance');
var checkAmountInput = document.getElementById('checkingsAmount');

// checking buttons
var checkDeposBtn = document.getElementsByClassName('btnCHeck')[0];
var checkWithrBtn = document.getElementsByClassName('btnCHeck')[1];


var balanceAmountSav = Number(savingBalance.innerText);
var inputAmountSav = Number(savAmountInput.value);

var balanceAmountCheck = Number(checkingBalance.innerText);
var inputAmountCheck = Number(checkAmountInput.value);



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



// var substrInputSav = function(){
//   var balanceSav = Number(savingBalance.innerText);
//   var inputSav = Number(savAmountInput.value);
//   var balanceCheck = Number(checkingBalance.innerText);
//
//   if (inputSav <= balanceSav){
//     balanceSav = balanceSav - balanceSav;
//     savingBalance.innerText = balanceSav;
//
//   } else if (inputSav > balanceSav){
//       if((inputSav - balanceSav ) >= balanceCheck){
//         var afterSubstrBal = inputSav - balanceSav;
//         balanceSav = 0;
//         savingBalance.innerText = balanceSav;
//         balanceCheck = balanceCheck - afterSubstrBal;
//         checkingBalance.innerText = balanceAmountCheck;
//       }
//     } else {
//     alert('YOU ARE BROKE, ACCES DENIED');
//   }





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
    console.log(balance)
    console.log(afterWithdrawMoney)

    balance.innerText = afterWithdrawMoney;  // HELP ON THAAAT PLS NaN :////

    // console.log(balance);
  }
}
// substrInput(balanceAmountSav,inputAmountSav, savingBalance);
// substrInput(balanceAmountCheck,inputAmountCheck, checkingBalance);



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



//************************ dt ************************//

/*
var car1 = {
  make: 'ford'
}
var car2 = {
  make: 'ford'
}

//company to make severeal accounts

// account, operation, amount

var accounts = {
  savings: {

    balance: 0,

    deposit: function (amount) {
      accounts.savings.balance += amount;
    },

    withdraw: function(amount){
      if (amount <= accounts.savings.balance){
        accounts.savings.balance -= amount;
        return accounts.savings.balance;
      } else {
        return false;
      }
    }
  },

  checkings: {

  }
}


//DOM RELATED CODE
 document.guerySelector('button').addEventListener('click', function(){
  //grab the value from the input box
  var amount = doucment.querySelector('input').value;
  accounts.savings.deposit(amount);
});


//accounts.savings.withdraw (12)
//accounts.savings.balance >> 0
/*accounts.savings.withdraw(12); >> undefined
accounts.savings.balance; >> 20
accounts.savings.deposit(10); >> undefined
accounts.savings.balance; >> 30 */


// var savingAccounts = {
//   balance: 0,
//   deposit: function (amount) {
//     savingAccounts.balance += amount;
//   },
//   withdraw: function(){
//
//   }
// }
// To access  / use it  savingAccounts.balance
// To access / use it   savingAccounts.deposit
// like Math.random () math is an object
//in console:
//savingAccounts.deposit(50 >> undefined
// savingAccounts.balance >> 50
