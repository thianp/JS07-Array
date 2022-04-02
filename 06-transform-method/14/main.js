const products = [
    { id: 1, name: 'Crystal' },
    { id: 4, name: 'Namthip' },
    { id: 5, name: 'Nestle' }
  ];
  // { 1: { name: 'Crystal' }, 4: { name: 'Namthip' }, 5: { name: 'Nestle' } };

  console.log(products.reduce((acc, currentValue) => {
      return {
          ...acc, /* the spread operator adds the result 
          of the previous iteration to the object, without 
          this, only the value from the last iteration will
          be returned */
          [currentValue.id]: {name : currentValue.name}
          // ^ use computed property name feature
      }
  }, {}));