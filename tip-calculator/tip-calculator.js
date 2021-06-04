function calculateTip(tipPercent) {
    var isValid = validateAmount(Number(document.getElementById("amt_before_tip").value));

    if(isValid) {
        document.getElementById("tip_%_lbl").innerHTML = "(" + tipPercent + "%)&nbsp;";
    
        var amt_before_tip = Math.round((Number(document.getElementById("amt_before_tip").value) + Number.EPSILON) * 100) / 100;
        
        var tipValue = (tipPercent/100)*amt_before_tip;
        document.getElementById("tip_amt").value = Math.round((tipValue + Number.EPSILON) * 100) / 100;
    
        var total = amt_before_tip + tipValue;
        document.getElementById("total").value = Math.round((total + Number.EPSILON) * 100) / 100;
    }
}

function validateAmount(amount) {
    if(isNaN(amount) || amount <= 0) {
        displayErrorMessage("err_msg");
        clearFields();
        return false;
    }
    clearErrorMessage("err_msg");
    return true;
}

function displayErrorMessage(elementId) {
    document.getElementById(elementId).style = "color: red";
    document.getElementById(elementId).innerHTML = "Amount cannot be less than 0";
}

function clearFields() {
    document.getElementById("tip_amt").value = null;
    document.getElementById("total").value = null;
}

function clearErrorMessage(elementId) {
    document.getElementById(elementId).style = null;
    document.getElementById(elementId).innerHTML = null;
}