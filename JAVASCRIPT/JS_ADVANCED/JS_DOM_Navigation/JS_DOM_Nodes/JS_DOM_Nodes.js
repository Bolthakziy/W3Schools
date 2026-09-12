const texto = document.createElement("p");
const node = document.createTextNode("Eu sou o amigo do Alexandre!");

texto.appendChild(node);

const element = document.getElementById("div1");
element.appendChild(texto);