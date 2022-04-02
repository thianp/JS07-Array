const alphabets = ['a', 'b', 'a', 'c', 'a', 'd'];

function findIndex(arr, item) {
    let result = [];
    arr.filter((el, index) => {
        if (el === item) {
            result.push(index)
        }
    })
    return result;
}

console.log(findIndex(alphabets, 'a'));