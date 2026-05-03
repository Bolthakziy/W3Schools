const date = Temporal.PlainDate.from("2026-05-24");
const time = Temporal.PlainTime.from("15:30");
const dateTime = date.toPlainDateTime(time);

document.getElementById("coelho").innerHTML = dateTime.toString();
