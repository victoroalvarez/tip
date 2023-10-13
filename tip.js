// connect html to javascript
const range = document.getElementById("tipRange");
const tipOut = document.getElementById("percentOut");
const btnCalculate = document.getElementById("buttonCalculate");
const billAmount = document.getElementById("billAmount");
const resultArea = document.getElementById("result");

// control tip percent as user drags range selector
range.ondrag = function() {
    tipOut.innerHTML = range.value + "%";
}

// on button press, calculate tip and bill amount
buttonCalculate.onclick = function(){
    let theBill = parseFloat(billAmount.value);                     // parse bill amount input
    let tip = (theBill * (range.value/100)).toFixed(2);           // calculate tip amount 
    let total = (theBill + parseFloat(tip)).toFixed(2);             // calculate total
    // format result string
    let out = `<strong>Tip Amount:</strong> $${tip}<br/><strong>Total Bill:</strong> $${total}`;
    // set output as inner HTML content of the resultArea tag on the html document
    resultArea.innerHTML = out;
}