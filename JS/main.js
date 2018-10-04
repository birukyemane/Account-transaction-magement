// this object stores personal account info 
let personalAccount = {
  firstName : 'Brook',
  lastName : 'Habteselassie',
  incomes : [{description : 'salary', amount :36000, time:'09/03/2018 11:30'},
             {description: 'bonus', amount: 10000, time:'10/03/2018 11:30'},
             {description: 'online courses', amount :5500, time:'08/03/2018 11:30'}],
  expenses : [{description:'rent', amount:18000, time:'09/03/2018 11:30'},
              {description:'shopping', amount: 6000, time:'10/03/2018 11:30'},
              {description: 'travel', amount: 3000, time:'10/03/2018 11:30'}],

  calculateTotal :(accumulator, currentValue) => accumulator + currentValue.amount,  

  totalIncome : function(){
    return this.incomes.reduce(this.calculateTotal, 0);
  },  
  totalExpense : function(total){        
    return this.expenses.reduce(this.calculateTotal, 0);
  },  
  accountBalance: function () {
    return this.totalIncome() - this.totalExpense();
  },
  addIncome : function(description,amount,time) {  
    this.incomes.unshift({description, amount,time});
  },
  addExpense : function(description,amount,time) {    
    this.expenses.unshift({description, amount,time});
  },
  accountInfo: function (){
    return `<h2 id="mainTitle">Personal Account</h2>               
       <div id="name">Name: ${personalAccount.lastName} ${personalAccount.firstName}</div>
       <div id="balanceInfo">
        <div id="accountSummaryTitle">Total Income: ${personalAccount.totalIncome()}</div>
        <div id="accountSummaryTitle">Total Expense: ${personalAccount.totalExpense()}</div>
        <hr />
        <div id="accountSummaryTitle">Balance: ${personalAccount.accountBalance()}</div>
       </div>`;
  },
  summary: function (){
    let incomes = personalAccount.incomes.map(income =>{
      return `<div id="transactionInfo"> <div class="transactionDetail">${income.description}</div> 
      <div class="amount transactionDetail">${income.amount}</div>
      <div class="transactionDetail"> ${income.time}</div>
      </div>`;}).join('');
    let expenses = personalAccount.expenses.map(expense=>{
      return `<div id="transactionInfo"> <div class="transactionDetail">${expense.description}</div> 
      <div class="amount transactionDetail">${expense.amount}</div>
      <div class="transactionDetail"> ${expense.time}</div>
      </div>`;}).join('');
    return  `
    <div>
    <div id="addtransaction">
      <input type="text" id="description" placeholder="description">
      <input type="number" min="0" id="amount" placeholder="amount"> 
      <select name="transactionType" id="transactionType">
          <option>Expense</option>
          <option>Income</option>
      </select>
      <button id="addButton" onclick="personalAccount.add()">Add</button>
    </div>
    </div>
    <div id="summaryCointainer">      
      <div id="incomeSummary"> 
        <h2 class="summaryTitles">Incomes</h2>  
          <div id="transactionInfo"> 
            <div class="transactionDetail transactionTitle">Description</div> 
            <div class=" amount transactionDetail transactionTitle">Amount (£)</div>
            <div class="transactionDetail transactionTitle">Time</div> 
          </div>    
        ${incomes}
      </div>
      <div id="expenseSummary">
        <h2 class="summaryTitles">Expenses</h2>
          <div id="transactionInfo">
            <div class="transactionDetail transactionTitle">Description</div> 
            <div class=" amount transactionDetail transactionTitle">Amount (£)</div>
            <div class="transactionDetail transactionTitle">Time</div>
          </div>        
        ${expenses}   
      </div>    
    </div>`;
  },
  add : function (){
    let time = displayDateTime();
    let description = document.querySelector('#description').value;
    let amount = Number(document.querySelector('#amount').value);
    let type = document.querySelector('#transactionType').value;  
    if(type == 'Income') {
      personalAccount.addIncome(description,amount,time);
    }
    else {
      personalAccount.addExpense(description,amount,time);
    } 
    document.querySelector('#accountInfo').innerHTML = this.accountInfo();
    document.querySelector('#transactions').innerHTML = this.summary();
  }    
}

// helper functions 

function displayDateTime (){
  var today = new Date();
  var mn = today.getMinutes();
  var hh = today.getHours();
  var dd = today.getDate();
  var mm = today.getMonth()+1; //January is 0!
  var yyyy = today.getFullYear();

  if(dd<10) {
      dd = '0'+dd
  } 

  if(mm<10) {
      mm = '0'+mm
  } 

  today = mm + '/' + dd + '/' + yyyy + ' '+  hh + ':' + mn;
  return today;
}

// when page loads 

document.querySelector('#accountInfo').innerHTML = personalAccount.accountInfo();
document.querySelector('#transactions').innerHTML = personalAccount.summary();