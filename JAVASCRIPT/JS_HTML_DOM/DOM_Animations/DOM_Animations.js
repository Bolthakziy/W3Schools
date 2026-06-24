function move_Rectangle() {
	let id = null, pos = 0;
	const elem = document.getElementById("animate");

	clearInterval(id);
	id = setInterval(frame, 5);

	function frame() {
		if (pos == 450) {
			clearInterval(id);
		} else {
			pos++;
			elem.style.top = pos + "px";
			elem.style.left = pos + "px";
		}
	}
}
