var expenseCounter = 0;

function addExpense() {
    expenseCounter++;
    var expenseName = document.getElementById("expense-name").value;
    var expenseDate = document.getElementById("expense-date").value;
    var expenseAmount = document.getElementById("expense-amount").value;

    document.getElementById("expense-tbody").innerHTML += createExpenseRow(expenseName, expenseDate, expenseAmount);
}

function createExpenseRow(expenseName, expenseDate, expenseAmount) {
    var rowItem = "<tr id='tr_" +expenseCounter + "'>"
    + "<td>" + expenseName + "</td>"
    + "<td>" + expenseDate + "</td>"
    + "<td> $" + expenseAmount + "</td>"
    + "<td><button type='button' class='btn btn-danger' onclick=\"removeThisItem('tr_" +expenseCounter+ "')\">Remove Expense</button></td>"
    +"</tr>";

    return rowItem;
}

function removeThisItem(id) {
    var element = document.getElementById(id);
    element.parentNode.removeChild(element);
}
