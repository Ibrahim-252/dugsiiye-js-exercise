
const numbers = [1, 2, 3, 4, 5];

const multiplication = numbers.reduce((multiply, num) => multiply * num, 1);

console.log(multiplication); // 120
