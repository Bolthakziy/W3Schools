let amigos = [];

const adicionar = document.getElementById("adicionar");
adicionar.addEventListener("click", adicionarAmigos);

function visorAmigos() {
  let mensagem = "";

  for (let i = 0; i < amigos.length; i++) {
    mensagem += "<li>" + amigos[i] + " <button onclick='eliminarAmigos(" + i + ")'>x</button></li>";
  }

  document.getElementById("lista").innerHTML = mensagem;
}

function adicionarAmigos() {
  let introduzar = document.getElementById("amigos");
  let texto = introduzar.value;

  if (texto === "") {
    return;
  } else {

  }

  amigos.push(texto);
  introduzar.value = "";
  visorAmigos();
}

function eliminarAmigos(i) {
  amigos.splice(i, 1);
  visorAmigos();
}
