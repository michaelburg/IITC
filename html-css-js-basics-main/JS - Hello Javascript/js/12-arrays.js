// JS Arrays
// ctrl click to learn more 👉 https://www.w3schools.com/js/js_arrays.as

// - Arrays are used to store multiple values in a single variable.
// - The values are written as a list of (values) separated by commas.
// - The values are enclosed in square brackets [].

// CREATE AN ARRAY
let fruits = ["Apple", "Banana", "Orange"];

// array of mixed data types.
// in 99% of the cases, the elements of an array are of the same data type.
let someValues = [
  1,
  "Hello",
  true,
  { name: "John" },
  null,
  undefined,
  [1, 2, 3],
];

// we can access the array elements using the index
console.log("fruits[0]", fruits[0]); // Apple
console.log("fruits[1]", fruits[1]); // Banana
console.log("fruits[2]", fruits[5]); // undefined

// we can modify the array elements
console.log("fruits (before modification)", fruits); // [ 'Apple', 'Banana', 'Orange' ]
fruits[0] = "Cherry";
console.log("fruits (after modification)", fruits); // [ 'Cherry', 'Banana', 'Orange' ]

// we can get the length of the array using the 'length' property
console.log("fruits.length", fruits.length); // 3

// ARRAY METHODS
// These are some of the most commonly used array methods:

// - push: add an element to the end of the array
fruits.push("Mango");
console.log("fruits (after push)", fruits); // [ 'Cherry', 'Banana', 'Orange', 'Mango' ]

// - pop: remove the last element from the array
fruits.pop();
console.log("fruits (after pop)", fruits); // [ 'Cherry', 'Banana', 'Orange' ]

// - shift: remove the first element from the array
fruits.shift();
console.log("fruits (after shift)", fruits); // [ 'Banana', 'Orange' ]

// - unshift: add an element to the beginning of the array
fruits.unshift("Apple");
console.log("fruits (after unshift)", fruits); // [ 'Apple', 'Banana', 'Orange' ]

// - reverse: reverse the order of the elements in the array
fruits.reverse();
console.log("fruits (after reverse)", fruits); // [ 'Orange', 'Banana', 'Apple' ]

// - splice: add or remove elements from the array
fruits.splice(1, 0, "Mango");
console.log("fruits (after splice)", fruits); // [ 'Apple', 'Mango', 'Banana', 'Orange' ]

// - concat: join two or more arrays
let vegetables = ["Tomato", "Potato"];
let fruitsAndVegetables = fruits.concat(vegetables);
console.log("fruitsAndVegetables", fruitsAndVegetables); // [ 'Apple', 'Mango', 'Banana', 'Orange', 'Tomato', 'Potato' ]
