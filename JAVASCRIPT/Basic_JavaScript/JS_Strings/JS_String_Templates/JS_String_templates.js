let header = "My friends";
let friends = ["Alexandre", "Ana", "Daniel"];
let html = '<h2>${header}</h2><ul>';

for (const x of friends) {
	html += '<li>${x}</li>';
}

html += "</ul>";

document.getElementById("coelho").innerHTML = html;
