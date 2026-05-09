const myNumbers = Iterator.from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
const myNewNumbers = myNumbers.drop(4);
let text = "";

for (const x of myNewNumber) {
	text += (x + "<br>");
}

document.getElementById("coelho").innerHTML = text;