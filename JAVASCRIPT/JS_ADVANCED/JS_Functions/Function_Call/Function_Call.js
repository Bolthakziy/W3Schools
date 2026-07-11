const amigoNome = {
	fullName: function(city, country) {
		return (this.firstName + " " + this.lastName + ", " + city + ", " + country);
	}
}

const amigo = {
	firstName:"Daniel",
	lastName:"Gato"
}

const amiga = {
	firstName:"Ana",
	lastName:"Pata"
}

document.getElementById("coelho1").innerHTML = amigoNome.fullName.call(amigo, "Macao", "China");
document.getElementById("coelho2").innerHTML = amigoNome.fullName.call(amiga, "Same", "Timor-leste");
