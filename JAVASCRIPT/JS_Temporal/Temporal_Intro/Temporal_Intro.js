const today = Temporal.Now.plainDateISO();
const after2Weeks = today.add({days:14});

document.getElementById("coelho").innerHTML = "The day after 2 weeks is " + after2Weeks.toString();
