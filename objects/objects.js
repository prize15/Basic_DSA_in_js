let person = {
    name: "Prize Aseeja",
    age: 24,
    greet: function () {
        console.log("Hello, " + this.name);
    }
};

console.log(person.name); // Output: "Prize Aseeja"
person.greet(); // Output: "Hello, Prize Aseeja"

// Adding a new property
person.job = "Developer";
console.log(person.job); // Output: "Developer"

// Iterating over an object
for (let key in person) {
    console.log(key + ": " + person[key]);
}
// Output:
// name: Prize Aseeja
// age: 24
// greet: function() { console.log("Hello, " + this.name); }
// job: Developer
