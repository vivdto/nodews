// Print "Hello World" to the console
console.log("Hello World");

// Define a function called 'add' that takes two parameters 'a' and 'b' and returns their sum
function add(a, b){
    return a + b;
}

// Call the 'add' function with arguments 2 and 8, then print the result to the console
console.log(add(2, 8));

// Print the array of command line arguments passed when running the script using Node.js
console.log(process.argv);

// Extract the command line arguments passed to the script, excluding the first two elements which are node executable and script file
var args = process.argv.slice(2);

// Attempt to add the first two command line arguments as numbers and print the result
console.log("Adding the numbers: ", add(parseInt(args[0])), parseInt(args[1]));
/*
Notes:

This script demonstrates basic usage of Node.js and JavaScript syntax.
console.log() is used to output messages to the console.
A simple function add is defined to add two numbers.
process.argv is an array containing the command line arguments provided when the Node.js script is executed. The first two elements are the executable path and the script file path.
parseInt() is used to convert strings to integers for addition.
There's a typo in the last console.log(), it should be args instead of process.argv.
Interview Questions:

What does console.log() do in Node.js?

A) It logs messages to the console.
B) It executes JavaScript code.
C) It reads files from the filesystem.
D) It sends HTTP requests.
Answer: A) It logs messages to the console.
What is the purpose of process.argv in Node.js?

A) To access environment variables.
B) To manage child processes.
C) To parse command line arguments.
D) To manipulate the DOM.
Answer: C) To parse command line arguments.
What does the parseInt() function do in JavaScript?

A) It converts strings to integers.
B) It converts integers to strings.
C) It performs floating point arithmetic.
D) It finds the length of an array.
Answer: A) It converts strings to integers.

*/