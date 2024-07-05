// let array = [1, 3, 2, 4, 5]
// console.log(array)
// // array[1] = 987666
// array[1] = "t"
// // by above line we can say that arrays are mutable where strings are immutable.....
// console.log(array[0])
// console.log(array[1])
// console.log(array[2])
// console.log(array[3])
// console.log(array[4])
function linearSearch(arr, val) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === val) {
            return i;
        }
    }
    return -1;
}

// Example usage
/* let myArray = [3, 5, 2, 9, 8, 4];
let searchValue = 9;
let result = linearSearch(myArray, searchValue);

if (result === -1) {
    console.log("Element not found");
} else {
    console.log("Element found at index " + result);
}
*/

let arr = [1, 3, 2, 23, 45];
let NewArray = [];
for (let index = 0; index < arr; index++) {
    const element = arr[index];
    NewArray.push(element ** 2);
}
console.log(NewArray)
//  Instead of this we can use map() function for less code....

let array = [1, 3, 2, 23, 45];
NewArray = array.map((e) => {
    return e ** 2;
})
console.log(NewArray)
const greaterthanseven = (e) => {
    if (e > 7) {
        return true;
    }
    return false;
}
console.log(NewArray.filter(greaterthanseven));













