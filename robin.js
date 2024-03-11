// Part 1: Humble Beginnings

// Let’s model a simple adventurer with basic properties such as health and an inventory. 
// We will call the adventurer “Robin.”
// class Adventurer {
//     constructor(name) {
//         this.name = name;
//         this.type = this.type;
//     }
// }


const adventurer = {
    name: "Robin",
    health: 10,
    inventory: ["sword", "potion", "artifact"],
    companion: {
        name: "Leo",
        type: "Cat",
        companion: {
            compname: "Frank",
            comptype: "Flea",
            belongings: ["hat", "sunglasses"],
        },
    },
    roll(mod = 0) {
        const result = Math.floor(Math.random() * 20) + 1 + mod;
        // console.log(`${this.name} rolled a ${result}.`)
    },
};


// for (let i=0; i<adventurer.inventory.length; i++) {
//       console.log("in for loop, looking at each element of the inventory array");
//       console.log('this is element i');
//   console.log(adventurer.inventory[i]);
// }
// console.log(adventurer);

// From the adventurer object, we can access Robin’s inventory using a combination 
// of dot notation and square bracket syntax. For example, we could find a sword at adventurer.inventory[0].
// As an additional practice exercise, create a loop that logs each item in Robin’s inventory.
// Nested arrays are useful, but so are nested objects. Let’s give Robin a companion
//  to travel with – a furry friend they call “Leo.”

// Next, give Robin’s feline friend a friend of his own:
// Add a “companion” sub-object to “Leo” with the following properties:
// The companion’s name is “Frank.”
// The companion’s type is “Flea.”
// The companion has its own belongings, which includes a small hat and sunglasses.

console.log("=============================================================================")


// console.log(adventurer.companion);
// adventurer.inventory[0];
// adventurer.roll();


// PART: 2 - CLASS FANTASY


class Character {
    //add a static  MAX_HEALTH property to the Character class equal to 100.
    //can only be accessed by the class itself by doing console.log(Character.MAX_HEALTH);
    static MAX_HEALTH = 100;
    constructor(name) {
        this.name = name;
        this.health = 100;
        this.inventory = [];
    }
    roll(mod = 0) {
        const result = Math.floor(Math.random() * 20) + 1 + mod;
        console.log(`${this.name} rolled a ${result}.`);
    }
}
const robin = new Character("Robin");
robin.inventory = ["sword", "potion", "artifact"];
robin.companion = new Character("Leo");
robin.companion.type = "Cat";
robin.companion.companion = new Character("Frank");
robin.companion.companion.type = "Flea";
robin.companion.companion.inventory = ["small hat", "sunglasses"];
console.log(robin);
console.log(robin.companion.type);
// console.log(Character);
robin.companion.companion.roll();

// console.log(robin.inventory)
// console.log(Character)


// robin.companion.companion.roll();
// robin.companion.roll();
// robin.roll();

console.log("=============================================================================")
// PART 3 - Class Features

class Adventurer extends Character {
    // Add a static ROLES array to the Adventurer class, with the values “Fighter,” “Healer,” and “Wizard.” Feel free to add other roles, if you desire!
    static ROLES = ['Fighter', 'Healer', 'Wizard'];
    constructor(name, role,) {
        super(name);
        // Adventurers have specialized roles.
        this.role = role;
        // Every adventurer starts with a bed and 50 gold coins.
        this.inventory.push("bedroll", "50 gold coins");
    }
    // Adventurers have the ability to scout ahead of them.
    scout() {
        console.log(`${this.name} is scouting ahead...`);
        super.roll();
    }
    discover(){
        console.log(`${this.name} is discovering...`);
        super.roll();
    }
    fish(){
        console.log(`${this.name} is fishing...`);
        super.roll();
    }
    addItems(items){
    console.log(this.inventory.push(items));
    }
}
console.log(Adventurer.ROLES);
const Pritee = new Adventurer ('Pritee', 'girl scout');
console.log(Pritee);
//answer:
// Adventurer {
//     name: 'Pritee',
//     health: 100,
//     inventory: [ 'bedroll', '50 gold coins' ],
//     role: 'girl scout'
//   }
Pritee.fish();
//answer:
// Pritee is fishing...
// Pritee rolled a 11.
//Next, create a Companion class with properties and methods specific to the companions.
class Companion extends Character {
    constructor(name, type){
        super(name);
        this.name = name;
        this.type = type;
    }
    //methods
    assist(){
        console.log (`${this.name} is a ${this.type} assisting the adventurer.`)
    }
}
const Tinkerbell = new Companion ("Tinkerbell", "fairy");
Tinkerbell.assist();
//answer: Tinkerbell is a fairy assisting the adventurer.
// Finally, change the declaration of Robin and the companions to use the new Adventurer and Companion classes.
let Robin = new Adventurer('Robin','adventurer');
let Leo = new Companion('Leo', 'cat');
let Frank = new Companion ('Frank', 'flea');
