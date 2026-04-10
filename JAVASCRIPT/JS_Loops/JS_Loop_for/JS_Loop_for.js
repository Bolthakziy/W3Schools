let ch = 'A';
let text = " ";

for (let i = 0; i < 6; ++i) {
	text += (ch + i) + "<br>";
}

document.getElementById("coelho").innerHTML = text;
