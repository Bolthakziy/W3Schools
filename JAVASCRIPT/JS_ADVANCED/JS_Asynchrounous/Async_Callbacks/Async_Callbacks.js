setTimeout(function () {myDisplayer("Eu sou o Alexandre!")}, 3000);

function myDisplayer(texto) {
	document.getElementById("coelho").innerHTML = texto;
}