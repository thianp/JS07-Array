const inventory = [
    { name: 'apples', quantity: 2 },
    { name: 'bananas', quantity: 0 },
    { name: 'cherries', quantity: 5 }
  ];
  // expected result: { name: 'cherries', quantity: 5 }

  console.log(inventory.find(obj => obj.name === "cherries"));