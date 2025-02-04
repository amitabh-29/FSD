// Example 1: If Statement
function example1() {
    let num = 5;
    if (num > 0) {
        console.log("The number is positive.");
    }
}

// Example 2: If-Else Statement
function example2() {
    let age = 18;
    if (age >= 18) {
        console.log("You are an adult.");
    } else {
        console.log("You are a minor.");
    }
}

// Example 3: Else If Ladder
function example3() {
    let marks = 85;
    if (marks >= 90) {
        console.log("Grade: A+");
    } else if (marks >= 75) {
        console.log("Grade: A");
    } else {
        console.log("Grade: B");
    }
}

// Example 4: Switch Case
function example4() {
    let day = "Monday";
    switch (day) {
        case "Monday":
            console.log("Start of the week!");
            break;
        case "Friday":
            console.log("Weekend is near!");
            break;
        default:
            console.log("Have a nice day!");
    }
}

// Example 5: For Loop
function example5() {
    for (let i = 1; i <= 5; i++) {
        console.log("Number:", i);
    }
}

// Example 6: While Loop
function example6() {
    let count = 1;
    while (count <= 5) {
        console.log("Count:", count);
        count++;
    }
}

// Example 7: Do-While Loop
function example7() {
    let index = 1;
    do {
        console.log("Index:", index);
        index++;
    } while (index <= 5);
}

// Example 8: Nested Loops
function example8() {
    for (let i = 1; i <= 3; i++) {
        for (let j = 1; j <= 2; j++) {
            console.log(`Outer: ${i}, Inner: ${j}`);
        }
    }
}

// Example 9: Break Statement
function example9() {
    for (let i = 1; i <= 5; i++) {
        if (i === 3) {
            break;
        }
        console.log("Number:", i);
    }
}

// Example 10: Continue Statement
function example10() {
    for (let i = 1; i <= 5; i++) {
        if (i === 3) {
            continue;
        }
        console.log("Number:", i);
    }
}
