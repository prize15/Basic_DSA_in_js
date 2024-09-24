let str = "Hello, World!";
console.log(str.length); // Output: 13
console.log(str.toUpperCase()); // Output: "HELLO, WORLD!"
console.log(str.substring(0, 5)); // Output: "Hello"

{
    // Length :
    let str = "Hello, World!";
    console.log(str.length); // Output: 13
}
// Accessing Characters :
{
    let str = "Hello";
    console.log(str.charAt(1)); // Output: "e"
    console.log(str.charCodeAt(1)); // Output: 101
}
//Changing Case :
{
    let str = "Hello, World!";
    console.log(str.toUpperCase()); // Output: "HELLO, WORLD!"
    console.log(str.toLowerCase()); // Output: "hello, world!"

}
//Substring Extraction :
{
    let str = "Hello, World!";
    console.log(str.slice(0, 5)); // Output: "Hello"
    console.log(str.substring(0, 5)); // Output: "Hello"
    //console.log(str.substr(0, 5)); // Output: "Hello"
}
//Replacing Substrings :
{
    let str = "Hello, World!";
    console.log(str.replace("World", "JavaScript")); // Output: "Hello, JavaScript!"
    console.log(str.replaceAll("l", "L")); // Output: "HeLLo, WorLd!"

}
//Concatenation :
{
    let str1 = "Hello";
    let str2 = "World";
    console.log(str1.concat(", ", str2, "!")); // Output: "Hello, World!"

}
//Trimming :
{
    let str = "   Hello, World!   ";
    console.log(str.trim()); // Output: "Hello, World!"
    console.log(str.trimStart()); // Output: "Hello, World!   "
    console.log(str.trimEnd()); // Output: "   Hello, World!"

}
//Splitting :
{
    let str = "Hello, World!";
    let arr = str.split(", ");
    console.log(arr); // Output: ["Hello", "World!"]

}
//Padding :
{
    let str = "5";
    console.log(str.padStart(3, "0")); // Output: "005"
    console.log(str.padEnd(3, "0")); // Output: "500"

}
//Checking for Sub Strings :
{
    let str = "Hello, World!";
    console.log(str.includes("World")); // Output: true
    console.log(str.startsWith("Hello")); // Output: true
    console.log(str.endsWith("!")); // Output: true

}

