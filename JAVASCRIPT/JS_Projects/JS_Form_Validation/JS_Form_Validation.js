const form = document.getElementById("signupForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passInput = document.getElementById("password");
const confirmInput = document.getElementById("confirm");
const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const passError = document.getElementById("passwordError");
const confirmError = document.getElementById("confirmError");
const result = document.getElementById("result");

function showError(el, message) {
	el.innerHTML = message;
}

function clearError(el) {
	el.innerHTML = "";
}

function validateName() {
	let value = nameInput.value.trim();

	if (value.length < 2) {
		showError(nameError, "Name must be at least 2 characters!");

		return false;
	} else {

	}

	clearError(nameError);

	return true;
}

function validateEmail() {
	let value = emailInput.value.trim();

	if (!(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))) {
		showError(emailError, "Enter a valid email address!");

		return false;
	} else {

	}

	clearError(emailError);

	return true;
}

function validatePassword() {
	let value = passInput.value;

	if (value.length < 8) {
		showError(passError, "Password must be at least 8 characters!");

		return false;
	} else {

	}

	clearError(passError);

	return true;
}

function validateConfirm() {
	let pass = passInput.value;
	let confirm = confirmInput.value;

	if (confirm === "") {
		showError(confirmError, "Please confirm your password!");

		return false;
	} else {

	}

	if (confirm !== pass) {
		showError(confirmError, "Password does not match....");

		return false;
	} else {

	}

	clearError(confirmError);

	return true;
}

function validateForm() {
	let okName = validateName();
	let okEmail = validateEmail();
	let okPass = validatePassword();
	let okConfirm = validateConfirm();

	return (okName && okEmail && okPass && okConfirm);
}

form.addEventListener("submit", function(event) {
	event.preventDefault();
	result.innerHTML = "";

	if (validateForm()) {
		result.innerHTML = "Form is valid!";
		result.className = "OK";
	} else {
		result.innerHTML = "Please fix the errors!";
		result.className = "error";
	}
});
