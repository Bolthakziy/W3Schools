const modal = document.getElementById("modal");
const abrar = document.getElementById("abrar");
const fecher = document.getElementById("fecher");

function abrarModal() {
	modal.classList.add("show");
}

function fecherModal() {
	modal.classList.remove("show");
}

abrar.addEventListener("click", abrarModal);
fecher.addEventListener("click", fecherModal);

modal.addEventListener("click", function(event) {
	if (event.target === modal) {
		fecherModal();
	} else {

	}
});

document.addEventListener("keydown", function(evnet) {
	if (event.key === "Escape") {
		fecherModal();
	} else {

	}
});
