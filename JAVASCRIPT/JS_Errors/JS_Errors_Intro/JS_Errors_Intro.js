try {
	let x = y;
	let y = 5;
} catch (err) {
	let text = err.name + "<br>" + err.message;

	document.getElementById("coelho").innerHTML = text;
}
