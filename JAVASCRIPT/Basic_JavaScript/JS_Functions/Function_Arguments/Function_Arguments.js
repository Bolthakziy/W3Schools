function multiplyAll()
{
	let result = 1;

	for (let i = 0; i < arguments.length; ++i) {
		result *= arguments[i];
	}

	return result;
}

document.getElementById("coelho").innerHTML = multiplyAll(1, 2, 3, 4, 5, 6);
