const texto = "<person><name>Sancha</name></person>";
const parser = new DOMParser();
const xmlDoc = parser.parseFromString(texto, "text/xml");
const name = xmlDoc.getElementByTagName("name")[0].textContent;

document.getElementById("coelho").innerHTML = name
