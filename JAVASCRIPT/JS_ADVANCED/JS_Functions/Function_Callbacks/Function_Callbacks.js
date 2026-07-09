function display_theValue(value) {
	document.getElementById("coelho").innerHTML = value;
}

function sum_Numbers(x, y, myCallback) {
	let sum = x + y;
	myCallback(sum);
}

sum_Numbers(3, 7, display_theValue);
