let text = "Eu tenho 3 melancias!";
const pattern = /\d/g;
let result = text.match(pattern);

document.getElementById("coelho").innerHTML = result;
