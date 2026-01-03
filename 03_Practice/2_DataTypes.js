
//1.	Store one value of each data type: string, number, boolean, null, undefined, object, array, symbol.

// String
const str1 = "This is a string data type.";
console.log(`This is a ${typeof str1} data type`);

// Number
const num1 = 20;
console.log(`This is a ${typeof num1} data type`);

// Boolean
const bool1 = true;
console.log(`This is a ${typeof bool1} data type`);

// Null (special case)
const x = null;
console.log(`This is a ${typeof x} data type (null is a known JS bug)`);

// Undefined
let y;
console.log(`This is a ${typeof y} data type`);

// Object
const empObj = {
  id: 1,
  name: "Rajan Don",
  age: 29
};
console.log(`This is a ${typeof empObj} data type`);

// Array
const arr1 = [1, "x", null, 2.2];
console.log(`This is a ${typeof arr1} data type (array is an object)`);

// Symbol
const sym1 = Symbol("id");
console.log(`This is a ${typeof sym1} data type\n`);


//------------------

//2.	Create a variable and reassign values of different types to it (dynamic typing).

// Dynamic typing example
let dynamic = "String";
console.log(`Value: ${dynamic}, Type: ${typeof dynamic}`);

dynamic = 78;
console.log(`Value: ${dynamic}, Type: ${typeof dynamic}`);

dynamic = true;
console.log(`Value: ${dynamic}, Type: ${typeof dynamic}`);

dynamic = null;
console.log(`Value: ${dynamic}, Type: ${typeof dynamic} \n`);

//-----------------

//3.	Use typeof on: null, [], {}, Symbol("x"), NaN.

let X = null;
console.log(`This is null:${typeof (X)}`)

X = []
console.log(`this is array but define as a object: ${typeof (X)}`)

X = {}
console.log(`this is an Object: ${typeof (X)}`)

X = Symbol("x")
console.log(`this is a symbol: ${typeof (X)}`)

X = NaN
console.log(`this is Not a Number:${typeof (X)}\n`)

//--------------

// 4.  Guess the Push output

let a = [1, 2];
let b = a;
b.push(3);
console.log(a , "\n");

//----------------

// 5. Check the Empty Array Elements.
let arr = [];
arr[5] = "A";
console.log(arr.length);
console.log(arr)


function outer() {
  let count = 0;
  return function () {
    count++;
    console.log(count, "\n");
  };
}

const fn1 = outer();
fn1();
fn1();




function test(a, b) {
  arguments[0] = 10;
  console.log(a);
}
test(5, 8);

console.log("\n")

//--------------------

//4. How to know if a variable is an array. Hint don’t use: typeof.

console.log(Array.isArray(arr));
console.log("\n")

//----------------

//5. Check whether NaN is equal to itself and explain why.

console.log(typeof NaN);

console.log(Boolean(NaN == NaN))
console.log(Boolean(NaN === NaN))

console.log("\n")

//---------------

//6. Difference between primitive and non-primitive data types with examples.

let x1 = 10; //primitive, string, number, boolean, null, undefined, symbol, bigint

let x2 = { a: 10 }; //non-primitive, object, array, function, date, map, set

console.log("\n")

//---------------------

//7.	Store a BigInt and perform addition with another BigInt.

let big = BigInt(1)
let big2 = BigInt(1)

console.log(big + big2) //2n (n = BigInt)

console.log("\n")

//---------------------------

//8.	What happens if you try to add a BigInt and a Number?

//Cannot happen in normal terms

//--------------------

//9.	Check if two Symbols with same description are equal.

let sym2 = Symbol("id")

console.log( sym1 == sym2)
console.log( sym1 === sym2)

console.log("\n")

//-----------------------

//10.	Store a function inside a variable and check its type.

const func1 = (num1,num2) => {
  return num1 + num2;
} 

console.log(typeof(func1))

//-------------------

//12.	Write a function that accepts only numbers—reject others using typeof.

function dataTypeRejecter(demo){
   if (typeof(demo) == "number"){
    console.log(`Entered value ${`demo`} is indeed a number`)
   } else{
    console.log(`Entered value ${`demo`} is not a number, Reject`)
   }
}

dataTypeRejecter("10")

console.log("\n")

//----------------------------


