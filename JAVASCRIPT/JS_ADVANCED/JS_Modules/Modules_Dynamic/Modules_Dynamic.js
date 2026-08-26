async function get_Temperatures(x) {
	const module = await import("./temperatures.js");
	let celsius = module.toCelsius(x);

	document.getElementById("coelho").textContent = celsius + " Celsius";
}

get_Temperatures(64);
