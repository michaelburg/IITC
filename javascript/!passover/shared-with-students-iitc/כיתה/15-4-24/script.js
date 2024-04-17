let history = []; // array of object : num1,num2,operation , result
const elemNum1 = document.querySelector("#num1");
const elemNum2 = document.querySelector("#num2");
const elemResult = document.querySelector("#result");
const elemHistoryTable = document.querySelector("table");

function showHistory() {
  elemHistoryTable.innerHTML =
    "<tr><th>first number</th><th>operation</th><th>second number</th><th>result</th></tr>";
  for (const objHistory of history) {
    const elemRowInTable = `<tr><td>${objHistory.num1}</td><td>${objHistory.operation}</td><td>${objHistory.num2}</td><td>${objHistory.result}</td></tr>`;
    elemHistoryTable.innerHTML += elemRowInTable;
  }
}

function addHistoryItem(operation, result) {
  const objHistory = {
    num1: elemNum1.valueAsNumber,
    num2: elemNum2.valueAsNumber,
    operation: operation,
    result: result,
  };
  history.push(objHistory);
}

function addNumbers() {
  const sum = elemNum1.valueAsNumber + elemNum2.valueAsNumber;
  elemResult.innerText = sum;
  addHistoryItem("+", sum);
}

function mulNumbers() {
  const result = elemNum1.valueAsNumber * elemNum2.valueAsNumber;
  elemResult.innerText = result;
  addHistoryItem("*", result);
}

function divNumbers() {
  const result = elemNum1.valueAsNumber / elemNum2.valueAsNumber;
  elemResult.innerText = result;
  addHistoryItem("/", result);
}

function subtractNumbers() {
  const result = elemNum1.valueAsNumber - elemNum2.valueAsNumber;
  elemResult.innerText = result;
  addHistoryItem("-", result);
}


