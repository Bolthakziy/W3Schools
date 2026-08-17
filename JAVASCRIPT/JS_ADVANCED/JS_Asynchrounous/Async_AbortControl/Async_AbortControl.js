const controller = new AbortController();

function write_Words(texto) {
	let demo = document.getElementById("coelho");
	demo.innerHTML = texto;
}

async function loadFile(file) {
	try {
		const response = await fetch(file, {
			signal : controller.signal
		});

		write_Words(await response.text());
	} catch (err) {
		if (err.name == "AbortError") {
			write_Words("Downlaod canceled.");
		} else {

		}
	}
}
