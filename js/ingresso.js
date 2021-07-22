const VALOR_INGRESSO = 50;

function formataValor(valor) {
  return valor.toLocaleString("pt-br", { minimumFractionDigits: 2 });
}

function somarTotal() {
  const campo = document.getElementById("valor-total");
  const total = Number(campo.textContent.replace(",", ".")) + VALOR_INGRESSO;
  campo.textContent = formataValor(total);
}

function zerarTotal() {
  const campo = document.getElementById("valor-total");
  campo.textContent = formataValor(0);
}

function onMount() {
  document.getElementById("valor-ingresso").textContent =
    formataValor(VALOR_INGRESSO);

  zerarTotal();

  document.getElementById("ingressante").addEventListener("keyup", (evento) => {
    if (evento.key === "Enter") {
      evento.preventDefault();
      document.getElementById("adicionar").click();
    }
  });

  document.getElementById("email").addEventListener("keyup", (evento) => {
    if (evento.key === "Enter") {
      evento.preventDefault();
      document.getElementById("efetuar").click();
    }
  });
}

function adicionar() {
  const campo = document.getElementById("ingressante");
  const nome = campo.value.trim();

  if (nome.length < 8) {
    document.getElementById("erro-nome").className = "visivel";
    return;
  }

  const lista = document.getElementById("lista-compra");
  const item = document.createElement("li");
  const numero = lista.getElementsByTagName("li").length + 1;

  item.appendChild(document.createTextNode(`#${numero}: ${nome}`));
  lista.appendChild(item);

  somarTotal();

  campo.value = "";
  document.getElementById("erro-nome").className = "invisivel";
}

function efetuar() {
  const lista = document.getElementById("lista-compra");

  if (!lista.getElementsByTagName("li").length) {
    document.getElementById("erro-nome").className = "visivel";
    return;
  }

  const campo = document.getElementById("email");
  const email = campo.value.trim();
  const re = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;

  if (!re.test(email)) {
    document.getElementById("erro-email").className = "visivel";
    return;
  }

  lista.innerHTML = "";

  zerarTotal();

  campo.value = "";
  document.getElementById("erro-email").className = "invisivel";

  alert("Reserva efetuada! Para mais informações, verifique seu e-mail.");
}
