const passwordField = document.getElementById("password");
const copyPass = document.getElementById("copy-btn");
const generatePass = document.getElementById("generate-btn");
const lengthInput = document.getElementById("length");
const uppercaseCheckbox = document.getElementById("uppercase");
const lowercaseCheckbox = document.getElementById("lowercase");
const numbersCheckbox = document.getElementById("numbers");
const symbolsCheckbox = document.getElementById("symbols");

const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerChars = "abcdefghijklmnopqrstuvwxyz";
const numberChars = "0123456789";
const symbolChars = "!@#$%^&*()_+[]{}|;:,.<>?";

// Function for Generate Password
function generatePassword(){
    const length = parseInt(lengthInput.value);
    let charsPool = "";

    if(uppercaseCheckbox.checked) charsPool += upperChars;
    if(lowercaseCheckbox.checked) charsPool += lowerChars;
    if(numbersCheckbox.checked) charsPool += numberChars;
    if(symbolsCheckbox.checked) charsPool += symbolChars;

    if(charsPool===""){
        alert("Please select at least one character type!");
        return "";
    }

    let password = "";
    for(i=0; i< length; i++){
        const randomIndex = Math.floor(Math.random() * charsPool.length);
        password += charsPool[randomIndex];
    }
    return password;
}

// Generate Password
generatePass.addEventListener("click", ()=>{
    const password = generatePassword();
    passwordField.value = password;
});

// Copy Password
copyPass.addEventListener("click", ()=>{
    if(passwordField.value===""){
        alert("Generate a password first");
        return;
    }
    navigator.clipboard.writeText(passwordField.value).then(() => {
        alert("Password copied to clipboard!");
    });
});