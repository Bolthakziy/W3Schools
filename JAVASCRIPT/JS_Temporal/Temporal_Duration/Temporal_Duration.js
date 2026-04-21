const duration = Temporal.Duration.from({days:3, hours:6});

document.getElementById("coelho").innerHTML = "Daniel said that i will be back in " + duration.days + " days " + duration.hours + " hours";
