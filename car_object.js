let car = {
    make : "toy",
    model : "toyota",
    year : 2002,
    startEngine : function(){
        // console.log("engine started")
        return this.make + this.model + this.year ;
    }   
}
 
 document.getElementById("hello").innerHTML=car.startEngine();


  
