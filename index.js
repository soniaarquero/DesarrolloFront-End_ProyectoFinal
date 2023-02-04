//Validación del Nombre

function validateName(){
	var nameField = document.getElementById('name');
	var validName = /^[a-zA-ZÀ-ÿ\s]{1,40}$/; // Letras y espacios, pueden llevar acentos.
	var errorName = document.getElementById('nameError');

	if(nameField.value == 0){
		errorName.innerHTML = "Rellene este campo"; // Si el campo está vacío
		nameField.classList.add("invalid");
		nameField.classList.add("errorIcon");
		return false; 
	}
	else if(validName.test(nameField.value)){
		nameField.classList.remove("invalid");
		nameField.classList.remove("errorIcon");
		errorName.innerHTML = "";
    //Si es todo correcto
		nameField.classList.add("valid");
		nameField.classList.add("successIcon");
		return true; 
	}
  //Si no cumple con las condiciones
	else {
		errorName.innerHTML = "Nombre inválido";
		nameField.classList.add("invalid");
		nameField.classList.add("errorIcon");
		return false; }
	}

// Validación Email
function validateEmail(){
	var emailField = document.getElementById('email');
	var validEmail =  /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
	var errorEmail = document.getElementById('emailError');

	if(emailField.value == 0){
		errorEmail.innerHTML = "Rellene este campo"; //Si el campo está vacío
		emailField.classList.add("invalid");
		emailField.classList.add("errorIcon");
		return false; 
	}
	else if(validEmail.test(emailField.value) ){
		emailField.classList.remove("invalid");
		emailField.classList.remove("errorIcon");
		errorEmail.innerHTML = "";
    //Si todo es correcto
		emailField.classList.add("valid");
		emailField.classList.add("successIcon");
		return true; 
	}
  //Si no cumple con las condiciones
	else {
		errorEmail.innerHTML = "Email inválido";
		emailField.classList.add("invalid");
		emailField.classList.add("errorIcon");
		return false; 
	}
} 

//Validación de la Clave paso 1
function validatePassword(){
	var passwordField = document.getElementById('password');
	var validPassword = /^.{4,8}$/; // 4 a 8 digitos.
	var errorPassword = document.getElementById('passError');

	if(passwordField.value == 0){
		errorPassword.innerHTML = "Rellene este campo"; //Si el campo está vacío
		passwordField.classList.add("invalid");
		passwordField.classList.add("errorIcon");
		return false; }
	else if(validPassword.test(passwordField.value) ){
		passwordField.classList.remove("invalid");
		passwordField.classList.remove("errorIcon");
		errorPassword.innerHTML = "";
     //Si todo es correcto
		passwordField.classList.add("valid");
		passwordField.classList.add("successIcon");
		return true; 
	}
  //Si no cumple con las condiciones
	else {	
		errorPassword.innerHTML = "No debe tener más de 8 caracteres";
		passwordField.classList.add("invalid");
		return false; }
}

//Confirmación clave: Validación de la Clave paso 2
function validateConfirm(){
	var passwordField = document.getElementById('password');
	var confirmField = document.getElementById('confirm');
	var errorConfirm = document.getElementById('confirmError');

	if(confirmField.value == 0){
		errorConfirm.innerHTML = "Rellene este campo"; //Si el campo está vacío
		confirmField.classList.add("invalid");
		confirmField.classList.add("errorIcon");
		return false;
	 }
	else if (passwordField.value == confirmField.value ){
		confirmField.classList.remove("invalid");
		confirmField.classList.remove("errorIcon");
		errorConfirm.innerHTML = "";
    //Si todo es correcto
		confirmField.classList.add("valid");
		confirmField.classList.add("successIcon");
		return true; 
	}
  //Si las contraseñas no coinciden
	else {
		errorConfirm.innerHTML = "Las contraseñas no coinciden";
		confirmField.classList.add("invalid");
		confirmField.classList.add("errorIcon");
		return false; 
	} 
}

//Configuración borde del botón enviar
function borderButton(){
	var borderButton = document.getElementById('button');
	borderButton.onmouseover = () => {
		borderButton.classList.add('borderColor'); 	}
	borderButton.onmouseout = () => {	
		borderButton.classList.remove('borderColor'); 	}
}
borderButton()

//Función para confirmar que se ha enviado el formulario correctamente

function validateForm(){

	if (validateConfirm() && validatePassword() && validateEmail() && validateName()){
		alert("La inscripción ha sido correcta"), 5000;
		return true; }
	else {
		return false; }
}