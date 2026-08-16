function write_Words(texto) {
	let words = document.getElementById("coelho");
	words.innerHTML += texto + "<br>";
}

write_Words("Eu sou o Alexandre!");
setTimeout(function() {write_Words("It is done!")}, 5000);
write_Words("Ela e a Sancha!");
