const amigo = new Map();
amigo.set("Daniel", 200);
let pay = amigo.get("Daniel");

document.getElementById("coelho").innerHTML = "My friend Daniel earns " + pay + " Euro!";
