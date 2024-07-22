
// Calculating Factorials Using Reduce and For Loops.......

let arr1 = [1, 2, 3, 4, 5, 6];
const fact = (a, b) => {
    return (a * b);
}
console.log(arr1.reduce(fact));

let arr2 = [1, 2, 3, 4, 5, 6];
let fact2 = 1 ;
for (let i = 0; i < arr2.length; i++) {
    fact2 = fact2 * arr2[i];
}
console.log(fact2);

