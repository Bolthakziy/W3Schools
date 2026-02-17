let sum = 0;
let i = 1;

do {
	sum += i;
	i++;
} while (i <= 10);

document.getElementById("coelho").innerHTML = "The resuslt is " + sum + ".";
