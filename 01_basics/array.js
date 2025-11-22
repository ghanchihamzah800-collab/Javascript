const arr1 = ["jasmine", "lilly", 2.2];
console.log(typeof arr1);
console.log(`B: ${arr1}`);

const arr2 = new Array(1,2,3,4);
console.log(`A: ${arr2}`);

// Array methods:
arr2.push(6); //Adds the element in the end.
console.log(`A: ${arr2} "Pushed 6 here."`);

arr2.push(`[${arr1}]`) // "We can also push 2 different arrays."
console.log(`A: ${arr2} "Using push" `)

arr2.concat(`${arr1}`) // Concat is a better way to push 2 different arrays."
console.log(`A: ${arr2} "Using concat"`)

// These is the beat type of concat also know as spread and most used:
const newArr = [...arr1, ...arr2]
console.log(`A: ${newArr} "Using Spread"`);

arr2.pop()
console.log(`A: ${arr2} "popped the last digit."`);

arr2.unshift(3)
console.log(`A: ${arr2} "Adds value 3 at the begginig. "`);

// arr2.shift()
console.log(`A: ${arr2} "Remove the begginig.value "`);

let Myarr= arr1.slice(1,4) // "Cuts/Slices Element from Start-Index to End-Index that we can configure."
console.log(`B: ${Myarr}`)
// Slice dose not take the last configured element.

Myarr= arr1.splice(1,4) //  "Cuts/Slices Element from Start-Index to End-Index that we can configure." 
console.log(`B: ${Myarr}`)
// Slice dose take the last configured element.

//Make anything an array:
console.log(Array.from("Hitesh"));
console.log(Array.isArray("Hitesh"));

//Creation of Array form Variables
let score1= 100;
let score2= 200;
let score3= 300;

console.log(Array.of(score1,score2,score3))