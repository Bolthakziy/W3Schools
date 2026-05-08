const fruits = new Map([
	["pessego", 200],
	["melancia", 300],
	["abacaxi", 250]
]);
let text = "";

for (const x of fruits) {
	text += (x + "<br>");
}

document.getElementById("coelho").innerHTML = text;
