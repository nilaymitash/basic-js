function calculateTip(tipPercent) {
    document.getElementById("tip_%_lbl").innerHTML = "(" + tipPercent + "%)&nbsp;";

    
    var amt_before_tip = Math.round((Number(document.getElementById("amt_before_tip").value) + Number.EPSILON) * 100) / 100;
    
    var tipValue = (tipPercent/100)*amt_before_tip;
    document.getElementById("tip_amt").value = Math.round((tipValue + Number.EPSILON) * 100) / 100;

    var total = amt_before_tip + tipValue;
    document.getElementById("total").value = Math.round((total + Number.EPSILON) * 100) / 100;
}