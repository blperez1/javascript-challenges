const upperCase = document.querySelector("#uppercase");
const lowerCase = document.querySelector("#lowercase");
const numbers = document.querySelector("#numbers");
const symbols = document.querySelector("#symbols");
const slider = document.querySelector("#slider");
const reset = document.querySelector("#reset");
const charCount = document.querySelector("#charCount");
const copy = document.querySelector("#copy");
const generatedPassword = document.querySelector("#generatedPassword");

function isNotChecked() {
    upperCase.checked = false;
    lowerCase.checked = false;
    numbers.checked = false;
    symbols.checked = false;
    slider.valueAsNumber = 8;
}

document.addEventListener("DOMContentLoaded", () => {
   isNotChecked();
   charCount.innerText = passwordLength;
})

reset.addEventListener("click", () => {
    isNotChecked();
    generatedPassword.innerText = "";
    charCount.innerText = 10;
});

let passwordRange = [];
let passwordLength = 10;

function* range(start, end) {
    for(let i = start; i <= end; i++) {
        yield i;
    }
}

function generatePassword(valueRange) {
    let html = "";

    for(let i = 1; i <= valueRange; i++) {
        let randomIndex = Math.floor(Math.random() * passwordRange.length - 1) + 1;

            html += String.fromCharCode(passwordRange[randomIndex])
    } 

    generatedPassword.innerText = html;
}

function generateRange(charRange, isChecked) {
    if(isChecked) passwordRange = [...passwordRange, ...charRange]

    else passwordRange = passwordRange.filter((n) => !charRange.includes(n))

    generatePassword(passwordLength);
}

upperCase.addEventListener("click", (e) => {
    const upperCaseRange = [...range(65, 90)];
    generateRange(upperCaseRange, e.target.checked);
})

lowerCase.addEventListener("click", (e) => {
    const lowerCaseRange = [...range(97, 122)];
    generateRange(lowerCaseRange, e.target.checked);
})

numbers.addEventListener("click", (e) => {
    const numberRange = [...range(48, 57)];
    generateRange(numberRange, e.target.checked);
})

symbols.addEventListener("click", (e) => {
    const symbolsRange = [...range(33, 47), ...range(58, 64), ...range(123, 126)]
    generateRange(symbolsRange, e.target.checked);
})


slider.addEventListener("input", (e) => {
    passwordLength = e.target.valueAsNumber;

    if(!upperCase.checked && !lowerCase.checked && !numbers.checked && !symbols.checked) {
        generatedPassword.innerText = "You must select at least 1 checkbox";

    } else {
        generatePassword(passwordLength);
       
    }

    charCount.innerText = passwordLength;
   
})


