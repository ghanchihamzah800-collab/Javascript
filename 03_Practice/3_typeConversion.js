// 1.	Convert "45" to number.

let num = "45"
console.log(Number(num));
console.log(typeof(Number(num)));
console.log(`\n`);

//-----------------

// 2.	Convert false to number.

let bool = false
console.log(Number(bool));
console.log(typeof(Number(bool)));
console.log(`\n`);


//------------------

// 3.	Convert number 55 to string.

let num1 = 55
console.log(String(num1));
console.log(typeof (String(num1)));
console.log(`\n`)


//---------------------

// 4.	Convert "33abc" to number and observe.

let ab = "33abc"
console.log(Number(ab));
console.log(`\n`)


//----------------------

// 5.	Convert "", " ", "0" to boolean.

let str1 = ""
let str2 = " "
let str3 = "0"

console.log(Boolean (str1));
console.log(Boolean (str2));
console.log(Boolean (str3));
console.log(`\n`)


//--------------------

//6.	Try 5 + "5", "5" - 2, true + 1, "hello" * 2.

let oddSum= 5 + "5";
console.log(`${oddSum}`);

let oddSub= "5" - 2;
console.log(`${oddSub}`);

let oddBool= true + 1;
console.log(`${oddBool}`);

let oddStr= "hello" * 1;
console.log(`${oddStr}`);
