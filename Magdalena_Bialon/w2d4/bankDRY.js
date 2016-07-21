console.log(' bank DRY js');
//works behind the scenes, doesn't update the tags in html - WORK ON THAT



var accounts = {
  savings: {
    balance: 0,
    deposit: function(amount) {
      accounts.savings.balance += amount;
    },
    withdraw: function(amount) {
      if (amount <= accounts.savings.balance) {
          accounts.savings.balance -= amount;
      } else {
        alert('use checkings');
        return false;
      }
    }
  },
  check: {
    balance: 0,
    deposit: function(amount) {
      accounts.check.balance += amount;
    },
    withdraw: function(amount) {
      if(amount >= accounts.check.balance){
        if((amount - accounts.check.balance) <= accounts.savings.balance){
              console.log('taking money from sav')
          var newBalance = amount - accounts.check.balance;
          console.log(newBalance)
          accounts.check.balance = 0;
          accounts.savings.balance -= newBalance ;
          console.log(accounts.savings.balance)
        } else {
          console.log('no money')
        }
      } else if (amount <= accounts.check.balance) {
        accounts.check.balance -= amount;
      } else {
        alert('no funds');
        return false;
      }
    }
  }
}


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


//function for sav & check
var calculate_money = function(accountsObj, accountType){
  accountType.innerHTML = accountsObj;
}


// SAVINGS button events
savingsDeposBtn.addEventListener('click', function(){
  var amount = Number(savingsInput.value);
  accounts.savings.deposit(amount);
  calculate_money(accounts.savings.balance, savingAccount);
});


savingsWithrBtn.addEventListener('click', function(){
  var amount = Number(savingsInput.value);
  accounts.savings.withdraw(amount);
  calculate_money(accounts.savings.balance, savingAccount);
});



// CHECKINGS button events
checkingsDeposBtn.addEventListener('click', function(){
  var amount = Number(checkingInput.value);
  accounts.check.deposit(amount);
  calculate_money(accounts.check.balance, checkingAccount);
});


checkingsWithrBtn.addEventListener('click', function(){
  var amount = Number(checkingInput.value);
  accounts.check.withdraw(amount);
  // CHANGE HERE UPDATE SAVINGS
  // accounts.savings.withdraw(amount-accounts.check.withdraw(amount));
  calculate_money(accounts.check.balance, checkingAccount);
});
