const display = document.getElementById("display");
const number1 = document.getElementById("number1");
const number2 = document.getElementById("number2");
const addBtn = document.getElementById("add");

function add(a, b) {
  return a + b;
}

function displayResult() {
  const numberOneValue = parseInt(number1.value);
  const numberTwoValue = parseInt(number2.value);
  display.innerText = add(numberOneValue, numberTwoValue);
}

addBtn.addEventListener("click", displayResult);
