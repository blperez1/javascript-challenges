const letter = "blossom"

const factorial = (str) => {
    if(str.length === 1) {
        return 1;
    }
    return str.length * (factorial(str.slice(1)));
}

console.log(factorial(letter))