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