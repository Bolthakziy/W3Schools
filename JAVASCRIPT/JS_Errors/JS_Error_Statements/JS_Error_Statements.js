function myFunction()
{
	const message = document.getElementById("coelho");
	message.innerHTML = "";
	let x = document.getElementById("demo").value;

	try {
		if (x.trim() == "") {
			throw "empty";
		} else {

		}

		if (isNaN(x)) {
			throw "not a number....";
		} else {

		}

		x = Number(x);

		if (x % 2 == 1) {
			throw "an odd number....";
		} else {

		}
	} catch(err) {
		message.innerHTML = "Input is " + err;
	}
}
