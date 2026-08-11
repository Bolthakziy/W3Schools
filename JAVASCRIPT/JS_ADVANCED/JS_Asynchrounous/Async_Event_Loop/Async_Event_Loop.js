amigos1();
amigos2();
amigos3();

function amigos1() {
	write_Words("Ele e o Arthur.");
}

function amigos2() {
	write_Words("Ele e o Henrique.");
}

function amigos3() {
	write_Words("Ela e a Nadia.");
}

function write_Words(texto) {
	document.getElementById("coelho").innerHTML += texto + "<br>"
}