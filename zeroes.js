// from array shift all zeroes to last index and non zeroes to first index

const array = [2,5,3,0,8,0,6,0,6];
const newArray = [];
for(let i=0 ; i<array.length ; i++){
    if(array[i]==0){
        newArray.push(array[i]);
    }
    else{
        newArray.unshift(array[i]);
    }
}
// another way...

// const array = [2, 5, 3, 0, 8, 0, 6, 0, 6];

// const zero = array.filter(num =>
//     num == 0
// )
// const NonZero = array.filter(number =>
//     number != 0
// )
// const result = [zero,NonZero];
// console.log(result);



