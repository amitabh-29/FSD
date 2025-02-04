// Example 1: Math.pow() - Calculate power of a number
function calculatePower() {
    const base = 2;
    const exponent = 3;
    const result = Math.pow(base, exponent);
    alert(`${base} raised to the power of ${exponent} is: ${result}`);
}

// Example 2: Math.sqrt() - Calculate square root
function calculateSquareRoot() {
    const number = 16;
    const result = Math.sqrt(number);
    alert(`The square root of ${number} is: ${result}`);
}

// Example 3: Math.max() - Find maximum value in an array
function findMaximum() {
    const numbers = [10, 20, 30, 40, 50];
    const max = Math.max(...numbers);
    alert(`The maximum number is: ${max}`);
}

// Example 4: Math.random() - Generate random number between 0 and 1
function generateRandomNumber() {
    const randomNum = Math.random();
    alert(`Random number between 0 and 1: ${randomNum}`);
}

// Example 5: Math.floor() - Round down a number
function roundDown() {
    const number = 7.8;
    const rounded = Math.floor(number);
    alert(`${number} rounded down is: ${rounded}`);
}

// Example 6: Date constructor - Get the current date and time
function getCurrentDate() {
    const currentDate = new Date();
    alert(`Current Date and Time: ${currentDate}`);
}

// Example 7: Date.getDay() - Get the day of the week (0-6)
function getDayOfWeek() {
    const currentDate = new Date();
    const dayOfWeek = currentDate.getDay();
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    alert(`Today is: ${days[dayOfWeek]}`);
}

// Example 8: Date.getFullYear() - Get the current year
function getYear() {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    alert(`Current Year: ${year}`);
}

// Example 9: Date.setDate() - Set a specific date
function setSpecificDate() {
    const specificDate = new Date();
    specificDate.setDate(25);  // Set the day to 25th
    alert(`The date is set to: ${specificDate}`);
}

// Example 10: Calculate date difference in days
function calculateDateDifference() {
    const date1 = new Date("2025-01-01");
    const date2 = new Date("2024-12-31");
    const diffTime = Math.abs(date1 - date2); // Difference in milliseconds
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); // Convert milliseconds to days
    alert(`The difference between the two dates is: ${diffDays} days`);
}
