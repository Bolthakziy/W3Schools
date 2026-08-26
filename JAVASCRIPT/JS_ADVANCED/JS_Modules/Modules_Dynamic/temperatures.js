export function toCelsius(farenheit) {
	return ((farenheit - 32) * 5 / 9);
}

export function toFahrenheit(celsius) {
	return ((celsius * 9 / 5) + 32);
}
