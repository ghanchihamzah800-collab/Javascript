//1.	Extract "Script" from "JavaScript".

let str1= "JavaScript";
console.log(str1.slice(4, str1.length))
console.log("\n")

//-----------

//2.	Replace "world" with "developer" in "Hello world".

str1= "Hello World";
console.log(str1.replace("World", "Developer"))
console.log("\n")

//---------------

//3.	Convert text to uppercase and lowercase.

str1 = "UPPERCASE"
console.log(str1.toLowerCase())
console.log("\n")

//-----------

//4.	Check if "JavaScript" includes "Script".

str1= "JavaScript";
console.log(`Check if JavaScript has Script in it: ${str1.includes("Script")}`)
str1= "JavaScript";
console.log("\n")

//---------------

//5.	Count characters in a string.

console.log(`String character Count: ${str1.length}`)
console.log("\n")

//--------------

//6.	Split "apple,banana,mango" into an array.

str1= "apple,banana,mango"
console.log (str1.split(","))
console.log("\n")

//---------------

//8.	Remove extra spaces from the beginning and end of a string.

str1 = "   H a m zah   ";
console.log(str1.replaceAll(" ", ""));
console.log("\n")

//----------------

//9.	Check if a string starts with or ends with a specific word.

str1= "JavaScript"
console.log(`Check if in the string it include "Script": ${str1.includes("Script")}`)
console.log("\n")

//--------------

//10.	Find the index of "Script" in "JavaScript".

console.log(`Check what index it include "Script": ${str1.indexOf("Script")}`)
console.log("\n")

//-------------

//11.	Extract the last 4 characters from a string.

console.log(`Check last 4 characters of a string: ${str1.slice(-4, str1.length)}`)
console.log("\n")

//------------

//12.	Convert a string into an array of individual characters.

console.log(str1.split(""));
console.log("\n")

//-------------

//13.	Join an array of words back into a string.

let array1= ["Java", "Script"]
console.log(array1.join(" "))
console.log("\n")

//-------------

