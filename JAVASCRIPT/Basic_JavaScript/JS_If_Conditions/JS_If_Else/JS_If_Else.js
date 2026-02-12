const hour = new Date().getHours();
let greeting;

if (hour < 18) {
	greeting = "Bom dia!";
} else {
	greeting = "Boa Tarde!";
}

document.getElementById("coelho").innerHTML = greeting;
