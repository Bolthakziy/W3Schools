class Amigos {
	constructor(name) {
		this.friendname = name;
	}

	get fname() {
		return this.friendname;
	}

	set fname(x) {
		this.friendname = x;
	}
}

const MinhaAmiga = new Amigos("Nadia");

document.getElementById("coelho").innerHTML = MinhaAmiga.fname;
