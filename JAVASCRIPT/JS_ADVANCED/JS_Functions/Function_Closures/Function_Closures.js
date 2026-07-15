function myCounter() {
	let counter = 0;

	return function() {
		counter++;

		return counter;
	};
}

const add = myCounter();

function myFunction() {
	document.getElementById("coelho").innerHTML = add();
}