var state = {
    balanceTotal: 3000,
    incomeTotal: 0,
    expenseTotal: 0,
    items: []
} 



function addIncome() {
    var input = document.getElementById('input').value

    if (input == '') {
        alert('Please fill in the empty');
        return
    }

    state.items.push(input);
    document.getElementById('input').value = '';

    browser();
}

function addExpense() {
    var amount = document.getElementById('amount').value

    if (amount == '') {
        alert('Please fill in the empty');
        return
    }  

    state.items.push(amount);
    document.getElementById('amount').value = '';

    browser();
}

function calculate() {
    for (let i = 0; i < state.items.length; i++) {
        if (items[i].type == 'Income') {
            income += state.items[i].amount;
        }
        if (items[i].type == 'Expense') {
            expense += state.items[i].amount;
        }
    }

    balanceTotal = incomeTotal - expenseTotal;
}

//run for browser

function browser() {

    var balanceState = document.getElementById('balanceTotal');
    var incomeState = document.getElementById('incomeTotal');
    var expenseState = document.getElementById('expenseTotal');


    itemsData = document.getElementById('itemsData');

    itemsData.innerHTML = `<table>
    <tr>
          <th>Item</th>
          <th>Type</th>
          <th>Amount</th>
    </tr>
    </table>`;

    for (let i = 0; i < state.items.length; i++) {
        itemsData.innerHTML += 
        
        `<table>
        <td>${state.items[i].item}</td>
        <td>${state.items[i].type}</td>
        <td>${state.items[i].amount}</td>
        </table>`;
        
    }

    balanceState.innerHTML = `R${state.balanceTotal}`;
    incomeState.innerHTML = `R${state.incomeTotal}`;
    expenseState.innerHTML = `R${state.expenseTotal}`;
}

browser();