const eu = {fname:"Alexandre", lname:"Coelho", age:37};
let text = "";

for (let x in eu) {
	text += (eu[x] + " ");
}

document.getElementById("coelho").innerHTML = text;
