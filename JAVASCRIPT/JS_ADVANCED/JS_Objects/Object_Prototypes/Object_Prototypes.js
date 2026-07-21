function amigos(first, last, city, country) {
	this.firstName = first;
	this.lastName = last;
	this.cidade = city;
	this.pais = country;
}

const namorada = new amigos("Laura", "Gata", "Lisboa", "Portugal");
const namorado = new amigos("Daniel", "Gato", "Lisboa", "Portugal");

document.getElementById("coelho").innerHTML = "A minha amiga e " + namorada.firstName + " e do " + namorada.pais + ".";
