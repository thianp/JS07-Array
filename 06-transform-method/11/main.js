let str = 'I live in Thailand';

let arr = str.toLowerCase().split(" ").join("").split("");

console.log(arr.reduce((acc, curVal) => {
    if (acc[curVal] === undefined) {
        acc[curVal] = 1;
    } else {
        acc[curVal] ++
    }
    return acc
}, {}));