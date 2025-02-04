// Example 1: Using for...in loop to iterate over object properties
function iterateObject() {
    const person = { name: 'Alice', age: 25, city: 'New York' };
    let result = '';
    for (let key in person) {
        result += `${key}: ${person[key]} \n`;
    }
    alert("Object properties: \n" + result);
}

// Example 2: Using for...in loop to find the length of an object
function objectLength() {
    const person = { name: 'Alice', age: 25, city: 'New York' };
    let length = 0;
    for (let key in person) {
        length++;
    }
    alert("Object length: " + length);
}

// Example 3: Using for...of loop to iterate over an array
function iterateArray() {
    const fruits = ['Apple', 'Banana', 'Cherry'];
    let result = '';
    for (let fruit of fruits) {
        result += `${fruit} \n`;
    }
    alert("Array elements: \n" + result);
}

// Example 4: Using for...of loop with a string
function iterateString() {
    const text = 'JavaScript';
    let result = '';
    for (let char of text) {
        result += `${char} \n`;
    }
    alert("String characters: \n" + result);
}

// Example 5: Using for...in loop to list the keys of an object
function listObjectKeys() {
    const person = { name: 'Alice', age: 25, city: 'New York' };
    let keys = '';
    for (let key in person) {
        keys += `${key} \n`;
    }
    alert("Object keys: \n" + keys);
}

// Example 6: Using for...in loop with array (not recommended but demonstrated)
function iterateArrayWithForIn() {
    const fruits = ['Apple', 'Banana', 'Cherry'];
    let result = '';
    for (let index in fruits) { // Not recommended for arrays
        result += `${index}: ${fruits[index]} \n`;
    }
    alert("Array elements with for...in: \n" + result);
}

// Example 7: Using for...of loop to sum all array elements
function sumArrayElements() {
    const numbers = [10, 20, 30, 40];
    let sum = 0;
    for (let num of numbers) {
        sum += num;
    }
    alert("Sum of array elements: " + sum);
}

// Example 8: Debugging a syntax error (in the code)
function debugSyntaxError() {
    // Syntax error example: Missing closing bracket
    // Uncommenting this line will cause a syntax error:
    // let x = 10;
    alert("Syntax error: Check the JavaScript console for errors.");
}

// Example 9: Debugging a logic error (in the code)
function debugLogicError() {
    // Logic error example: incorrect sum calculation
    const numbers = [10, 20, 30];
    let sum = 0;
    for (let num of numbers) {
        sum = sum - num; // Incorrect operation: should be sum += num;
    }
    alert("Logic error: The sum should be 60, but it's " + sum);
}

// Example 10: Using console.log for debugging
function debugWithConsole() {
    const x = 10;
    const y = 20;
    console.log("Debugging values: x = " + x + ", y = " + y);
    const sum = x + y;
    console.log("Calculated sum: " + sum);
    alert("Check the browser console for debugging information.");
}
