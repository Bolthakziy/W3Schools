read_Text("amigos.txt");

async function read_Text(file) {
	const response = await fetch(file);
	write_Words(await response.text());
}

function write_Words(texto) {
	document.getElementById("coelho").innerHTML = texto;
}