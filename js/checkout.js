
// Exercise 6
function validate() {

	event.preventDefault()

	let error = 0;
	// Get the input fields
	let fName = document.getElementById("fName");
	let fLastN = document.getElementById("fLastN");
	let fEmail = document.getElementById("fEmail");
	let fAddress = document.getElementById("fAddress");
	let fPassword = document.getElementById("fPassword");
	let fPhone = document.getElementById("fPhone")



	// Get the error elements
	let errorName = document.getElementById("errorName");
	let errorLastN = document.getElementById("errorLastN");
	let errorEmail = document.getElementById("errorEmail");
	let errorAddress = document.getElementById("errorAddress");
	let errorPassword = document.getElementById("errorPassword");
	let errorPhone = document.getElementById("errorPhone")


	//Get the valid elements
	let validName = document.getElementById("validName");
	let validLastN = document.getElementById("validLastN");
	let validEmail = document.getElementById("validEmail");
	let validAddress = document.getElementById("validAddress");
	let validPassword = document.getElementById("validPassword");
	let validPhone = document.getElementById("validPhone")



	// Validate fields entered by the user: name, phone, password, and email


	if (fName.value === "" || fName.value.length < 3 || !/^[a-zA-Z]+$/.test(fName.value)) {

		error++;

		errorName.style.display = "block";

		validName.style.display = "none";

	}


	else {
		//fName.classList.remove("is-invalid")

		errorName.style.display = "none";

		validName.style.display = "block";

	}



	if (fLastN.value === "" || fLastN.value.length < 3 || !/^[a-zA-Z]+$/.test(fLastN.value)) {

		//errorLastN.classList.add("d-block");
		error++

		errorLastN.style.display = "block";

		validLastN.style.display = "none";

	}
	else {


		errorLastN.style.display = "none";

		validLastN.style.display = "block";


	}

	if (fEmail.value === "" || fEmail.value.length < 3 || !/^[\w.-]+@[a-zA-Z]+\.[a-zA-Z]+$/.test(fEmail.value)) {

		error++;

		errorEmail.style.display = "block";

		validEmail.style.display = "none";

	} else {
		
		errorEmail.style.display = "none";

		validEmail.style.display = "block";
	}

	if (fAddress.value === "" || fAddress.value.length < 3) {

		error++

		errorAddress.style.display = "block";
		
		validAddress.style.display = "none";

	} else {
		
		errorAddress.style.display = "none";

		validAddress.style.display ="block"
	}

	if (fPassword.value === "" || fPassword.value.length < 3 || !fPassword.value.match(/^(?=.*[0-9])(?=.*[a-zA-Z])[a-zA-Z0-9]{4,8}$/)) {

		error++

		errorPassword.style.display = "block";

		validPassword.style.display = "none";

	} else {
		
		errorPassword.style.display = "none";

		validPassword.style.display = "block";
	}

	if (fPhone.value === "" || fPhone.value.length < 9 || isNaN(fPhone.value)) { //!/^\d+$/.test(fPhone.value) !(/^\d{9,}$/.test(fPhone.value) !/^[0-9]+$/.test(fPhone.value)

		error++

		errorPhone.style.display = "block";

		validPhone.style.display = "none";
		
	} else {
		
		errorPhone.style.display = "none";

		validPhone.style.display = "block"
	}


	if (error > 0) {
		alert("Error");
	} else {
		alert("OK");
	}

}
