let updateButton = document.getElementById("atualizar-saldo")!;
let clearButton = document.getElementById("limpar-saldo")!;

let sum = document.getElementById("soma")! as HTMLInputElement;
let balanceField = document.getElementById("campo-saldo")!;

let lastValue = document.getElementById("ultimo-valor")!;

let total = 0;

const clearSumField = (): void => {
  sum.value = "";
  sum.focus();
};

clearSumField();

const addToBalance = (sum: number): void => {
  total += sum;
  lastValue.innerHTML = sum.toString();
  balanceField.innerHTML = total.toString();
  clearSumField();
};

const clearBalance = (): void => {
  total = 0;
  lastValue.innerHTML = total.toString();
  balanceField.innerHTML = total.toString();
  clearSumField();
};

updateButton.addEventListener("click", () => {
  addToBalance(Number(sum.value));
  clearSumField();
});

clearButton.addEventListener("click", () => {
  clearBalance();
  clearSumField();
});
