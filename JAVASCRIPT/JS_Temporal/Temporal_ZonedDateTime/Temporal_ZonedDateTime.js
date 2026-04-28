const myZoneDate = Temporal.ZonedDateTime.from({
	timeZone:"Europe/Lisboa",
	year:2026,
	month:04,
	day:28,
	hour:23,
	minute:03,
	second:35,
	millisecond:0,
	microsecond:0,
	nanosecond:500
});

document.getElementById("coelho").innerHTML = myZoneDate.toString();
