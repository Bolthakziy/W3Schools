const myDate = Temporal.PlainDate.from("2024-03-10");
const myNewDate = myDate.add({years:2, months:1, days:20});

document.getElementById("coelho").innerHTML = myNewDate.toString();