function CalculateAreaOfRectangle(width,height){
    return width*height;
}
const Area = CalculateAreaOfRectangle(2,5);
console.log(Area) ;

// by using arrow function 
let area = (width,height) =>{
    return width*height ;
}
console.log(area);