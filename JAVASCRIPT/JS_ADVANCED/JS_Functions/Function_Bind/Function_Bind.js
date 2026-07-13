function add(x, y) {
	return (x + y);
}

const _double = add.bind(null, 2);
document.getElementById("coelho").innerHTML = _double(3) + " " + _double(7);
