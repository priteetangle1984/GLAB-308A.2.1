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
    constructor(name) {
        this.name = name;
        this.health = 100;
        this.inventory = [];
    }

    roll(mod = 0) {
        const result = Math.floor(Math.random() * 20) + 1 + mod;
        console.log(`${this.name} rolled a ${result}.`)
    }
}
const robin = new Character("Robin");
robin.inventory = ["sword", "potion", "artifact"];
robin.companion = new Character("Leo");
robin.companion.type = "Cat";
robin.companion.companion = new Character("Frank");
robin.companion.companion.type = "Flea";
robin.companion.companion.inventory = ["small hat", "sunglasses"];

// console.log(robin.inventory)
// console.log(Character)


robin.companion.companion.roll();
robin.companion.roll();
robin.roll();

// PART 3 - Class Features

class Adventurer extends Character {
    constructor (name, role) {
      super(name);
      // Adventurers have specialized roles.
      this.role = role;
      // Every adventurer starts with a bed and 50 gold coins.
      this.inventory.push("bedroll", "50 gold coins");
    }
    // Adventurers have the ability to scout ahead of them.
    scout () {
      console.log(`${this.name} is scouting ahead...`);
      super.roll();
    }

    // speak () {
    //     console.log(`${this.name} says meow ....`)
    // }
  }

  class Companion extends Character {
    
  }