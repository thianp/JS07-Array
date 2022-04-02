const checkEmptyObj = (obj) => Object.entries(obj).length === 0;

let empty = {};
let notEmpty = { a: "a" };
let emptyArr = [];

console.log(checkEmptyObj(empty));
console.log(checkEmptyObj(notEmpty));
console.log(checkEmptyObj(emptyArr));