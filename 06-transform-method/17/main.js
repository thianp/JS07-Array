let str = '31 45 12 67 34 86 23 37 19 41';

function findSumOfUnder40(str) {
    let newArr = str.split(" ").filter(num => num < 40)
    return newArr.reduce((acc, currentValue) => acc + +currentValue, 0)
}

console.log(findSumOfUnder40(str));
console.log(31+12+34+23+37+19); 