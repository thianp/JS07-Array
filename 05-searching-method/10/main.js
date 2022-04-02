function filterRange(arr, a, b) {
    let result = [];
    arr.forEach(el => {
        el > a && el < b ? result.push(el) : null 
    })
    return result;
}

console.log(filterRange([1, 2, 3, 4, 5], 2, 5));