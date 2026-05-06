const date = new Date("2026-06-01");
date.setDate(date.getDate() + 5);

document.getElementById("coelho").innerHTML = "After Modification : " + date.toString();
