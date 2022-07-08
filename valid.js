// Validation Code for Inputs
// document.write(something);
// console.log(something)
 
var idInput = document.forms['form']['idInput'];
var passwordInput = document.forms['form']['passwordInput'];

var idError = document.getElementById('idError')
var passwordError = document.getElementById('passwordError')

// Java class : addEventListener
idInput.addEventListener('textInput', idVerification);
passwordInput.addEventListener('textInput', idVerification);
console.log(idInput.value);

function validated(){
    document.write(idInput)
    if (idInput.value.length <5){
        idInput.style.border = "1px solid red";
        idError.style.display = "block";
        idError.focus();
        return false;
    }
    if (passwordInput.value.length <5){
        passwordInput.style.border = "1px solid red";
        passwordInput.style.display = "block";
        passwordInput.focus();
        return false;        
    }
}

function idVerification(){
    if (idInput.value.length >=8){
        idInput.style.border = "1px solid red";
        idError.style.display = "none";
        return true;
    }
}