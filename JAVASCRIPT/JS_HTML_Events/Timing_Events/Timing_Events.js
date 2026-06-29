setInterval(ecra_Tempo, 1000);

function ecra_Tempo() {
	const _data = new Date();
	document.getElementById("relogio").innerHTML = _data.getHours() + ":" + _data.getMinutes() + ":" + _data.getSeconds();
}
