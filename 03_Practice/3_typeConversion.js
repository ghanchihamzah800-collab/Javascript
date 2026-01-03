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
console.log(parseInt(ab));
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

console.log("\n")

//--------------------------

// 7. Convert user input "20px" into a usable number.

num = "20px"

console.log(parseInt(num))
console.log("\n")

//-----------------------

//8.  Convert null to number, string, and boolean. Observe results.

console.log(String(null))
console.log(Number(null))
console.log(Boolean(null))
console.log(parseInt(null))

console.log("\n")

//-----------------------

//9. Convert undefined to number, string, and boolean. Observe results.

console.log(String(undefined))
console.log(Number(undefined))
console.log(Boolean(undefined))

console.log("\n")
//-----------------------

//10.  Explain the difference between implicit and explicit type conversion with examples.

x= "10"
parseInt(x) //explicit

console.log(10 - "5") //implicit

console.log("\n")

//--------------

//11. What values are falsy and truthy in JavaScript? Give examples.

console.log(Boolean(" ")) //Anything that gives true value in Boolean

console.log(Boolean(0n)) //Anything that gives false value in Boolean

console.log("\n")

//---------------

//12. Explain why [] == false is true but [] === false is false.

console.log([] == false) //True cause converted value of both are 0.

console.log([] === false) //false cause even if converted vale is 0, Data type is different 

console.log("\n")

//-----------------------

//13.	Convert "00123" to a number and explain result.

console.log(parseInt(00123)) //83
console.log(Number(00123)) //83

console.log("\n")

//----------------------

//14.	Convert "10.5px" to a float.

console.log(parseFloat("10.5px")) //10.5
console.log("\n")

//--------------------------

//15.	Convert "true" and "false" strings to booleans properly.

console.log(Boolean("false" == true));
console.log(Boolean("true"));

console.log("\n")

//----------------------

//16.	Use Number.isNaN() vs global isNaN()—compare behavior.

Number.isNaN("hello");   
Number.isNaN("123");     
Number.isNaN(true);      
Number.isNaN(undefined); 
Number.isNaN(NaN);       

//-------------------

//17.	Predict output: 

console.log(Boolean([]), Boolean({}), Boolean(""));
console.log("\n")

//-------------------------


