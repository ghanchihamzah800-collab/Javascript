// 1.	Declare a variable using var, update it twice.

var num0 = 10;
console.log(`The value VAR is currently ${num0}`)

num0= 20;
console.log(`The value VAR is updated to ${num0} \n`)

//-----------


//2.	Declare a variable using let, update it twice.

let num1= 10;
console.log(`The value LET is currently ${num1}`)

num1=12;
console.log(`The value LET is updated to ${num1}`)

num1=20;
console.log(`The value LET is updated to ${num1} \n`)


//-----------


//3.	Declare a constant using const, then try updating it.

const num2= 10;
console.log(`The value CONST is currently ${num2}`);

console.log(`A CONST value is an non-updatable variable block, thus it will show an error. \n`)

try{
    num2= 10;
} catch (error){
    console.log(`Error: Cannot updates a CONST variable, so it remains ${num2}. \n`)
}

//-----------------


//4.	Create three variables: name, age, city. Print them in one sentence.

let name = "Bobby";
let age = 12;
let city = "LA";

console.log(`Hello world! My name is ${name}, i am ${age} and i live in ${city}. \n`)

//------------


//5.	Predict what happens if you use a variable before declaring it using var.

console.log(`${a2}`)
var a2= 2;
console.log(`\n`)

//----------------


//6.	Predict what happens if you use a variable before declaring it using let.

try{
    console.log(`${acop2}`)
    let acop = 20;

}catch (error){
    console.log(`Variable ACOP not initialized yet. \n`)
}

//--------


//7.	Create a variable without var, let, or const and log it. What happens?

az= 2;
console.log(`${az} \n`)

//---------


//8.    Declare a variable using let without giving it a value. Print it, then assign a value and print it again.

let a;
console.log(`Printing variable A without an assigned value: ${a}`)

a= 10;
console.log(`Printing variable A with an Updated assigned value: ${a} \n`)

//-------------

//9.    Create a constant array and try modifying one element. Then try reassigning the whole array. Write the difference.

const arr1 = [1, 2, 3, 4];
console.log(`Original array: ${arr1}`);

arr1[0] = 10; 
console.log(`Modified array: ${arr1}`);

try {
    arr1 = [100, 200, 300];
} catch (error) {
    console.log(`Error: Cannot reassign a const array.\n`);
}

//------------------


//10.   Create a constant object and update one property. Print before and after the change.

const obj= {
    name: "Raj",
    Age: 12,
    G: "M"
}

console.log(`Before Updation: ${obj.Age}`)

obj.Age= 13;
console.log(`After Updation: ${obj.Age} \n`)

//-----------------


// 11.  Declare a variable using var inside a block {}. Try accessing it outside the block. Write what happens.

{
    var str1= "S";
    console.log(`Inside the scope: ${str1}`)
}

 console.log(`Outside the scope: ${str1} \n`) //It never changes cause VAR acts like a global scope.


 //-------------------


 //12.  Declare a variable using let inside a block {}. Try accessing it outside the block. Write what happens.

 {
    let str= "M";
    console.log(`Inside the scope: ${str}`)
}

try{
 console.log(`Outside the scope: ${str}`)
} catch (error){
    console.log(`LET variable act as blocked scope element, cannot be accessed outside of their scope. \n`)
}

//--------------

//13.  Declare a variable using const inside a block {}. Try accessing it outside the block. Write what happens.

{
    const numz= 1;
    console.log(`Inside the scope: ${numz}`)
}

try{
 console.log(`Outside the scope: ${numz}`)
} catch (error){
    console.log(`Const variable act as blocked scope element, cannot be accessed outside of their scope. \n`)
}

//---------------

//14.   Write code where the same variable name is declared globally and inside a block using let. Print both values and compare.

let score = 10; 

{ 
    let score = 20;
    console.log(`Inside of scope: ${score}`);
} 

console.log(`Outside of scope: ${score} \n`);

//----------


// 15.  Use console.log(x) before declaring var x = 5. What is printed?

console.log(`${x} \n`)
var x=5;


//------------------------



