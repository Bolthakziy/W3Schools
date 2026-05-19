const safe = RegExp.escape("@#$");
const regex = new RegExp(safe);
const text = "Alexandre @#$ Gato";
const newText = text.replace(regex, "Coelho");

document.getElementById("coelho").innerHTML = newText;
