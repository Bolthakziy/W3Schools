let myMap = new WeakMap();
let amigo = {fname:"Daniel", lname:"Cat"};
myMap.set(amigo, "friend");
let type = myMap.get(amigo);

document.getElementById("coelho").innerHTML = "He is a " + type;
