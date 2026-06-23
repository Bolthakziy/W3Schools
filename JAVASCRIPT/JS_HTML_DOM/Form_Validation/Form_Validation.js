function sort_Number() {
	let x = document.getElementById("number").value;
	let texto = "";

	if (isNaN(x) || x <= 0) {
		texto = "The input value is not valid....";
	} else {
		if (x % 2 == 0) {
			texto = "The input value is an even number.";
		} else {
			texto = "The input value is an odd number.";
		}
	}

	document.getElementById("coelho").innerHTML = texto;
}
