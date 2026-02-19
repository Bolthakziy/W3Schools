let text = "";
let i = 10;

do {
	text += ("<br>Number " + i);
	--i;
} while (i > 0);

document.getElementById("coelho").innerHTML = text;
