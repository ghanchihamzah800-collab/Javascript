// 1.	Create an array of 5 numbers.

let arr1= [1,2,3,4,5]
console.log(`${arr1}`)
console.log("\n")

//--------------------

//2.	Add values using push, remove using pop.

arr1.push(6)
console.log(`${arr1}`)

arr1.splice(3, 0, 7);
console.log(`${arr1}`)

console.log("\n")

//-----------

arr1.pop
console.log(`${arr1}`)

arr1.splice(3, 1);
console.log(`${arr1}`)

console.log("\n")

//--------------------

//3.	Add values using unshift, remove using shift.

arr1.unshift(0)
console.log(`${arr1}`)

arr1.shift()
console.log(`${arr1}`)
console.log("\n")

//-----------

//4.	Find length.

console.log(`length of the current array is ${arr1.length}`)
console.log("\n")

//---------------

//5.	Check if an element exists using includes.

console.log(`Check if current array includes value 6: ${arr1.includes(6)}`)
console.log("\n")

//-------------------

//6.	Convert an array to a string and back.

arr2= ["Java", "Script"]
console.log(`${arr2.join("")}`)
console.log("\n")

//------------------------

// 7.	Merge two arrays using concat.

console.log(arr1.concat(arr2))
console.log("\n")

//----------------------

//8.	Merge using spread operator.


let mergedArray = [...arr1, ...arr2];
console.log(mergedArray);
console.log("\n")

//--------------------

// 9.	Flatten [1,[2,[3,[4]]]].

let arr = [1, [2, [3, [4]]]];
console.log(arr.flat(Infinity));
console.log("\n")

//-----------------------

//10.	Slice an array to get middle values.

arr1 = [1, 2, 3, 4, 5];

let middle = arr1.slice((arr1.length / 2), (arr1.length / 2) + 1);
console.log(middle);
console.log("\n")

//----------------------
 