// Task 1: Implement a function that calculates total coffees sold
    // Calculate the total coffees sold by summing up a sales array

function sumOfSales(salesArray){
    let total = 0;
    for(const i of salesArray){
        total += i;
    }
    return total;
}

// Task 2: Implement a function to filter out decaf coffees from a list of coffee options
    // Use the filter method to filter out decaf coffee options
function findDecafCoffes(coffeeOptions){
    let decafCoffe = [];
    for(let coffee of coffeeOptions){
        if(coffee.option == decaf){
            decafCoffe.push(coffee);
        }
    }
    return decafCoffe;
}

// Task 3: Define a class for Jazz Coffee Roasters
class JazzCoffeeRoasters{
    constructor(name, location){
        this.name = name
        this.location = location
    }
}

// Task 4: Extend the Jazz Coffee Roaster class for Specialty Coffee Roasters
class specialtyCoffeeRoasters extends JazzCoffeeRoasters{
    constructor(name, location, specialty){
        super(name, location);
        this.specialty = specialty;
    }
}

// Task 5: Create a custom constructor function for Jazz Coffee Blends
function jazzCoffeeBlends(name, type){
    let coffeBlends = {}
    coffeBlends.name = name;
    coffeBlends.type = type;
    return coffeBlends;
}

// Task 6: Implement a class with default parameters for Jazz Coffee Cups
class jazzCoffeeCups{
    constructor(name = "ahlams jazzy cups", location = "Saint Paul"){
        this.name = name;
        this.location = location;
    }
}


// Task 7: Use template literals to create a message about a coffee event
    //The event details have been given to you below
const coffeeEvent = {
    name: "Java Jam",
    date: "April 10, 2024",
    venue: "Jazz & Java"
};
let msgAboutoffeeEvent = document.createElement("li")
msgAboutoffeeEvent.textContent = `${coffeeEvent.name} - ${coffeeEvent.date} - ${coffeeEvent.venue} `


    // Task 9: Use spreadrest operators on an array
    
    // Array of coffee types
const coffeeTypes = ["Espresso", "Latte", "Cappuccino"];
const newType = "Mocha";

// Add a new coffee type using spread operator and create an updated coffee type array
let updatedCoffeeTypes = [...coffeeTypes, newType];

console.log("Updated Coffee Types:", updatedCoffeeTypes);

    