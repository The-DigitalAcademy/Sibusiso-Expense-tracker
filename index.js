var income = 0;
var expense = 0;
var balance = 0;
var items = [];

var itemsTable;

var inputS;
var amountS;

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

    browser();
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

    browser();
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
function browser() {

    var balanceTotal = document.getElementById('balanceTotal');
    var incomeTotal = document.getElementById('incomeTotal');
    var expenseTotal = document.getElementById('expenseTotal');
    itemsTable = document.getElementById('itemsTable');

    itemsTable.innerHTML = `<table>
    <tr>
          <th scope="col">Item</th>
          <th scope="col">Type</th>
          <th scope="col">Amount</th>
    </tr>
    </table>`;

    for (let i = 0; i < items.length; i++) {
        itemsTable.innerHTML += 
        
        `<table>

        <td>${items[i].item}</td>
        <td>${items[i].type}</td>
        <td>${items[i].amount}</td>

        </table>`;
    }

    incomeTotal.innerHTML = `R${income}`;
    expenseTotal.innerHTML = `R${expense}`;
    balanceTotal.innerHTML = `R${balance}`;
}

browser();