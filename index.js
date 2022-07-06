var state = {
    balance: 400,
    income: 0,
    expense: 0,
    item: [
        {items: 'Salary', type: 'Income', amount: 'R7 000'},
        {items: 'Bus fare', type: 'Expense', amount: 'R200'},
        {items: 'Foods', type: 'Expense', amount: 'R1 000'}
    ]
}

var balanceState = document.getElementById('balance');
var incomeState = document.getElementById('income');
var expenseState = document.getElementById('expense');
var itemState = document.getElementById('item')
var inputState = document.getElementById('input');
var amountState = document.getElementById('amount')

// run browser for internt
function browser() {
    console.log('the project started')
}

browser();


