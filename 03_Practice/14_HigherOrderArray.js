//MAPS:

//1.	Multiply each number in array by 2.

let arr1 = [1,2,3,4]

const multiples = arr1.map( num => num * 2)
console.log(multiples)

//----------------------

//2.	Convert array of strings to uppercase.

let arr2= ["java", "script"]

const upper = arr2.map( str => str.toUpperCase())
console.log(upper)

console.log("\n")

//------------------

//FILTER

//3.	Filter numbers greater than 50.

let arr3=[10,28,55,32,87]

const filtered = arr3.filter (num => num > 50)

console.log(filtered)

//-----------------------

//4.	Filter only even numbers.

const filtered2 = arr3.filter (num => num % 2 === 0)

console.log(filtered2)


console.log("\n")

//-------------------

//REDUCE

// 5.	Sum all numbers.

let arr = [10, 20, 30, 40];

const sum = arr.reduce((total, num) => total + num, 0);

console.log(sum);

//-----------------------

//forEach

//7.	Print every element with index.

arr.forEach((element, i) => {
  console.log(`Index ${i}: ${element}`);
});