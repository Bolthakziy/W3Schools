let text = "10, 100, 10000, 1000, 100000, 10";
const pattern = /\d{2,3}/g;
let result = text.match(pattern);

document.getElementById("coelho").innerHTML = result;
