function secondMostFrequentChar(s) {
    // Create an object to store the frequency of each character
    let charFreq = {};

    // Iterate over the string and count the frequency of each character
    for (let char of s) {
        if (char in charFreq) {
            charFreq[char]++;
        } else {
            charFreq[char] = 1;
        }
    }

    // Convert the object to an array of key-value pairs and sort it by values in descending order
    let sortedCharFreq = Object.entries(charFreq).sort((a, b) => b[1] - a[1]);

    // Check if there are at least two unique characters
    if (sortedCharFreq.length > 1) {
        // Print the second most frequent character
        console.log(`The second most frequent character is: ${sortedCharFreq[1][0]}`);
    } else {
        console.log("There is no second most frequent character.");
    }
}

// Test the function
let s = "aaabbh";
secondMostFrequentChar(s);