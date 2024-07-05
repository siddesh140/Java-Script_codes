// make a biusness name generator without using array
// let r1 = Math.floor(Math.random() * 20) % 3;
// let r2 = Math.floor(Math.random() * 20) % 3;
// let r3 = Math.floor(Math.random() * 20) % 3;

// let adjectives = {
//     0: "Crazy",
//     1: "amazing",
//     2: "fire"
// }
// let ShopName = {
//     0: "Engine",
//     1: "Food",
//     2: "Garments"
// }
// let AnotherWord = {
//     0: "Bros",
//     1: "Limited",
//     2: "Hub"
// }

// console.log(`${adjectives[r1]} ${ShopName[r2]} ${AnotherWord[r3]}`)

// CODE OF HAFRY BHAI
let random = Math.random();
let rand,first , second, third;
// 0 0.33 0.66 1
 // Lets generate the first word
 if(rand<0.33){
    first = "Crazy"
}
else if(rand<0.66 && rand>=0.33){
    first = "Amazing"
}
else{
    first = "Fire"
}

// Lets generate the second word
rand = Math.random()
if (rand < 0.33) {
    second = "Engine"
}
else if (rand < 0.66 && rand >= 0.33) {
    second = "Foods"
}
else {
    second = "Garments"
}

// Lets generate the third word
rand = Math.random()
if (rand < 0.33) {
    third = "Bros"
}
else if (rand < 0.66 && rand >= 0.33) {
    third = "Limited"
}
else {
    third = "Hub"
}

console.log(` ${first} ${second} ${third}`)