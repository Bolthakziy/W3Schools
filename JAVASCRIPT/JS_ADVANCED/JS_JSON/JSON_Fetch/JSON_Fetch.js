async function loadSomething() {
	const response = await fetch("something.json");
	const something = await response.json();

	displaySomething(something[0].name);
	displaySomething(something[0].country);
}

function displaySomething(texto) {
	document.getElementById("coelho").innerHTML += texto + "<br>";
}

loadSomething();
