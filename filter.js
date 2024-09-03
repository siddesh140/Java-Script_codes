// Creates a new array containing only the elements that pass a provided test function.

const numbers = [1, 2, 3, 4];

const evens = numbers.filter(num => num % 2 === 0);

console.log(evens); // Output: [2, 4]