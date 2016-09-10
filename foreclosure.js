'use strict';

var steve;
var stevesLoan;
var month = 0;
var monthsUntilEvicted;

function loan() {
  var account = {
    borrowed: 550000,
    balance: 286000,
    monthlyPayment: 1700,
    defaulted: 0,
    defaultsToForeclose: 5,
    foreclosed: false,
  };

  function  missPayment() {

    account.defaulted += 1;
    if (account.defaulted >= account.defaultsToForeclose) {

      account.foreclosed = true;
    }

  } // eof missPayment
  return {
    getBalance: function () {
      return account.balance;
    },
    receivePayment: function (amount) {
      if (amount < account.monthlyPayment) {
        missPayment();
      }
      // decrement the value of the balance property of the account variable
      // ?where to put: in the if or in the return?
      return account.balance -= amount;
    },
    getMonthlyPayment: function function_name() {
      return account.monthlyPayment;
    },
    isForeclosed: function () {
      return account.foreclosed;
    }
  }; //eof return object
} //eof loan

function borrower(loan) {
  var account = {
    monthlyIncome: 1350,
    funds: 2800,
    loan: loan
  };

return {
  getFunds: function () {
    return account.funds;
    },
  makePayment: function () {
    if ( account.funds > loan.getMonthlyPayment() ) {
      account.funds -= loan.getMonthlyPayment();
      loan.receivePayment(loan.getMonthlyPayment());
    } else {
        loan.receivePayment(account.funds);
        account.funds = 0;
      }
    return;
    },
  payDay: function () {
    return account.funds += account.monthlyIncome;
    }
  }; //eof return object

} // eof borrower

stevesLoan = loan(); // steveLoan is object
steve = borrower(stevesLoan);
while (stevesLoan.isForeclosed() === false) {
  steve.payDay();
  steve.makePayment();
  month += 1;
}

monthsUntilEvicted = 13;