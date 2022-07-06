var state = {
    array: [],
    balance: 1000,
    income: 0,
    expense: 0,
    items: [
        {name: 'Cash', type: 'income', amount: 5000},
        {name: 'Apartment', type: 'expense', amount: 1000},
        {name: 'Bus fare', type: 'expense', amount: 520}
    ]
}

var balanceState = document.getElementById('balance');
var incomeState = document.getElementById('income');
var expenseState = document.getElementById('expense');
var itemsState = document.getElementById('itemsData')


function addIncome() {
    var input = document.getElementById('input').value

    if (input == '') {
        alert('Please fill in the empty')
        return
    }

    state.array.push(input)
    document.getElementById('input').value = ''
    
}

function addExpense() {
    var amount = document.getElementById('amount').value

    if (amount == '') {
        alert('Please fill in the empty')
        return
    }

    state.array.push(amount)
    document.getElementById('amount').value = ''

}

//run for browser

function browser() {
    balanceState.innerHTML = `R${state.balance}`
    incomeState.innerHTML = `R${state.income}`
    expenseState.innerHTML = `R${state.expense}`
}
browser();