const meuNome = {nome : "Alexandre", pais : "Macao, China"};
let texto = JSON.stringify(meuNome);

displayMyInformation(texto);

function displayMyInformation(texto) {
	document.getElementById("coelho").textContent = texto;
}
