const amigo = {
	firstName : "Fernando",
	lastName : "Asno",
	get fullName() {
		return (this.firstName + " " + this.lastName);
	}
};

document.getElementById("coelho").innerHTML = "O meu amigo e " + amigo.fullName + ".";
