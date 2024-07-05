// // write a java script program to print"try again" until the user enters the correct number 
// let secretNumber = 42;
// let guess = 0;

// while (guess !== secretNumber) {
//     guess = prompt("Guess the secret number (between 1 and 100):");
//     if (guess !== secretNumber) {
//         console.log("Try again.");
//     }
// }

// console.log("Congratulations! You guessed the secret number.");


// write a function to find mean of 5 numbers
function FindMean(a, b, c, d, e) {
    let sum = a + b + c + d + e;
    let mean = sum / 5;
    return mean;
}
let mean = FindMean(4, 8, 7, 6, 2, 6)
console.log(mean)

