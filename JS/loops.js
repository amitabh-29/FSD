let text = ""; // Define the text variable
let cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"]; // Define the cars array

for (let i = 0; i < cars.length; i++) {
    text += cars[i] + "<br>";
}

document.getElementById("demo").innerHTML = text; // Ensure there is an element with id "demo"

const person = {fname:"John", lname:"Doe", age:25}; // Define the person object
let text1 = ""; // Define the text variable
for (let x in person) {
    text1 += person[x];
}
console.log(text1); // Output: JohnDoe25