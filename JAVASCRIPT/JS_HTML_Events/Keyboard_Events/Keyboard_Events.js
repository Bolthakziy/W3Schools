const tecla = document.getElementById("teclado");

tecla.addEventListener("keydown", function(event){
	document.getElementById("coelho").innerHTML = "Voce pressiona " + event.key;
});
