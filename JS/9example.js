// Example 1: Validate Email
function validateEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (emailRegex.test(email)) {
        alert("Valid email address!");
    } else {
        alert("Invalid email address!");
    }
}

// Example 2: Check if string contains numbers
function containsNumbers(str) {
    const numberRegex = /\d+/;
    if (numberRegex.test(str)) {
        alert("The string contains numbers.");
    } else {
        alert("The string does not contain numbers.");
    }
}

// Example 3: Extract digits from string
function extractDigits(str) {
    const digitRegex = /\d+/g; // 'g' for global match
    const digits = str.match(digitRegex);
    alert("Extracted digits: " + (digits ? digits.join(", ") : "No digits found"));
}

// Example 4: Replace all spaces with hyphens
function replaceSpaces(str) {
    const spaceRegex = /\s+/g; // Match all spaces
    const result = str.replace(spaceRegex, '-');
    alert("Modified string: " + result);
}

// Example 5: Check if string starts with a capital letter
function startsWithCapital(str) {
    const capitalRegex = /^[A-Z]/;
    if (capitalRegex.test(str)) {
        alert("The string starts with a capital letter.");
    } else {
        alert("The string does not start with a capital letter.");
    }
}

// Example 6: Extract domain name from email
function extractDomain(email) {
    const domainRegex = /@([a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})/;
    const match = email.match(domainRegex);
    if (match) {
        alert("Domain name: " + match[1]);
    } else {
        alert("No domain found.");
    }
}

// Example 7: Check for valid phone number
function validatePhoneNumber(phone) {
    const phoneRegex = /^\+?[1-9]\d{1,14}$/;
    if (phoneRegex.test(phone)) {
        alert("Valid phone number.");
    } else {
        alert("Invalid phone number.");
    }
}

// Example 8: Remove special characters from string
function removeSpecialCharacters(str) {
    const specialCharRegex = /[^a-zA-Z0-9\s]/g; // Match all non-alphanumeric characters
    const result = str.replace(specialCharRegex, '');
    alert("Modified string: " + result);
}

// Example 9: Check if a string contains only letters
function containsOnlyLetters(str) {
    const lettersRegex = /^[a-zA-Z]+$/;
    if (lettersRegex.test(str)) {
        alert("The string contains only letters.");
    } else {
        alert("The string contains characters other than letters.");
    }
}

// Example 10: Extract date from string
function extractDate(str) {
    const dateRegex = /\d{4}-\d{2}-\d{2}/; // Matches a date in YYYY-MM-DD format
    const match = str.match(dateRegex);
    if (match) {
        alert("Extracted date: " + match[0]);
    } else {
        alert("No date found.");
    }
}
