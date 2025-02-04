const randomNumber = Math.floor(Math.random() * 10);
console.log("Random number between 0 and 9:", randomNumber);

const randomNumber1 = Math.floor(Math.random() * 100);
console.log("Random number between 0 and 99:", randomNumber1);

const randomNumber2 = Math.floor(Math.random() * 1000);
console.log("Random number between 0 and 999:", randomNumber2);

const randomNumber3 = Math.floor(Math.random() * 100 + 1);
console.log("Random number between 1 and 100:", randomNumber3);

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

const randomNumber4 = getRndInteger(50, 100);
console.log("Random number between 50 and 100:", randomNumber4);

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1 )) + min;
}

const randomNumber5 = getRndInteger(50, 100);
console.log("Random number between 50 and 100:", randomNumber5);