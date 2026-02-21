let text = "";
let i = 0;

for (i = 1; i < 8; ++i) {
	if (i % 2 == 0) {
		continue;
	} else {
		
	}

	text += i + "<br>";
}

document.getElementById("coelho").innerHTML = text;
