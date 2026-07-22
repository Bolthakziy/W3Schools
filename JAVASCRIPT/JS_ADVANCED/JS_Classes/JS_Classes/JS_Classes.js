class amigo {
	constructor(name, species, country) {
		this.name = name;
		this.species = species;
		this.country = country;
	}
}

const Amigo = new amigo("Artur", "Boi", "Brasil");

document.getElementById("coelho").innerHTML = "O meu amigo " + Amigo.name + " e do " + Amigo.country + ".";
