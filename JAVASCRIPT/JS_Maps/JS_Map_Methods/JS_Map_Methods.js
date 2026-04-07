const amigos = new Map([["Ana", 'K'], ["Daniel", 'Q'], ["Laura", 'J']]);
let text = "";

for (const x of amigos.values()) {
	text += x + "<br>";
}

document.getElementById("coelho").innerHTML = text;
