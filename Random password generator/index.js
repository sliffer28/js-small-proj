
const lengthValue = document.getElementById("length");
const includeLowercase = document.getElementById("lowerCase");
const includeUppercase = document.getElementById("upperCase");
const includeNumbers = document.getElementById("number");
const includeSymbols = document.getElementById("symbol");
const result = document.getElementById("result");
const result1 = document.getElementById("result1");

let length;
let lowercase;
let upperCase;
let number;
let symbol;



function generatePassword(){
    
    length = lengthValue.value;
    length = Number(length);

    lowercase = includeLowercase.checked ? true : false;
    uppercase = includeUppercase.checked ? true : false;
    number = includeNumbers.checked ? true : false;
    symbol = includeSymbols.checked ? true : false;

    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()_+-=";

    let allowedChars = "";
    let password = "";

    allowedChars += lowercase ? lowercaseChars : "";
    allowedChars += uppercase ? uppercaseChars : "";
    allowedChars += number ? numberChars : "";
    allowedChars += symbol ? symbolChars : "";

    if(length <= 0 ){
        result.textContent = `Password length must be at least 1`;
        result1.textContent = "";
        }
    else if(allowedChars.length === 0){
        result.textContent = `At least 1 set of character needs to be selected`;
        result1.textContent = "";
    }
    else{
        for(let i = 0; i < length; i++){
            const randomIndex = Math.floor(Math.random() * allowedChars.length);
            password += allowedChars[randomIndex];
        }
        result.textContent = password;
        result1.textContent = `Password Generated :`;
    }

    



}
                          