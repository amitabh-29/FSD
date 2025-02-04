// Example 1: Displaying a Message
function example1() {
    alert("Welcome to JavaScript!");
}

// Example 2: Variables and Data Types
function example2() {
    let name = "John";
    let age = 25;
    let isStudent = true;
    const output = `Name: ${name}, Age: ${age}, Is Student: ${isStudent}`;
    document.getElementById("output2").textContent = output;
    console.log(name, age, isStudent);
}

// Example 3: Simple Arithmetic
function example3() {
    let a = 5;
    let b = 10;
    let sum = a + b;
    const output = `Sum is: ${sum}`;
    document.getElementById("output3").textContent = output;
    console.log("Sum is:", sum);
}

// Example 4: String Manipulation
function example4() {
    let greeting = "Hello";
    let subject = "World";
    let message = `${greeting}, ${subject}!`;
    document.getElementById("output4").textContent = message;
    console.log(message);
}

// Example 5: Conditional Statements
function example5() {
    let score = 85;
    let result;
    if (score >= 50) {
        result = "Pass";
    } else {
        result = "Fail";
    }
    document.getElementById("output5").textContent = result;
    console.log(result);
}
