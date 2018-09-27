let personalAccount = {
  IBAN: 'FINDA23423433534',
  firstName : 'Brook',
  lastName : 'Habteselassie',
  address : 'ABC Helsinki Finland',
  telephone: '0988768764',
  email: 'brook@gmail.com',
  incomes : [{description : 'salary', amount :36000},
             {description: 'bonus', amount: 10000},
             {description: 'online courses', amount :5500}],
  expenses : [{descripton:'rent', amount:18000},
              {description:'shopping', amount: 6000},
              {descrition: 'travel', amount: 3000}],
  
  calculateTotal :(accumulator, currentValue) => accumulator + currentValue.amount,  

  totalIncome : function(){
    return this.incomes.reduce(this.calculateTotal, 0);
  },  

  totalExpense : function(total){        
    return this.expenses.reduce(this.calculateTotal, 0);
  },
  accountInfo: function () {
    return `<h2 id="accountSummaryTitle">Account Summary</h2>
            <div id="personalInfo">              
              <div class="accountDetail"><div class="key">Account Number:</div>  <div class="value">${personalAccount.IBAN}</div></div>
              <div class="accountDetail"><div class="key">Last Name:</div> <div class="value">${personalAccount.lastName}</div></div>
              <div class="accountDetail"><div class="key">First Name:</div> <div class="value">${personalAccount.firstName}</div></div>
              <div class="accountDetail"><div class="key">address:</div> <div class="value">${personalAccount.address}</div></div>
              <div class="accountDetail"><div class="key">Telephone:</div> <div class="value">${personalAccount.telephone}</div></div>
              <div class="accountDetail"><div class="key">Email:</div> <div class="value">${personalAccount.email}</div></div>
            </div>
            <div id="transactionSummary">              
              <div class="accountDetail"><div class="keytransaction">Total Income:</div> <div class="transValue"> ${personalAccount.totalIncome()}£</div></div>
              <div class="accountDetail"><div class="keytransaction">Total Expense:</div> <div class="transValue">${personalAccount.totalExpense()}£</div></div>
              <div class="accountDetail"><div class="keytransaction">Balance:</div> <div class="transValue">${personalAccount.totalIncome() - personalAccount.totalExpense()}£</div></div>
            </div> 
            `
  },
  accountBalance: function () {
    let blance =  0;
    return `Balance : ${this.totalIncome() - this.totalExpense()}`;
  },

  addIncome : function() {
    let incomeDescription = prompt('Enter income description');
    let incomeAmount = Number(prompt('Enter income amount'));
    this.incomes.push({description:incomeDescription, amount: incomeAmount});
  },

  addExpense : function() {
    let expenseDescription = prompt('Enter expense description');
    let expenseAmount = Number(prompt('Enter expense amout'));
    this.expenses.push({description: expenseDescription, amount: expenseAmount});
  }
}

/*
personalAccount.accountInfo();
personalAccount.addIncome();
personalAccount.addExpense();

*/

document.querySelector('#AccountInfo').innerHTML = personalAccount.accountInfo();
