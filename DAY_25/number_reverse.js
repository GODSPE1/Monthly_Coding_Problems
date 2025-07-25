/ Exercise
// 1. Reverse Number

// Write a JavaScript function that reverses a number.

// Example x = 32243;

// Expected Output : 34223

// 1. Reverse Number

// Write a JavaScript function that reverses a number.

// Example x = 32243;

// Expected Output : 34223

const num = 10;
console.log(typeof num); // number

const str = "num" + 10;
console.log(typeof str); // string

console.log(typeof num); // boolean

const str2 = "num" + num + "num";
console.log(typeof str2); // string

const str3 = "num" + 10 + 10;
console.log(typeof str3); // string

const str4 = num.toString();
console.log("str4 is of type", typeof str4); // string


const num2 = 123456;

const numSplit = num2 + "".split("");
console.log(numSplit); // This will throw an error because num2 is a number, not
console.log(typeof numSplit); // This will throw an error because num2 is a number, not a string

const reverseNum = num2.toString().split("").reverse().join("");
console.log(reverseNum); // "654321"
console.log(typeof reverseNum); // string

let reverseNum2 = num2 + "";
reverseNum2 = reverseNum2.split("").reverse().join("");
console.log('this is reverseNum2', reverseNum2); // "654321"
console.log(typeof Number(reverseNum2)); // 654321
console.log(reverseNum2); // string
console.log(typeof reverseNum2); // string