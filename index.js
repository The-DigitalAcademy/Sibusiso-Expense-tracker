var state = {
    balance: 500,
    income: 600,
    expense: 10,
    names: [],
    items: [
        {item: 'Salary', type: 'income', amount: 7000 },
        {item: 'Bus fare', type: 'expense', amount: 200 },
        {item: 'Foods', type: 'expense', amount: 1000 }
    ]
}

var balanceSt = document.getElementById('balance');
var incomeSt = document.getElementById('income');
var expenseSt = document.getElementById('expense');
var itemsSt = document.getElementById('itemsDisplay')
// var inputSt = document.getElementById('input');
// var amountSt = document.getElementById('amount')

function addIncome() {
    console.log('hjbvhgg')
}

// run browser for internt
function browser() {
    balanceSt.innerHTML = `R${state.balance}`
    incomeSt.innerHTML = `R${state.income}`
    expenseSt.innerHTML = `R${state.expense}`
}
browser();


