const arr = ['a', 'b', 'c', 'd'];
console.log(arr[2]); // Output: 'c'
arr.push('e');
console.log(arr); // Output: ['a', 'b', 'c', 'd', 'e']

// Adding and Removing Elements :

{
    let fruits = ["Apple", "Banana"];
    fruits.push("Orange"); // ["Apple", "Banana", "Orange"]
    fruits.pop(); // ["Apple", "Banana"]
    fruits.unshift("Strawberry"); // ["Strawberry", "Apple", "Banana"]
    fruits.shift(); // ["Apple", "Banana"]
}
// Accessing Elements:
{

    let fruits = ["Apple", "Banana", "Orange"];
    console.log(fruits.at(1)); // "Banana"
    console.log(fruits.at(-1)); // "Orange"
}
// Iterating Over Elements : 
{

    let fruits = ["Apple", "Banana", "Orange"];
    fruits.forEach((fruit) => console.log(fruit));
    // Output: Apple, Banana, Orange
}
//Transforming Arrays :
{
    let numbers = [1, 2, 3];
    let doubled = numbers.map((num) => num * 2); // [2, 4, 6]
}
//Filtering Arrays :
{

    let numbers = [1, 2, 3, 4, 5];
    let even = numbers.filter((num) => num % 2 === 0); // [2, 4]
}
//Reducing Arrays :
{
    let numbers = [1, 2, 3, 4];
    let sum = numbers.reduce((acc, curr) => acc + curr, 0); // 10
}
//Finding Elements :
{
    let numbers = [1, 2, 3, 4];
    let found = numbers.find((num) => num > 2); // 3
    let index = numbers.findIndex((num) => num > 2); // 2
}
//Checking Conditions:
{
    let numbers = [1, 2, 3, 4];
    let someEven = numbers.some((num) => num % 2 === 0); // true
    let allEven = numbers.every((num) => num % 2 === 0); // false
}
//Joining Elements:
{
    let fruits = ["Apple", "Banana", "Orange"];
    let fruitString = fruits.join(", "); // "Apple, Banana, Orange"
}
//Slicing and Splicing:

let fruits = ["Apple", "Banana", "Orange", "Mango"];
let citrus = fruits.slice(1, 3); // ["Banana", "Orange"]
fruits.splice(2, 1, "Grapes"); // ["Apple", "Banana", "Grapes", "Mango"]
