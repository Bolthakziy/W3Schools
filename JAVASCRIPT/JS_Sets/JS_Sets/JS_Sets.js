const amigos = new Set();
amigos.add("Alexandre");
amigos.add("Ana");
amigos.add("Daniel");
amigos.add("Laura");

document.getElementById("coelho").innerHTML = "Eu tenho " + amigos.size + " amigos.";
