function* myFunction()
{
	yield 1;
	yield 2;
	yield 3;

	return 4;
}

let myGenerator = myFunction();
let text = "";

for (let x of myGenerator) {
	text += (x + "<br>");
}

document.getElementById("coelho").innerHTML = text;
