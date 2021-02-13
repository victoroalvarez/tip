const range = document.getElementById("tipRange");
const tipOut = document.getElementById("percentOut");
const btnCalculate = document.getElementById("btnCalculate");
const billAmount = document.getElementById("billAmount");
const resultArea = document.getElementById("resultArea");

range.ondrag = functionz() {
    tipOut.innerHTML = range.value + "%";
}

