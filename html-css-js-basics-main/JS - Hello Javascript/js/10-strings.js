// JS String Type
// ctrl click to learn more 👉 https://www.w3schools.com/js/js_string_methods.asp

const firstStr = "Hello, ";
const secondStr = "World!";

// CONCATENATION
const message = firstStr + secondStr;
console.log("message:", message); // Hello, World!

// STRING LENGTH
console.log("message length:", message.length); // 13

// ACCESSING STRING CHARACTERS
console.log("first character:", message[0]); // H
console.log("last character:", message[message.length - 1]); // !
console.log("second character:", message[1]); // e
console.log("999th character:", message[999]); // undefined

// STRING TEMPLATE LITERALS
const fName = "John";
const age = 30;
const job = "Web Developer";

const template = `Hello, my name is ${fName}, I'm ${age} years old and I'm a ${job}.`;
console.log("template:", template); // Hello, my name is John, I'm 30 years old and I'm a Web Developer.

// STRING METHODS
// String methods are functions (more on that later) built into JavaScript that can be used to manipulate strings.
// here are some of the most commonly used string methods:

// Converting to Upper and Lower Case
console.log("uppercase:", message.toUpperCase()); // HELLO, WORLD!
console.log("lowercase:", message.toLowerCase()); // hello, world!

// Replacing String Content
console.log("replace:", message.replace("World", "Universe")); // Hello, Universe!

// Checking if a string includes a certain value
console.log("includes:", message.includes("World")); // true
console.log("includes:", message.includes("world")); // false

// Finding the index of a string
console.log("index of World:", message.indexOf("H")); // 0
console.log("index of World:", message.indexOf("World")); // 7
console.log("index of World:", message.indexOf("world")); // -1 (not found)

// Extracting String Parts
console.log("substring:", message.substring(7)); // World!
console.log("substring:", message.substring(7, 10)); // Wor

// Removing Whitespace
const messageWithWhitespace = "    Hello, World!    ";
console.log("whitespace:", messageWithWhitespace.trim()); // Hello, World!

// Extracting String Characters
console.log("slice:", message.slice(7)); // World!
console.log("slice:", message.slice(7, 10)); // Wor

// Splitting a String (returns an array , more on that later)
console.log("split:", message.split(" ")); // ["Hello,", "World!"]
console.log("split:", message.split("")); // ["H", "e", "l", "l", "o", ",", " ", "W", "o", "r", "l", "d", "!"]
