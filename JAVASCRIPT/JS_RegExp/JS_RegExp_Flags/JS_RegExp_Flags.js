let text = "Eu sou o Alexandre.";
const pattern = /\w+/y;
pattern.lastIndex = 9;
let result = text.match(pattern);

document.getElementById("coelho").innerHTML = result;
