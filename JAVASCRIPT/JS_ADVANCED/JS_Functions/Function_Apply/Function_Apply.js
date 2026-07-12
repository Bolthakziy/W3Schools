const amigos = {
	fullName: function(city, country) {
		return (this.firstName + " " + this.lastName + " : " + city + "," + country);
	}
}

const amigo = {
	firstName:"Fernando",
	lastName:"Asno"
}

document.getElementById("coelho").innerHTML = amigos.fullName.apply(amigo, ["Rio De Janeiro", "Brasil"]);
