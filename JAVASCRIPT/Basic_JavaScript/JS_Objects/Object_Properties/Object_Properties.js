const Coelho = {
	name : "Alexandre",
	age : 17,
	amigos : {
		amiga : "Ana",
		amigo : "Daniel"
	}
}

let row = "amigos";
let column = "amiga";

document.getElementById("coelho").innerHTML = Coelho[row][column];
