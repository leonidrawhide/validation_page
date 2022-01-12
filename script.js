'use strict';

const inputEmail = document.getElementById('email-input');
const inputPassword = document.getElementById('password-input');
const inputCheckbox = document.getElementById('checkbox-input').checked;
const inputCheckboxCustom = document.getElementById('custom-checkbox-id');
const emailMandatory = document.getElementById('email-mandatory-id');
const passwordMandatory = document.getElementById('password-mandatory-id');
const checkboxMandatory = document.getElementById('checkbox-mandatory-id');
const checkboxLoginForm = document.getElementById('login-form-checkbox-id');
const starEmail = document.getElementById('star-email');
const starPassword = document.getElementById('star-password');
const starCheckbox = document.getElementById('star-checkbox');
const labelEmail = document.getElementById('label-email');
const labelPassword = document.getElementById('label-password');
const invalidEmail = document.getElementById('email-invalid');
const lengthPassword = document.getElementById('password-length');

const button = document.querySelector('.login-form__button-wrapper_button');

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

button.addEventListener('click', (event) => {
	emailMandatory.style.display = 'none';
	invalidEmail.style.display = 'none';
	passwordMandatory.style.display = 'none';
	lengthPassword.style.display = 'none';
	checkboxMandatory.style.display = 'none';

	let emailBool = false;
	let passwBool = false;
	let checkBool = false;
	
	if (inputEmail.value === '' || validateEmail(inputEmail.value) === false) {
		inputEmail.style.border = "	2px solid red";
		starEmail.style.color = 'red';
		labelEmail.style.color = 'red';
		if (inputEmail.value === '') {
			emailMandatory.style.display = 'contents';
		} else if (validateEmail(inputEmail.value) === false) {
			invalidEmail.style.display = 'contents';
		}
		emailMandatory.style.margin = 'auto auto auto 18px';
		emailBool = false;
	} else {
		inputEmail.style.border = "2px solid #787878";
		starEmail.style.color = '#787878';
		labelEmail.style.color = '#787878';
		emailMandatory.style.display = 'none';
		invalidEmail.style.display = 'none';
		emailBool = true;
	}

	if (inputPassword.value === '' || inputPassword.value.length < 8) {
		inputPassword.style.border = "2px solid red";
		if (inputPassword.value === '') {
			passwordMandatory.style.display = 'contents';
		} else if (inputPassword.value.length < 8) {
			lengthPassword.style.display = 'contents';
		} 
		starPassword.style.color = 'red';
		labelPassword.style.color = 'red';
		checkboxLoginForm.style.margin = '6px 45px 0 45px';
		passwordMandatory.style.margin = 'auto auto auto 18px';
		passwBool = false;
	} else {
		inputPassword.style.border = "2px solid #787878";
		passwordMandatory.style.display = 'none';
		lengthPassword.style.displsy = 'none';
		starPassword.style.color = '#787878';
		labelPassword.style.color = '#787878'
		checkboxLoginForm.style.margin = '16px 45px 0 45px';
		passwBool = true;
	}

	if (document.getElementById('checkbox-input').checked === false) {
		inputCheckboxCustom.style.border = "2px solid red";
		starCheckbox.style.color = 'red';
		checkboxMandatory.style.display = 'contents';
		checkboxMandatory.style.margin = 'auto auto auto 18px';
		checkBool = false;
	} else {
		inputCheckboxCustom.style.border = "2px solid #787878";
		starCheckbox.style.color = '#787878';
		checkboxMandatory.style.display = 'none';
		checkBool = true;
	}

	if (emailBool && passwBool && checkBool) {
		console.log(`Email:\t\t${inputEmail.value}\nPassword:\t${inputPassword.value}`)
	}
	
	event.preventDefault();
});

