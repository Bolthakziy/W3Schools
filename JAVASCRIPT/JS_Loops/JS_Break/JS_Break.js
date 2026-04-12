let text = "";

for (let i = 100; i <= 1000; i += 100) {
	if (i == 800) {
		break;
	} else {

	}

	text += "The Number : " + i + "<br>";
}

document.getElementById("coelho").innerHTML = text;
