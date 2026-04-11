let text = "";
let i = 1;

while (i <= 10) {
	text += "Number " + i + "<br>";
	++i;
}

document.getElementById("coelho").innerHTML = text;
