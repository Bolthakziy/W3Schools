const amigos = ["Daniel", "Alexandre", "Ana", "Laura"];

document.getElementById("coelho1").innerHTML = "Original Amigos : " + amigos;

amigos.sort();

document.getElementById("coelho2").innerHTML = "After sorting Amigos : " + amigos;
