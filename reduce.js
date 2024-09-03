// Reduces an array to a single value by applying a provided function to each element and accumulating the results.

const numbers = [1, 2, 3, 4];

const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log(sum); // Output: 10