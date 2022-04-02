let alphabets = ['a', 'b', 'a', 'b', 'c', 'e', 'e', 'c', 'd', 'd', 'd', 'd'];
// expected result: ['a', 'b', 'c', 'e', 'd']

// method 1
// let uniqueAlphabets = new Set(alphabets)
// console.log(uniqueAlphabets);

// method 2
// console.log(alphabets.filter((value, index, self) => {
//     return self.indexOf(value) === index
// }));