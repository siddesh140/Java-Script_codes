// function student(name) {
//     console.log("hey " + name + " u are nice")
//     console.log("hey " + name + " u are good")
//     console.log("hey " + name + " u are shying person")
//     console.log("hey " + name + " u are tall")
//     console.log("hey " + name + " u are handsome")
//     console.log("hey " + name + " u are loyal")
// }
// student("siddesh")


// function sum(math, physics, bio, ) {
//     return math + physics + bio
// }
// result1 = sum(20, 50, 10)
// result2 = sum(24, 60, 60)
// result3 = sum(20, 50, 80)
// result4 = sum(20, 40, 10)
// console.log("the total sum is :", result1)
// console.log("the total sum is :", result2)
// console.log("the total sum is :", result3)
// console.log("the total sum is :", result4)

function sum(math, physics, bio, grace = 5) {
    return math + physics + bio + grace
}
result1 = sum(20, 50, 10)
result2 = sum(24, 60, 60)
result3 = sum(20, 50, 80)
result4 = sum(20, 40, 10)
console.log("the total sum is :", result1)
console.log("the total sum is :", result2)
console.log("the total sum is :", result3)
console.log("the total sum is :", result4)