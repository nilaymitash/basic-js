function calculateTip(tipPercent) {
    var amt_before_tip = Number(document.getElementById("amt_before_tip").value);
    
    var tipValue = (tipPercent/100)*amt_before_tip;
    document.getElementById("tip_amt").value = tipValue;

    var total = amt_before_tip + tipValue;
    document.getElementById("total").value = total;
}