const elemento = document.getElementByTagName("p");

document.getElementById("texto").innerHTML = elemento[0].innerHTML + "<br>" + elemento[1].innerHTML + "<br>" + elemento[2].innerHTML;
