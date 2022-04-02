// const array = [1, 2, 30, 400];
// // result: [2, 4, 60, 800]

// console.log(array.map(x => x*2));

// const array = [1, 2, 3, 4];
// // result: ["1", "2", "3", "4"]

// console.log(array.map(x => String(x)));

// const array = [1, '1', 2, {}];
// // result: ["number", "string", "number", "object"]

// console.log(array.map(x => typeof x));

// const array = ['apple', 'banana', 'orange'];
// // result: ["APPLE", "BANANA", "ORANGE"]

// console.log(array.map(x => x.toUpperCase()));

// const array = [1, 3, 4, 5, 6, 7, 8];
// // result: ["odd", "odd", "even", "odd", "even", "odd", "even"]

// console.log(array.map(x => {
//    return x % 2 === 0 ? "even" : "odd";
// }));

// const array = [1, -3, 2, 8, -4, 5];
// // result: [1, 3, 2, 8, 4, 5]

// console.log(array.map(x => Math.abs(x)));

// const array = [100, 200.25, 300.84, 400.3];
// // result: ["100.00", "200.25", "300.84", "400.30"]

// console.log(array.map(x => x.toFixed(2)));

// const array = [0, 5, 10, 7, 6, 5, 0];
// // result: ["Jan", "Jun", "Nov", "Aug", "Jul", "Jun", "Jan"]

// console.log(array.map(x => {
//     const date = new Date();
//     date.setMonth(x);
//     return date.toLocaleString("en-US", { month: "short" })
// }));

// const array = [1, 16, 81, 256, 625, 1296];
// // result: [1, 2, 3, 4, 5, 6]

// console.log(array.map(x => Math.sqrt(Math.sqrt(x))));

// const array = [
//   { name: 'apple', age: 14 },
//   { name: 'banana', age: 18 },
//   { name: 'watermelon', age: 32 }
// ];
// // result: ["apple", "banana", "watermelon"]

// console.log(array.map(x => x.name));

// const array = [
//   { name: 'apple', age: 14 },
//   { name: 'banana', age: 18 },
//   { name: 'watermelon', age: 32 }
// ];
// // result: [14, 18, 32]

// console.log(array.map(x => x.age));

// const array = [
//   { name: 'apple', surname: 'London' },
//   { name: 'banana', surname: 'Bangkok' },
//   { name: 'watermelon', surname: 'Singapore' }
// ];
// // result: ["apple London", "banana Bangkok", "watermelon Singapore"]

// console.log(array.map(x => x.name + " " + x.surname));

// const array = [
//   { name: 'apple', birth: '2000-01-01' },
//   { name: 'banana', birth: '1990-10-01' },
//   { name: 'watermelon', birth: '1985-12-01' }
// ];
// // result: [
// //   { name: "apple", birth: "2000-01-01", age: 21 },
// //   { name: "banana", birth: "1990-10-01", age: 31 },
// //   { name: "watermelon", birth: "1985-12-01", age: 36 },
// // ]

// console.log(array.map(x => {
//     return { name: x.name, birth: x.birth, age: 2021 - +x.birth.slice(0, 4) }
// }));

// const array = [
//   { name: 'apple', birth: '2000-01-01' },
//   { name: 'banana', birth: '1990-10-10' },
//   { name: 'watermelon', birth: '1985-12-30' }
// ];
// // result: [
// //     "<tr><td>apple</td><td>01 jan 2000</td></tr>",
// //     "<tr><td>banana</td><td>10 oct 1990</td></tr>",
// //     "<tr><td>watermelon</td><td>30 dec 1985</td></tr>",
// // ]

// console.log(array.map(x => {
//     const date = new Date();
//     date.setMonth(x.birth.slice(5, 7));
//     let month = date.toLocaleString("en-US", { month: "short" }) 
//     return `<tr><td>${x.name}</td><td>${x.birth.slice(8)} ${month.toLowerCase()} ${x.birth.slice(0, 4)}</td></tr>`
// }));