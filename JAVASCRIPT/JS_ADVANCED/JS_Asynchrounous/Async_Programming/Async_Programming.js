function printWriting(texto) {
	document.getElementById("coelho").innerHTML = texto + " ";
}

function firstWriting() {
	printWriting("a Sancha do Macao!");
}

function secondWriting() {
	printWriting("Eu sou ");
}

secondWriting();
firstWriting();