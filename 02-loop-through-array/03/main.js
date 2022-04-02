let sales = [
  { price: 1000, discount: 0.9 },
  { price: 500, discount: 0.95 },
  { price: 100 },
];

function findNetPrice(arr) {
  return arr.map((x) => {
    if (x.discount) {
      return { netPrice: x.price * x.discount };
    } else {
      return { netPrice: x.price };
    }
  });
}

console.log(findNetPrice(sales));

// const summary = [
//     { netPrice: 900 },
//     { netPrice: 475 },
//     { netPrice: 100 }
//   ];
