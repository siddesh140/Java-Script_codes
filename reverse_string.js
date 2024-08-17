// let array = [1, 2, 3, 4, 5];

// function reverseString(array) {
//     return array.reverse("");

// }
// console.log(reverseString(array));

// let str= prompt("any string")
// let str = "hello i am AI "
// function reverseString(str) {
//     return str.split("").reverse().join("");
//     // return str.reverse("");
// }

// console.log(reverseString(str));

let string = "Hello this is yash";
const reverseWords = s => s.split(' ').reverse().join(' ');

// Example usage
let reversedString = reverseWords(string);
console.log(reversedString);  // Output: "yash is this Hello"

