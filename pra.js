class Adventurer {
    constructor(name) {
        this.name = name;
    }

    roll(mod = 0) {
        const result = Math.floor(Math.random() * 20) + 1 + mod;
        console.log(`${this.name} rolled a ${result}.`);
    }
}

// Create adventurers
const adventurers = [
    new Adventurer("Alice"),
    new Adventurer("Bob"),
    new Adventurer("Charlie")
];

// Test the roll method for each adventurer
adventurers.forEach(adventurer => {
    adventurer.roll();
});

// You can also test with a modifier
adventurers.forEach(adventurer => {
    adventurer.roll(2); // Passing a modifier of 2, for example
});