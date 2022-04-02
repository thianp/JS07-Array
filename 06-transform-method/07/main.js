const nums = [-3, 2, 11, -7, 4, 6];

console.log(nums.reduce((acc, currentValue) => {
    return acc * currentValue
}, 1));