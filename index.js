
// PASSWORD GENERATOR


function passwordGenerator(length, includeLowerCase, includeUpperCase, includeNumbers, includeSymbols) {
    const lowercasechars = "abcdefghijklmnopqrstuvwxz";
    const uppercasechars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const symbolChars = "!%&/()=@?+-*=";
    
    let allowedChars = "";
    let password = "";
    
    allowedChars += includeLowerCase ? lowercasechars : "";
    allowedChars += includeUpperCase ? uppercasechars : "";
    allowedChars += includeNumbers ? numberChars : "";
    allowedChars += includeSymbols ? symbolChars : "";
    
    if(length < 1) {
        return `(Password length must be at least 1)`;
    }    
    if(allowedChars.length === 0) {
        return `(At least one set of characters needs to be set)`;
    }
    let randomIndex = 0;
    for(let i = 0; i < length; i++){
       randomIndex = Math.floor(Math.random() * allowedChars.length)
       password += allowedChars.charAt(randomIndex);
    }

    return password;
}
const passwordLength = 12;
const includeLowerCase = true;
const includeUpperCase = true;
const includeNumbers = true;
const includeSymbols = true;


const password = passwordGenerator(passwordLength, 
                                            includeLowerCase, 
                                            includeUpperCase, 
                                            includeNumbers, 
                                            includeSymbols);

console.log(`Generated password: ${password}`);                                            