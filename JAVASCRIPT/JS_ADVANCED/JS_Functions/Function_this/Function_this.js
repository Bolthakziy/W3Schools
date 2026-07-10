const human = {
	firstName : "Alexandre",
	MuitoPrazer : () => {
		return this.firstName;
	}
};

document.getElementById("coelho").innerHTML = human.MuitoPrazer();
