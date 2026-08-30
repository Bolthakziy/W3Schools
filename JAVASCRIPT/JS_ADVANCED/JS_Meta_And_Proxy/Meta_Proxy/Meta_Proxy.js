const pessoa = {
	first : "Sancha",
	last : "Cobaia"
};

const virtual = new Proxy(pessoa, {
	get(target, prop) {
		if (prop === "fullName") {
			return (target.first + " " + target.last);
		} else {

		}

		return Reflect.get(target, prop);
	}
});

let texto = virtual.fullName;

document.getElementById("coelho").innerHTML = texto;
