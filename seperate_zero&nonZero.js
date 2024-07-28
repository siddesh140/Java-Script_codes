const array = [1, 4, 2, 50, 7, 9, 0, 0, 4, 7, 0,];
const NZ = [];
const Z = [];
for (let i = 0; i < array.length; i++) {
    if (array[i] !== 0) {
        NZ.push(array[i]);
    }
    else {
        Z.push(array[i]);
    }
}
const result = [Z, NZ];
console.log(result);


// second way ......
let num = [1, 4, 2, 50, 7, 9, 0, 0, 4, 7, 0,];
const Nzero = num.filter(value =>
    value !== 0
)
const zero = num.filter(value =>
    value === 0
)
const result1 = [Nzero, zero];
console.log(result1);



