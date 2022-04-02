let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  };

console.log(Object.values(salaries).reduce((acc, cur) => acc + cur, 0));