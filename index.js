var state = {
    balance: 3000,
    income: 0,
    expense: 0,
    items: [
        {name: 'Cash', type: 'income', amount: 5000},
        {name: 'Apartment', type: 'expense', amount: 1000},
        {name: 'Bus fare', type: 'expense', amount: 520}
    ]
}

var balanceState = document.getElementById('balanceTotal');
var incomeState = document.getElementById('incomeTotal');
var expenseState = document.getElementById('expenseTotal');
var itemsState = document.getElementById('itemsData')


function addIncome() {
    var input = document.getElementById('input').value

    if (input == '') {
        alert('Please fill in the empty')
        return
    } else {

        if (Vaild(amount) && Valid(state.items)) {
            state.items.push({
                name: state.items.length + 1,
                type: 'Income',
                amount,
            });
        }
        
    }

    state.items.push(input)
    document.getElementById('input').value = ''

    console.log(state.items)

    browser();
}

function addExpense() {
    var amount = document.getElementById('amount').value

    if (amount == '') {
        alert('Please fill in the empty')
        return
    } else {

        if (Vaild(amount) && Valid(state.items)) {
            state.items.push({
                name: state.items.length + 1,
                type: 'Expense',
                amount,
            });
        }

    }    

    state.items.push(amount)
    document.getElementById('amount').value = ''
    browser();

}

//run for browser

function browser() {
    balanceState.innerHTML = `R${state.balanceTotal}`
    incomeState.innerHTML = `R${state.incomeTotal}`
    expenseState.innerHTML = `R${state.expenseTotal}`

    itemsData = document.getElementById('itemsData') 

    itemsData.innerHTML = `<table>
    <tr>
          <th>Items</th>
          <th>Type</th>
          <th>Amount</th>
    </tr>
    </table>`

    for (let i = 0; i < state.items.length; i++) {
        itemsData.innerHTML += `<table>
        <td>${state.items[i].name}</td>
        <td>${state.items[i].type}</td>
        <td>${state.items[i].amount}</td>
        </table>`
        
    }
}
browser();