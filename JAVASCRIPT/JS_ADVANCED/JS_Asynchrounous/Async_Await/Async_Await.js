function display_MyWords(texto) {
	document.getElementById("coelho").innerHTML = texto;
}

async function say_Hello() {
	return "Muito prazer!";
}

say_Hello().then(function(value) {
	display_MyWords(value);
});
