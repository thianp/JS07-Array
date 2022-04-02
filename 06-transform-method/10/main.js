let names = ['Jack', 'John', 'Bill', 'John', 'Rick', 'Bill', 'John'];

console.log(names.reduce((acc, curVal) => {
    if (acc[curVal] === undefined) {
        acc[curVal] = 1;
    } else {
        acc[curVal] ++
    }
    return acc
}, {}));