let aMinhaPromessa = new Promise(function(resolve, reject) {
	let amigo = true, amiga = false;
	let sexo = amigo;

	if (sexo) {
		resolve("Ele e o Arthur!");
	} else {
		reject("Ela e a Nadia!");
	}
});

aMinhaPromessa.then(
	function(value) {display_myWords(value)},
	function(value) {display_myWords(value)}
);

function display_myWords(texto) {
	document.getElementById("coelho").innerHTML = texto;
}