// Example 1: Library function to calculate square
function calculateSquare(num) {
    let result = Math.pow(num, 2);
    alert("The square of " + num + " is: " + result);
}

// Example 2: Array method to find the sum of elements
function sumArray(arr) {
    let sum = arr.reduce((acc, num) => acc + num, 0);
    alert("The sum of the array is: " + sum);
}

// Example 3: Library function to calculate factorial
function calculateFactorial(n) {
    let factorial = 1;
    for (let i = 1; i <= n; i++) {
        factorial *= i;
    }
    alert("The factorial of " + n + " is: " + factorial);
}

// Example 4: Using array method to find the largest number
function findLargest(arr) {
    let largest = Math.max(...arr);
    alert("The largest number in the array is: " + largest);
}

// Example 5: Library function to calculate power
function calculatePower(base, exponent) {
    let result = Math.pow(base, exponent);
    alert(base + " raised to the power of " + exponent + " is: " + result);
}

// Example 6: Array method to sort an array
function sortArray(arr) {
    let sortedArray = arr.sort((a, b) => a - b);
    alert("The sorted array is: " + sortedArray);
}

// Example 7: Library function to check if a number is prime
function checkPrime(num) {
    let isPrime = num > 1;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        alert(num + " is a prime number.");
    } else {
        alert(num + " is not a prime number.");
    }
}

// Example 8: Creating and using a multi-dimensional array
function multiDimensionalArrayExample() {
    let matrix = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ];
    alert("The element at position (1,1) is: " + matrix[1][1]);
}

// Example 9: Array method to reverse an array
function reverseArray(arr) {
    let reversedArray = arr.reverse();
    alert("The reversed array is: " + reversedArray);
}

// Example 10: Library function to convert a string to uppercase
function toUpperCase(str) {
    alert("The uppercase string is: " + str.toUpperCase());
}
