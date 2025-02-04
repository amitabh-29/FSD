console.log(Number("3.14")); // Output: 3.14
console.log(Number(Math.PI)); // Output: 3.141592653589793
console.log(Number(" ")); // Output: 0
console.log(Number("")); // Output: Number("3.14")
console.log(Number("99.88"));
console.log(Number("JOHN"));

let y = "5";
let x = + y;
console.log(x); // Output: 5

let a = "JOHN";
let b = + a;
console.log(b); // Output: NaN

// Converting the numbers to string
console.log(String(x)); // Output: "123"
console.log(String(123)); // Output: "123"
console.log(String(100 + 23)); // Output: "123"

console.log(x.toString());
console.log((123).toString()); // returns "123" from literal 123
console.log((100 + 23).toString()); // returns "123" from expression 100 + 23

// Converting dates into numbers

let date = new Date();
console.log(Number(date)); // Output: 1614490486094

let date1 = new Date();
console.log(date1.getTime());

// Converting dates into strings

let date2 = new Date();
console.log(String(date2)); // Output: "Tue Feb 23 2021 14:21:26 GMT+0530 (India Standard Time)"

// Converting boolean into numbers

console.log(Number(true)); // Output: 1
console.log(Number(false)); // Output: 0

// Converting boolean into strings

console.log(String(true)); // Output: "true"
console.log(String(false)); // Output: "false"

// Converting null into numbers

console.log(Number(null)); // Output: 0
console.log(5 + null); // Output: 5
console.log("5" + null); // Output: "5null"
console.log("5" + 2); // Output: "52"
console.log("5" - 2); // Output: 3
console.log("5" * "2"); // Output: 10

// Automatic string conversion

var myVar;

myVar = {firstName: "John", lastName: "Doe"};
console.log(myVar); // Output: [object Object]

myVar = [1, 2, 3, 4];
console.log(myVar); // Output: 1,2,3,4

myVar = new Date();
console.log(myVar); // Output: current date and time

// Ensure there is an element with id "demo" in your HTML
document.getElementById("demo").innerHTML = myVar;

