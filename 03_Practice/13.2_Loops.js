//6.	Build a new array by looping through an existing array.

let arr1 = [1,2,3,4]
let arr2=[]

for (let i = 0; i < arr1.length; i++) {
    arr2.push(arr1[i])
    
}
console.log(arr2)

console.log("\n")

//-----------------------------

//7.	Count how many times a value appears in an array using a loop.

arr2 =[ 1,2,3,4,4,3]
let count = 0

for (let i = 0; i < arr2.length; i++) {
    if(arr2[i] == 3)
    count++
}

console.log(count)
console.log("\n")

//----------------------------------

//8.	Loop through an object and print both keys and values.

let obj1 = { Name: "Aayan", Age: 10}

for (const key in obj1) {
    console.log(key, obj1[key])
    
}

console.log("\n")

//-------------------------------

//9.	Modify each element of an array inside a loop.

let modifier = [];

for (let i = 0; i < arr1.length; i++) {
  (modifier.push((arr1[i] + 1)))
  arr1[i] = arr1[i] + 1;
}

console.log(modifier)

console.log("\n")

//----------------------------------

//10.	Break out of a loop when a condition is met.

for (let i = 1; i <= 10 ; i++) {

    if(i % 3 == 0){break}
    console.log(i);

}

console.log("\n")

//--------------------------------

//11.	Use continue to skip specific values in a loop

for (let i = 1; i <= 10 ; i++) {

    if(i === 7){continue}
    console.log(i);

}

console.log("\n")

//------------------------------------

//12.	Write a loop that runs at least once.

let i = 1;

do {
  console.log("Hello");
  i++;
} while (i <= 0);

console.log("\n")

//---------------------------------------

//13.	Prevent an infinite loop by correcting the condition.

let array = [10, 20, 30, 40];

for (let i = 0; i < arr1.length; i++) {
  const element = arr1[i];
  console.log(element);
}

console.log("\n")

//-----------------------------------------

//16.	Build a new string by transforming characters in a loop.

let str= "Javascript"
let str1 = ""

for (let i = 0; i < str.length ; i++) {
   str1 += str[i].toUpperCase()
    
}
console.log(str1)

console.log("\n")

//---------------------------------

//17.	Count the number of characters in a string using a loop.

str = "JavaScript";
count = 0;

for (let i = 0; i < str.length; i++) {
  count++;
}

console.log(count); 

console.log("\n")

//-------------------------------------------

//18.	Loop through an array in reverse order.


i = array.length - 1;
while (i >= 0) {
  console.log(array[i]);
  i--;
}

console.log("\n")

//------------------------------------------

//19.	Exit a loop early using return inside a function
