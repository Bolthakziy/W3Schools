const caixa = document.getElementById("box");

caixa.addEventListener("mouseover", function() {
	caixa.innerHTML = "Um rato esta aqui!";
});

caixa.addEventListener("mouseout", function() {
	caixa.innerHTML = "Um rato nao esta aqui!";
});
