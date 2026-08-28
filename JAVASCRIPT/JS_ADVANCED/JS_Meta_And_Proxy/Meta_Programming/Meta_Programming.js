const user = {name : "Arthur", country : "Brasil"};
const proxy = new Proxy(user, {
	set(target, property, value) {
		log(property + ": " + value);

		return Reflect.set(target, property, value);
	}
});

function log(message) {
	const time = new Date().toLocaleTimeString();

	document.getElementById("coelho").innerHTML += "[" + time + "]" + message + "<br>";
}

proxy.name = "Arthur";
proxy.country = "Macao, China";
proxy.name = "Alexandre";