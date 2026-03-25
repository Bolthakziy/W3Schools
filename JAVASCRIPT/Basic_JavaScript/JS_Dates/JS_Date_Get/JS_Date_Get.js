const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const _date = new Date("2026-03-25");
let month = months[_date.getMonth()];

document.getElementById("coelho").innerHTML = month;
