var state = {
    names: [],
    balance: 0,
    income: 0,
    expense: 0,
    items: [
        {name: 'Cash', type: 'income', amount: 5000},
        {name: 'Apartment', type: 'expense', amount: 1000},
        {name: 'Bus fare', type: 'expense', amount: 520}
    ]
}

var balanceState = document.getElementById('balance');
var balanceState = document.getElementById('income');
var balanceState = document.getElementById('expense');
var balanceState = document.getElementById('itemsData')


function addIncome() {
    var input = document.getElementById('input').value

    if (input == '') {
        alert('Please fill in the empty')
        return
    }

    state.names.push(input)
    document.getElementById('input').value = ''

    console.log(input);
}

function addExpense() {
    var amount = document.getElementById('amount').value

    if (amount == '') {
        alert('Please fill in the empty')
        return
    }

    state.names.push(amount)
    document.getElementById('amount').value = ''

    console.log(amount);
}

//run for browser

function broswer() {}
broswer();