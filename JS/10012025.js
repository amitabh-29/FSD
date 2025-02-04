// const d = new Date("2021-12-24");
// d.getMinutes();

// const d = new Date();
// d.getMinutes();

// Example 1: Get minutes from a specific date
// const d1 = new Date("2021-12-24");
// console.log("Minutes from specific date:", d1.getMinutes());

// Example 2: Get minutes from the current date
// const d2 = new Date();
// console.log("Minutes from current date:", d2.getMinutes());

// Example 3: Get time in milliseconds from a specific date
// const d3 = new Date("2021-12-24");
// console.log("Time in milliseconds from specific date:", d3.getTime());

// Example 4: Get time in milliseconds from the current date
// const d4 = new Date();
// console.log("Time in milliseconds from current date:", d4.getTime());

// const d = new Date();
// console.log(d.setDate(d.getDate() + 50));

let text = "";
const today = new Date();
const someday = new Date();
someday.setFullYear(2100, 0, 14);

if (someday > today) {
  text = "Today is before January 14, 2100.";
} else {
    text = "Today is after January 14, 2100.";
    }

