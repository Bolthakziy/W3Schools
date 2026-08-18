function write_Words(texto) {
	let amigo = document.getElementById("coelho");
	amigo.innerHTML += texto + "<br>";
}

function calculate() {
	let total = 0;

	for (let i = 0; i < 3e7; i++) {
		total += i;
	}

	return total;
}

write_Words("It is under calculating.....");
let result = calculate();
write_Words(result);