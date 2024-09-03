//  lets learn about For Each
// The JavaScript Array forEach() method is a built-in function that executes a provided function once for each array element. It does not return a new array and does not modify the original array. It’s commonly used for iteration and performing actions on each array element.

const arr = [1, 2, 3, 4, 5];

arr.forEach((item) => {
    console.log(item);
});

// JavaScript Array forEach() Method

// Original array
const items = [12, 24, 36];
const copy = [];

items.forEach(function (item) {
    copy.push(item);
});

console.log(copy);
