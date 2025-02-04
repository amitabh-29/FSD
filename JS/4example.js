// Example 1: Convert String to Number
function example1() {
    let str = "123";
    let num = Number(str);
    console.log("String to Number:", num);
}

// Example 2: Convert Number to String
function example2() {
    let num = 456;
    let str = String(num);
    console.log("Number to String:", str);
}

// Example 3: Parse Integer from String
function example3() {
    let str = "789.65";
    let intNum = parseInt(str);
    console.log("Parsed Integer:", intNum);
}

// Example 4: Parse Float from String
function example4() {
    let str = "123.456";
    let floatNum = parseFloat(str);
    console.log("Parsed Float:", floatNum);
}

// Example 5: Convert Boolean to String
function example5() {
    let bool = true;
    let str = String(bool);
    console.log("Boolean to String:", str);
}

// Example 6: Convert String to Boolean
function example6() {
    let str = "true";
    let bool = (str.toLowerCase() === "true");
    console.log("String to Boolean:", bool);
}

// Example 7: Convert Date to String
function example7() {
    let date = new Date();
    let dateStr = date.toString();
    console.log("Date to String:", dateStr);
}

// Example 8: Convert String to Date
function example8() {
    let dateStr = "2025-01-03";
    let date = new Date(dateStr);
    console.log("String to Date:", date);
}

// Example 9: Convert Object to JSON String
function example9() {
    let obj = { name: "John", age: 25 };
    let jsonStr = JSON.stringify(obj);
    console.log("Object to JSON String:", jsonStr);
}

// Example 10: Convert JSON String to Object
function example10() {
    let jsonStr = '{"name":"Jane","age":30}';
    let obj = JSON.parse(jsonStr);
    console.log("JSON String to Object:", obj);
}
