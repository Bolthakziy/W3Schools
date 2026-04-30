const start = Temporal.PlainDate.from("2026-05-01");
const end = Temporal.PlainDate.from("2026-05-31");
const duration1 = start.since(end);
const duration2 = start.until(end);

document.getElementById("coelho").innerHTML = "1st duration : " + duration1.toString() + "<br>" + "2nd duration : " + duration2.toString();
