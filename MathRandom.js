function getRandom(min, max) {
    return Math.floor(Math.random()*(max-min+1)+min+1);
}
console.log(getRandom(50,100));


// Math.random => prints numbers between 0 to 0.9
// Math.floor  => rounds up the value 