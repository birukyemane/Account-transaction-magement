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
            <div id="accountSummary">              
              <div class="accountDetail"><div class="keytransaction">Total Income:</div> <div class="transValue"> <p>${personalAccount.totalIncome()} £</p></div></div>
              <div class="accountDetail"><div class="keytransaction">Total Expense:</div> <div class="transValue"><p>${personalAccount.totalExpense()} £</p></div></div>
              <div class="accountDetail"><div class="keytransaction">Balance:</div> <div class="transValue"><p>${personalAccount.totalIncome() - personalAccount.totalExpense()} £</p></div></div>
            </div> 
            `
  },
  dailyTransactions: ()=>{
    return `
    <h2 id="TransactionTitle">Transactions</h2>
    <div id="transactionInput" >
      <input type="text" id="description" placeholder="description"> <input type="text" id="amount" placeholder="amount"> 
      <select name="transactionType" id="transactionType">
          <option>Expense</option>
          <option>Income</option>
      </select>
      <button id="Add" onclick="addTransactioin()">Add</button>
    </div>
    <div id="transactionSummary">
      
    </div>
    `
    },
  accountBalance: function () {
    let blance =  0;
    return `Balance : ${this.totalIncome() - this.totalExpense()}`;
  },

  addIncome : function(description,amount) {  
    console.log(description);  
    this.incomes.push({description, amount});
  },

  addExpense : function(description,amount) {    
    this.expenses.push({description, amount});
  }
}

/*
personalAccount.accountInfo();
personalAccount.addIncome();
personalAccount.addExpense();

*/

function accountInfo(){
document.querySelector('#container').innerHTML = personalAccount.accountInfo();
}

function dailyTransactions (){
  document.querySelector('#container').innerHTML = personalAccount.dailyTransactions();
}

function addTransactioin(){
  let description = document.querySelector('#description').value;
  let amount = Number(document.querySelector('#amount').value);
  let type = document.querySelector('#transactionType').value;
  if(type =='Income'){
    console.log(description);
    personalAccount.addIncome(description,amount);
  }else {
    personalAccount.addExpense(description,amount);
  }
}