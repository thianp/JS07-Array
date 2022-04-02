let animals = ["Dog", "Cat", "Rat"];

animals.push("Fish");
animals.unshift("Horse");
animals.push("Giraffe", "Snake");
animals.shift();
animals.pop();
animals.shift();

console.log(animals); // ['Cat', 'Rat', 'Fish', 'Giraffe']