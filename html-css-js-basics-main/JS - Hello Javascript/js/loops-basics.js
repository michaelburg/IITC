// JS Loops
// ctrl click to learn more 👉 https://www.w3schools.com/js/js_loop_for.asp

// General rules:
// Loops can execute a block of code a number of times.
// Loops are handy, if you want to run the same code over and over again, each time with a different value.
// There are many different kinds of loops, but they all do roughly the same thing: they repeat an action some number of times.

// while loop:
let count = 0; // declare the variable outside the loop
while (count < 5) {
  console.log("The count is " + count);
  count++; // increment the variable inside the loop
}

// ❗❗❗ Bewhere of infinite loops ❗❗❗
// Change the condition to 'true' to experience an infinite loop
// *you will need to close the browser tab to stop the loop
while (false) {
  console.log("infinite loop!");
}

// for loop:
// in for loop, we declare the variable (i),
// the condition (i < 5) and the increment (i++) in the same line
for (let i = 0; i < 5; i++) {
  console.log("The number is " + i);
}

// Loop that iterates through a string and prints each character:
const message = "Hello, World!";
for (let i = 0; i < message.length; i++) {
  console.log(message[i]);
}

// Loops with if statement:

// check if the number is even or odd
for (let i = 0; i < 10; i++) {
  // if the number is divisible by 2 with no remainder, it's even
  if (i % 2 === 0) {
    console.log(i + " is even");
  } else {
    console.log(i + " is odd");
  }
}

const age = 18;
// TODO: create a loop that prints the numbers from 0 to the age variable
// TODO: create a loop that prints the numbers from the age variable to 0
// TODO: create a loop that prints the numbers from 3 to 13

const fullName = "omer mazig";
// TODO: print the index of the letter 'z' in the console using a loop
// TODO: print how many times the letter 'm' appears in the string
// TODO: create a new string without spaces, based on the 'fullName' and print it
