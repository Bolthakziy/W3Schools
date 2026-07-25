class Amigos {
	constructor(name) {
		this.name = name;
	}

	static hello(x) {
		return ("Bom dia, " + x.name);
	}
}

const MeuAmigo = new Amigos("Arthur");

document.getElementById("coelho").innerHTML = Amigos.hello(MeuAmigo);
