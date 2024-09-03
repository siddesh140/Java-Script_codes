//  Lets learn about Sort in javascript
// The sort() method in JavaScript arranges the elements of an array in place and returns the sorted array. By default, it sorts elements alphabetically, treating them as strings.

// arr.sort(compareFunction);


// Example 1: Sorting an array of strings
// JavaScript to illustrate sort() function
function func() {

    // Original string
    let arr = ["Geeks", "for", "monk"]

    console.log(arr);
    // Sorting the array
    console.log(arr.sort());
}
func();

// Example 2: Sorting an array of numbers without compare function

// Here, the sort() method arranges the elements of the array in ascending order.


// JavaScript to illustrate sort() function
function func() {
    //Original string
    let arr = [2, 5, 8, 1, 4]

    //Sorting the array
    console.log(arr.sort());
}
func();

// Output[ 1, 2, 4, 5, 8 ]
