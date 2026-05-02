const AlexandreBirthday = Temporal.PlainDate.from("2023-05-23");
const AnaBirthday = Temporal.PlainDate.from("2023-07-21");
let result = Temporal.PlainDate.compare(AlexandreBirthday, AnaBirthday);

if (result == -1)
{
	document.getElementById("coelho").innerHTML = "Alexandre's birthday is earlier than Ana's birthday.";
} else if (result == 0) {
	document.getElementById("coelho").innerHTML = "Alexandre's birthday is same with Ana's birthday.";
} else if (result == 1) {
	document.getElementById("coelho").innerHTML = "Ana's birthday is earlier than Alexandre's birthday."
} else {

}