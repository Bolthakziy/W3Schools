const laranja = document.getElementById("laranja");
const verde = document.getElementById("verde");
const castanho = document.getElementById("castanho");

laranja.addEventListener("click", visorTexto("orange"));
verde.addEventListener("click", visorTexto("green"));
castanho.addEventListener("click", visorTexto("brown"));

function visorTexto(cor) {
	if (cor == "orange") {
		document.getElementById("coelho").style.color = "orange";
	} else if (cor == "green") {
		document.getElementById("coelho").style.color = "green";
	} else if (cor == "brown") {
		document.getElementById("coelho").style.color = "brown";
	} else {

	}
}
