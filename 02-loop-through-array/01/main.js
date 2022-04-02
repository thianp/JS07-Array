const isValidNumber = number => {
    if (number === null || number.trim() === '' || isNaN(+number)) return false;
    return true
}

let Array = [];
let input;

do {
    input = prompt('input a number');
    if (isValidNumber(input)) {
        Array.push(input)
    }
} while (isValidNumber(input))

let sum = Array.reduce((a, b) => +a + +b, 0)

console.log(Array);
console.log(sum);