const amiga = {
	firstName : "Ana",
	lastName : "Pata",
	sayHello : function() {
		return ("Bom dia, eu sou a " + this.firstName + " " + this.lastName);
	}
};

document.getElementById("coelho").innerHTML = amiga.sayHello();
