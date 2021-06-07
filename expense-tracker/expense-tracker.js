var expenseCounter = 0,
errorStyle = "border-color: red; border-width: 1px;";


function addExpense() {
    expenseCounter++;
    var expenseName = document.getElementById("expense-name").value;
    var expenseDate = document.getElementById("expense-date").value;
    var expenseAmount = document.getElementById("expense-amount").value;

    if(validateExpense(expenseName, expenseDate, expenseAmount)) {
        document.getElementById("expense-tbody").innerHTML += createExpenseRow(expenseName, expenseDate, expenseAmount);
        clearFields();
    }
}

function validateExpense(expenseName, expenseDate, expenseAmount) {
    var isNameValid = validateName(expenseName);
    var isDateValid = validateDate(expenseDate);
    var isAmountValid = validateAmount(expenseAmount);
    return isNameValid && isDateValid && isAmountValid;
}

function validateName(expenseName) {
    if(expenseName.length < 1) {
        document.getElementById("expense-name").style = errorStyle;
        return false;
    }
    document.getElementById("expense-name").style = null;
    return true;
}

function validateDate(expenseDate) {
    if(expenseDate.length < 1) {
        document.getElementById("expense-date").style = errorStyle;
        return false;
    }
    document.getElementById("expense-date").style = null;
    return true;
}

function validateAmount(expenseAmount) {
    var amount = Number(expenseAmount);
    if(isNaN(amount) || amount <= 0) {
        document.getElementById("expense-amount").style = errorStyle;
        return false;
    }
    document.getElementById("expense-amount").style = null;
    return true;
}

function createExpenseRow(expenseName, expenseDate, expenseAmount) {
    var rowItem = "<tr id='tr_" +expenseCounter + "'>"
    + "<td>" + expenseName + "</td>"
    + "<td>" + expenseDate + "</td>"
    + "<td> $ " + expenseAmount + "</td>"
    + "<td><button type='button' class='btn btn-danger' onclick=\"removeThisItem('tr_" +expenseCounter+ "')\">Remove Expense</button></td>"
    +"</tr>";

    return rowItem;
}

function removeThisItem(id) {
    var element = document.getElementById(id);
    element.parentNode.removeChild(element);
}

function clearFields() {
    document.getElementById("expense-name").value = '';
    document.getElementById("expense-date").value = '';
    document.getElementById("expense-amount").value = '';
}