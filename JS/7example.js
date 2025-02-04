// Example 1: Display current date and time
function showCurrentDateTime() {
    const currentDate = new Date();
    alert("Current Date and Time: " + currentDate);
}

// Example 2: Display the day of the week
function showDayOfWeek() {
    const currentDate = new Date();
    const options = { weekday: 'long' };
    alert("Today is: " + currentDate.toLocaleDateString('en-US', options));
}

// Example 3: Display a formatted date (YYYY-MM-DD)
function showFormattedDate() {
    const currentDate = new Date();
    const formattedDate = currentDate.toISOString().split('T')[0]; // YYYY-MM-DD format
    alert("Formatted Date: " + formattedDate);
}

// Example 4: Get the difference between two dates
function calculateDateDifference() {
    const date1 = new Date("2025-01-01");
    const date2 = new Date("2024-12-31");
    const diffTime = Math.abs(date1 - date2); // Difference in milliseconds
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); // Convert milliseconds to days
    alert("The difference is: " + diffDays + " days");
}

// Example 5: Convert date to ISO format
function convertToISOFormat() {
    const currentDate = new Date();
    alert("ISO Format: " + currentDate.toISOString());
}

// Example 6: Get the current timestamp
function getCurrentTimestamp() {
    const timestamp = Date.now();
    alert("Current Timestamp: " + timestamp);
}

// Example 7: Add days to a date
function addDaysToDate() {
    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + 5); // Add 5 days
    alert("Date after adding 5 days: " + currentDate);
}

// Example 8: Subtract days from a date
function subtractDaysFromDate() {
    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() - 5); // Subtract 5 days
    alert("Date after subtracting 5 days: " + currentDate);
}

// Example 9: Compare two dates
function compareDates() {
    const date1 = new Date("2024-12-25");
    const date2 = new Date("2024-12-31");
    
    if (date1 > date2) {
        alert("Date1 is later than Date2");
    } else if (date1 < date2) {
        alert("Date1 is earlier than Date2");
    } else {
        alert("Date1 is the same as Date2");
    }
}

// Example 10: Check if a date is in the past
function isDateInPast() {
    const inputDate = new Date("2023-12-01");
    const currentDate = new Date();
    
    if (inputDate < currentDate) {
        alert("The date is in the past.");
    } else {
        alert("The date is in the future.");
    }
}
