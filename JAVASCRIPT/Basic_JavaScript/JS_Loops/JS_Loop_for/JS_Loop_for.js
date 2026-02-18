const amigo = ["Alexandre", "Ana", "Daniel"];
let length = amigo.length;
let text = "";
let i = 0;

for (i = 0; i < length; ++i) {
	text += amigo[i] + "<br>";
}

document.getElementById("coelho").innerHTML = text;
