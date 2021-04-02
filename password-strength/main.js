let validPass = "Minigir23!";
let invalidPass = "mingir"
let invalidPass2 ="MINIGIR"



const validatePass = (password) => {
    let oneUpperCase = /(?=.*[A-Z])/;
    let oneLowerCase = /(?=.*[a-z])/;
    let oneSpecialChar = /(?=.*[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~])/;
    let oneDigit = /(?=.*[0-9])/;
    let eightChars = /(?=.{8,})/;

    return eightChars.test(password) && 
    oneLowerCase.test(password) &&
    oneDigit.test(password) &&
    oneSpecialChar.test(password) && 
    oneUpperCase.test(password) ? 
    "Your password is valid": "Your password is Invalid";  
}
console.log(validatePass(validPass))
console.log(validatePass(invalidPass2))
console.log(validatePass(invalidPass))

