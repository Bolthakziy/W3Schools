"use strict"

const amigo = {
	firstName:"Daniel",
	lastName:"Gato",
	age:17,
	eyecolor:"brown"
};

Object.freeze(amigo);

let texto;

try {
	amigo.age = 16;
	texto = Object.values(amigo);
} catch (err) {
	texto = err;
}

document.getElementById("coelho").innerHTML = texto;
