function friends(friend1, friend2)
{
	return (friend1 + " and " + friend2 + " are friends!");
}

let amigos = friends("Alexandre", "Ana");

document.getElementById("coelho").innerHTML = amigos;
