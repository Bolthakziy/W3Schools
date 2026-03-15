const person = {
	firstName : "Alexandre",
	lastName : "Coelho",
	fullName : function()
	{
		return "My name is " + this.firstName + " " + this.lastName;
	}
};

document.getElementById("coelho").innerHTML = person.fullName();
