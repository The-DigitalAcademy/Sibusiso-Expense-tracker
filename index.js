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

    state.items.push(input)
    document.getElementById('input').value = ''

    
}

function addExpense() {
    var amount = document.getElementById('amount').value

    if (amount == '') {
        alert('Please fill in the empty')
        return
    }

    state.items.push(amount)
    document.getElementById('amount').value = ''


}

//run for browser

function browser() {
    balanceState.innerHTML = `R${state.balance}`
    incomeState.innerHTML = `R${state.income}`
    expenseState.innerHTML = `R${state.expense}`

    itemsData = document.getElementById('itemsData') 

    itemsData.innerHTML = `<table>
    <tr>
          <th>Items</th>
          <th>Type</th>
          <th>Amount</th>
    </tr>
     <tr>
        <td>Cash</td>
        <td>Income</td>
        <td>R2 000</td>
        </tr>

        <tr>
        <td>Bus fare</td>
        <td>Expense</td>
        <td>R1 000</td>
        </tr>

        <tr>
        <td>Lunch</td>
        <td>Expense</td>
        <td>R500</td>
        </tr>
    </table>`

    for (let i = 0; i < state.items.length; i++) {
        itemsData.innerHTML += ``
        
    }
}
browser();