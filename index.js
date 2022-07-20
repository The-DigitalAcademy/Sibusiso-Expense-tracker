var income = 0;
var expense = 0;
var balance = 0;
var items = [];

var itemsTable;

var inputS;
var amountS;

function clearAlldata() {
    if (items.length == 0) {
        alert('Please fill in the empty');
        return;
    }
    if (window.confirm('Clear all your transaction?')) {
        items = [];
        calculate();
        displayonScreen();
    }
}

function link(value) {
    if (!value) {
      return false;
    }
    return true;
  }

function inputState() {
    amountS = Number (document.getElementById('amount').value);
    inputS = document.getElementById('itemsName').value;
}

function clearAllinput() {
    document.getElementById('itemsName').value = '';
    document.getElementById('amount').value = '';
}

function addIncome() {
    inputState();

    if (link(amountS) && link(inputS)) {
            items.push({
            item: inputS,
            type: 'Income', 
            amount: amountS,
        });

        calculate();
        clearAllinput();
    } else {
      alert('Please fill in the empty');
    }

    displayonScreen();
}

function addExpense() {
    inputState();

    if (link(amountS) && link(inputS)) {
            items.push({
            item: inputS,
            type: 'Expense', 
            amount: amountS,
        });

        calculate();
        clearAllinput();
    } else {
      alert('Please fill in the empty');
    }

    displayonScreen();
}

function calculate() {
    income = 0;
    expense = 0;
    balance = 0;

    for (let i = 0; i < items.length; i++) {
        if (items[i].type == 'Income') {
            income += items[i].amount;
        }
        if (items[i].type == 'Expense') {
            expense += items[i].amount;
        }
    }

    balance = income - expense;
}

//run for display in browser
function displayonScreen() {
    var balanceTotal = document.getElementById('balanceTotal');
    var incomeTotal = document.getElementById('incomeTotal');
    var expenseTotal = document.getElementById('expenseTotal');
    itemsTable = document.getElementById('itemsTable');

    itemsTable.innerHTML = `<table>
    <tr>
          <th>Item</th>
          <th>Type</th>
          <th>Amount</th>
    </tr>
    </table>`;

    for (let i = 0; i < items.length; i++) {
        itemsTable.innerHTML += 
        
        `<table>

        <td>${items[i].item}</td>
        <td>${items[i].type}</td>
        <td>R${items[i].amount}</td>

        </table>`;
    }

    incomeTotal.innerHTML = `R${income}`;
    expenseTotal.innerHTML = `R${expense}`;
    balanceTotal.innerHTML = `R${balance}`;
}

displayonScreen();