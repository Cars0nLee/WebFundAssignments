function pizzaOven(crustType, sauceType, cheese, toppings) {
    var pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheese = cheese;
    pizza.toppings = toppings;
    return pizza;
}

var p1 = pizzaOven("deep dish", "traditional", "mozzarella", ["pepperoni", "sausage"]);
var p2 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]);
var p3 = pizzaOven("deep dish", "traditional", "feta", ["meatball", "sausage"]);
var p4 = pizzaOven("deep dish", "marinara", "mozzarella", ["mushrooms", "onions"]);
console.log(p1);
console.log(p2);
console.log(p3);
console.log(p4);
