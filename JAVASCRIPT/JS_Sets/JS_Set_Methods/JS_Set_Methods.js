const amigos = new Set(["Alexandre", "Daniel", "Laura", "Ana"]);
answer = amigos.has("Irasoniy");

document.getElementById("coelho").innerHTML = "Irasoniy is one of Alexandre's friends?" + "<br>" + "The answer is " + answer;