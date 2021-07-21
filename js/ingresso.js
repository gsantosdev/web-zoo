const VALOR_INGRESSO = 50;

function formataValor(valor) {
  return valor.toLocaleString('pt-br', {minimumFractionDigits: 2});
}

function onMount() {
  document.getElementById("valor-ingresso").textContent =
    formataValor(VALOR_INGRESSO);

  document.getElementById("valor-total").textContent = formataValor(0);

  document.getElementById("ingressante").addEventListener("keyup", (evento) => {
    if (evento.key === "Enter") {
      evento.preventDefault();
      document.getElementById("adicionar").click();
     }
  });
}

function somar() {
  const campo = document.getElementById("valor-total");
  const total = Number(campo.textContent.replace(",", ".")) + VALOR_INGRESSO;
  campo.textContent = total;
}

function adicionar() {
  const campo = document.getElementById("ingressante");
  const nome = campo.value.trim();

  if (nome.length < 8) {
    document.getElementById("erro").className = "visivel";
    return;
  }

  const item = document.createElement("li");
  item.appendChild(document.createTextNode(nome));

  const lista = document.getElementById("lista-compra");
  lista.appendChild(item);

  somar();

  campo.value = "";
  document.getElementById("erro").className = "invisivel";
}
