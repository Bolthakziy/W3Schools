let texto = '{"name":"Nadia", "city":"Same"}';

const amiga = JSON.parse(texto, function(key, value) {
	if (key == "city") {
		return String(value);
	} else {

	}

	return value;
});

document.getElementById("coelho").innerHTML = typeof (amiga.city);
