function addSquare(a,b) {

    
    function sqaure(num) {
        
        return num * num
    }
    const squareOfa = sqaure(a);

    const squareOfb = sqaure(b);

    return squareOfa + squareOfb;
}
console.log(addSquare(5, 7)); 

