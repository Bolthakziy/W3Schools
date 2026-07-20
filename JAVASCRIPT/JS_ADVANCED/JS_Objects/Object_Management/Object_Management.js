const amiga = {
	firstName : "Ana",
	lastName : "Pata",
	cidade : "Same",
};

Object.defineProperty(amiga, "pais", {value : "Timor-Leste"});
document.getElementById("coelho").innerHTML = "The country of " + amiga.firstName + " is " + amiga.pais + ".";
