let i = 0;
let text = "";

for (i = 0; i < 100; ++i) {
	if (i > 7) {
		break;
	} else {

	}

	text += i + "<br>";
}

document.getElementById("coelho").innerHTML = text;
