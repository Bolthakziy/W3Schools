const start = new Date("2026-04-24");
const end = new Date("2026-04-30");
let diff = end - start;

document.getElementById("coelho").innerHTML = "We have " + (diff / 1000 / 3600 / 24) + " days!"