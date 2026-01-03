//1.	Round 4.75 using Math.round, Math.ceil, and Math.floor.

a= 4.75

console.log(Math.round(a))
console.log(Math.ceil(a))
console.log(Math.floor(a))
console.log("\n")

//-----------

//2.	Generate a random number from 1-100.

console.log(Math.floor(Math.random() *100) + 1)
console.log("\n")

//------------

//3.	Convert 45.98765 to 2 decimals.

let num = 45.98765;
console.log(num.toFixed(2));
console.log("\n")

//------------------

//4.	Check if a value is NaN.

let value = "abc";
console.log(Number.isNaN(value));
console.log("\n")

//---------------

//5.	Get absolute value of -99.

console.log(Math.abs(-99));
console.log("\n")

//------------------

//6. Generate a random integer between a given min and max value.

let num1 = Math.floor(Math.random() * 201) - 100;
let num2 = Math.floor(Math.random() * 201) - 100;

console.log(num1)
console.log(num2)

console.log(Math.min(num1, num2));

//---------------------

num1 = 10

num1 % 2 == 0 ? console.log("The number is even") : console.log("The number is odd")

console.log("\n")

//--------------------

//8.	Check if a number is prime.


//--------------------

//9.	Generate a random OTP of 6 digits.

const otp = Math.floor(100000 + Math.random() * 900000);
console.log(otp);

//----------------------

//11.	Find max and min from an array of numbers.

let arr1 = [1,3,5]
console.log(Math.min(...arr1))

console.log("\n")

//--------------------

//12.	Check if a number is positive, negative, or zero

 num = 5;

let output =
    Math.sign(num) === 1 ? "Positive":
    Math.sign(num) === -1 ? "Negative":
    "Zero";

    console.log(output)

    console.log("\n")
    
//-------------------------

//13.	Find the sum of digits of a number

num1 = 123
let sum = 0;

let tostr = num1.toString()

for (let i = 0; i < tostr.length; i++) {
    sum = Number(tostr[i]) + sum
    
}
console.log(sum)

console.log("\n")

//---------------------------

//14.	Convert a number to binary

let tostr2 = num1.toString(2)
console.log(tostr2)

console.log("\n")

//----------------------------------

//15.	Check if a number is within a given range

num = 15;
let min = 10;
let max = 20;

let isInRange = num >= min && num <= max;

console.log(isInRange);

console.log("\n")

//---------------------------------------

//18.	Format a number for display (e.g., price or percentage) without affecting calculations.

let price = 1002.34

const inr = price.toLocaleString("en-IN", {
    style: "currency",
    currency: "INR"
})

console.log(inr)

console.log("\n")

//--------------------------------------

//19.	Round a number to the nearest step (for example, nearest 5 or 0.5).

let current = 50;
min = 0;
max = 100

let normalizer = normalize(current,min,max)
console.log(normalizer)