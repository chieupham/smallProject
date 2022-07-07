// Validation Code for Inputs

var idInput = document.forms['forms']['idInput'];
var passwordInput = document.forms['forms']['passwordInput'];

var emailError = document.getElementById('emailError')
var passwordError = document.getElementById('passwordError')

// Java class : addEventListener
idInput.addEventListener('textInput', idVerification);
passwordInput.addEventListener('textInput', idVerification);

function validated(){
    if (idInput.value.length <9){
        idInput.style.border = "1px solid red";
        emailError.style.display = "block";
        emailError.focus();
        return false;
    }
    if (passwordInput.value.length <6){
        passwordInput.style.border = "1px solid red";
        passwordInput.style.display = "block";
        passwordInput.focus();
        return false;        
    }
}

function idVerification(){
    if (idInput.value.length >=8){
        idInput.style.border = "1px solid red";
        emailError.style.display = "none";
        return true;
    }
}