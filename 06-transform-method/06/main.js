let arr = ['React', 'Vue', 'Angular'];
let sorted = copySorted(arr);

function copySorted(array) {
    let res = array.slice(0);
    return res.sort()
}

console.log(sorted); // Angular, React, Vue
console.log(arr); // React, Vue, Angular (no changes)