let john = { name: 'John', age: 27 };
let jo = { name: 'Jo', age: 21 };
let jin = { name: 'Jin', age: 25 };

let arr = [john, jo, jin];

function getAverageAge(arr) {
    return arr.reduce((acc, currentValue) => {
        return acc += currentValue.age/arr.length
    }, 0)
}

console.log(getAverageAge(arr)); // (27 + 21 + 25) / 3 = 24.33