function amigos(firstName, lastName, age, eyeColor)
{
	this.firstName = firstName;
	this.lastName = lastName;
	this.age = age;
	this.eyeColor = eyeColor;
}

amigos.prototype.changeName = function(name) {
	this.lastName = name;
}

const Alexandre = new amigos("Alexandre", "Kanin", 17, "brown");
Alexandre.changeName("Coelho");

document.getElementById("coelho").innerHTML = "Eu sou o Alexandre " + Alexandre.lastName;