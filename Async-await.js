function makecheese() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const cheese = "🧀"
            // console.log("here is the cheese", cheese);
            resolve(cheese)
        }, 2000);
    })

}

function makedough(cheese) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dough = cheese + "🍪";
            // console.log("proccesing dough", dough);
            resolve(dough);
            // reject("Bad Cheese");
        }, 2000);
    })
}
function makePizza(dough) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const pizza = dough + "🍕";
            // console.log("here is the pizza", pizza);
            resolve(pizza);
        }, 2000);
    })
}

async function OrderPizza() {
    try {
        const cheese = await makecheese();
        console.log("here is the cheese");

        const dough = await makedough(cheese);
        console.log("here is the dough", dough);

        const pizza = await makePizza(dough);
        console.log("here is the pizza", pizza);
    }

    catch (data) {
        console.log("error occured, due to reseons,", data);
    }
    console.log("Visit Again 😁");
}
OrderPizza();


// for  " reject function " this is another code

/*
function makecheese() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const cheese = "🧀"
            // console.log("here is the cheese", cheese);
            resolve(cheese)
        }, 2000);
    })

}

function makedough(cheese) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dough = cheese + "🍪";
            // console.log("proccesing dough", dough);
            resolve(dough);
            // reject("Bad Cheese");
        }, 2000);
    })
}
function makePizza(dough) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const pizza = dough + "🍕";
            // console.log("here is the pizza", pizza);
            reject("unavailabe of resources");
        }, 2000);
    })
}

async function OrderPizza() {
    try {
        const cheese = await makecheese();
        console.log("here is the cheese");

        const dough = await makedough();
        console.log("here is the dough", cheese);

        const pizza = await makePizza();
        console.log("here is the pizza", dough);
    }

    catch (data) {
        console.log("error occured, due to reseons,", data);
    }
    console.log("Visit Again 😁");
}
OrderPizza();
*/