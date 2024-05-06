budjet = 0;
income = 0;
expense = 0;

function submitAction() {
  action = document.getElementById("action").value;
  if (action == "add") add();
  else reduce();
}
function add() {
  actionDescription = document.getElementById("actionDescription").value;
  actionValue = parseFloat(document.getElementById("actionValue").value);
  income += actionValue;
  budjet += actionValue;
  parent = document.getElementById("incomes");
  newAction = document.createElement("div");
  newAction.id = "income";
  newAction.innerHTML = `
    <p class="description">${actionDescription}</p>
    <p class="income-amount">${actionValue}</p>
    <button class="cancel-button" onclick="cancel()">Cancel</button>
  `;
  parent.appendChild(newAction);
  setHead();
}
function reduce() {
  actionDescription = document.getElementById("actionDescription").value;
  actionValue = parseFloat(document.getElementById("actionValue").value);
  expense += actionValue;
  budjet -= actionValue;
  parent = document.getElementById("expenses");
  newAction = document.createElement("div");
  newAction.id = "expense";
  newAction.innerHTML = `
  <p class="description">${actionDescription}</p>
  <p class="income-amount">${actionValue}</p>
  <p id="percent">${parseInt((actionValue * 100) / income)}%</p>
  <button class="cancel-button" onclick="cancel()">Cancel</button>
`;
  parent.appendChild(newAction);
  setHead();
}
function setHead() {
  document.getElementById("totalBudjet").innerText = budjet;
  document.getElementById("totalIncome").innerText = income;
  document.getElementById("totalExpenses").innerText = expense;
  document.getElementById("totalPersant").innerText = `${parseInt(
    (expense * 100) / income
  )}%`;
}
function cancel() {
  const myElement = document.getElementById("myElement");
  const parentElement = myElement.parentElement;
}
