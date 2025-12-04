// spread

const numbers = [1,2,3,4];

const allNumbers = [...numbers, 8,7,6,5];

console.log(allNumbers);

// rest

function multiply(...numbers) {
  return numbers.reduce((product, num) => product * num, 1);
}

console.log(multiply(2, 3, 4)); // 24
console.log(multiply(5, 10));   // 50


