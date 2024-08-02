function getCheese(callback) {
    setTimeout(() => {
        const cheese = "🧀";
        console.log("here is the cheese", cheese);
        callback(cheese);
    }, 2000);
}
function makeDough(cheese, callback) {
    setTimeout(() => {
        const Dough = cheese + "🍪";
        console.log("Here is the dough", Dough);
        callback(Dough);
    }, 2000);
}
function makePizaa(Dough, callback) {
    setTimeout(() => {
        const pizza = "🍕" + Dough;
        console.log("making pizza", pizza)
        callback(pizza);
    }, 2000);
}

getCheese((cheese) => {
    makeDough(cheese, (Dough) => {
       makePizaa(Dough,(pizza)=>{
        console.log("heyyy, your pizza get ready 😋😋");
       })
    })
})
