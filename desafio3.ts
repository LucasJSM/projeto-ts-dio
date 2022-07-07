let botaoAtualizar = document.getElementById("atualizar-saldo")!;
let botaoLimpar = document.getElementById("limpar-saldo")!;

let soma = document.getElementById("soma")! as HTMLInputElement;
let campoSaldo = document.getElementById("campo-saldo")!;

let ultimoValor = document.getElementById("ultimo-valor")!;

let total = 0;

const limparCampoSoma = (): void => {
  soma.value = "";
  soma.focus();
};

limparCampoSoma();

const somarAoSaldo = (soma: number): void => {
  total += soma;
  ultimoValor.innerHTML = soma.toString();
  campoSaldo.innerHTML = total.toString();
  limparCampoSoma();
};

const limparSaldo = (): void => {
  total = 0;
  ultimoValor.innerHTML = total.toString();
  campoSaldo.innerHTML = total.toString();
  limparCampoSoma();
};

botaoAtualizar.addEventListener("click", () => {
  somarAoSaldo(Number(soma.value));
  limparCampoSoma();
});

botaoLimpar.addEventListener("click", () => {
  limparSaldo();
  limparCampoSoma();
});
