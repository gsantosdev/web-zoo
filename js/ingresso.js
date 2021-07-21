const VALOR_INGRESSO = 50;

function formataValor(valor) {
  return valor.toLocaleString("pt-br", { style: "currency", currency: "BRL" });
}

function onMount() {
  document.getElementById("valor-ingresso").textContent =
    formataValor(VALOR_INGRESSO);

  document.getElementById("valor-total").textContent = formataValor(0);
}

function somar() {}

function adicionar() {
  const nome = document.getElementById("ingressante").value.trim();

  if (nome.length < 8) {
    document.getElementById("erro").className = "visivel";
    return;
  }

  const item = document.createElement("li");
  item.appendChild(document.createTextNode(nome));

  const lista = document.getElementById("lista-compra");
  lista.appendChild(item);

  document.getElementById("erro").className = "invisivel";
}
