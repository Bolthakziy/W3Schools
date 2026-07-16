const fruto = [
	["maca", 300],
	["pera", 700],
	["ananas", 500]
];

const meuFruto = Object.fromEntries(fruto);
document.getElementById("coelho").innerHTML = "The cost of a pineapple : " + meuFruto.ananas;