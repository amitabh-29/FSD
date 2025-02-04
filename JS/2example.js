// Example 1: Using Alerts
function example1() {
    alert("Hello, this is an alert dialog!");
}

// Example 2: Using Prompt
function example2() {
    let name = prompt("What is your name?");
    if (name) {
        alert("Hello, " + name + "!");
    } else {
        alert("You didn't provide your name.");
    }
}

// Example 3: Confirm Dialog
function example3() {
    let isConfirmed = confirm("Do you want to continue?");
    alert("Your choice: " + (isConfirmed ? "Yes" : "No"));
}

// Example 4: Data Types
function example4() {
    let number = 42;
    let text = "Hello";
    let isTrue = true;
    const output = `Number: ${typeof number}, Text: ${typeof text}, Boolean: ${typeof isTrue}`;
    document.getElementById("output4").textContent = output;
    console.log(typeof number, typeof text, typeof isTrue);
}

// Example 5: Operators
function example5() {
    let a = 10;
    let b = 20;
    let sum = a + b;
    let isEqual = a === b;
    const output = `Sum: ${sum}, Are they equal? ${isEqual}`;
    document.getElementById("output5").textContent = output;
    console.log("Sum:", sum, "Are they equal?", isEqual);
}
