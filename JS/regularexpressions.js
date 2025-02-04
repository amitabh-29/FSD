// Using String Methods

let text = "Visit ABESEC!";
let result = text.search("ABESEC");
console.log(result);

let text1 = "Visit ABESEC!";
let result1 = text1.replace("ABESEC", "ABESEC College");
console.log(result1);

// Using Regular Expressions

let text2 = "Visit ABESEC!";
let result2 = text2.search(/ABESEC/i);
console.log(result2);

let text3 = "Visit ABESEC!";
let result3 = text3.replace(/abesec/i, "ABESEC College");
console.log(result3);