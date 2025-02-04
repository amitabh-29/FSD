// Example 1: A simple function to greet the user
function greetUser() {
    alert("Hello, User!");
}

// Example 2: A function to add two numbers
function addNumbers(a, b) {
    alert("The sum is: " + (a + b));
}

// Example 3: A function to show a simple message
function showMessage() {
    alert("This is a simple message!");
}

// Example 4: A function to multiply two numbers
function multiplyNumbers(a, b) {
    alert("The product is: " + (a * b));
}

// Example 5: A function to check if a number is even or odd
function checkEvenOdd(num) {
    if (num % 2 === 0) {
        alert(num + " is even.");
    } else {
        alert(num + " is odd.");
    }
}

// Example 6: A function to say hello to a person
function sayHello(name) {
    alert("Hello, " + name + "!");
}

// Example 7: A function to calculate the area of a circle
function calculateArea(radius) {
    const area = Math.PI * Math.pow(radius, 2);
    alert("The area of the circle is: " + area.toFixed(2));
}

// Example 8: A function to sum all elements of an array
function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    alert("The sum of the array is: " + sum);
}

// Example 9: A function to reverse a string
function reverseString(str) {
    let reversed = str.split('').reverse().join('');
    alert("The reversed string is: " + reversed);
}

// Example 10: A function to find the maximum number from three numbers
function getMaxNumber(a, b, c) {
    let max = Math.max(a, b, c);
    alert("The maximum number is: " + max);
}
