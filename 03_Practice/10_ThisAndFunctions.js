//1.	Write a function that returns sum of two numbers.

function sum( num1, num2) {
    let sumer= num1 + num2
    return sumer
}

let result= sum(2, 2) 
console.log(result)

// --arrow--

const sum2 =(num1,num2) => num1 + num2

let result2= sum2(2, 3) 
console.log(result)

console.log("\n")

//-----------------

//2.	Write a function with default parameters.

function greetings (name= "Hamzah", email= "hello@email" ){
    console.log(`Greetings, ${name} user of ${email}`)
}

greetings ()
greetings("Ghanchi", "nomail@email")

console.log("\n")

//---------------

//3.	Write a function that accepts an object and prints keys.

let student = {
    name: "Ghanchi Hamzah",
    age: 20,
    email: "ghanchi800@gmail.com",
    isStudent: true
};

function printKeys(obj) {
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            console.log(key);
        }
    }
}

printKeys(student);

console.log("\n")


//--------------------

//4.	Write a function that returns "even" or "odd" based on a number.

function oddEven(num) {
    if (num % 2 == 0) {
        console.log(`num is an even number`)
    }
    else{
        console.log(`num is an odd number`)
    }
}

oddEven(2)

console.log("\n")

//--------------------

//5.	Write a function expression.

const add = function (num1,num2){
    return num1 + num2
}

console.log(add(2,5))

console.log("\n")

//------------------

//6.	Write an arrow function version of previous function.

const addition = (num1,num2) => {
    return num1 + num2
}

console.log(addition(3,4))
console.log("\n")

//--------------------

// 7.	Create an object with a method using this.

const student3 = {
    name: "Sultan",
    Age: 20,
    Gender: "Male",
    introduction(){
        console.log( `Hello my name is ${this.name}, Aged ${this.age} and classied as ${this.Gender}`)
    }
}

student3.introduction()

console.log("\n")

//--------------

//8.	Convert same method to arrow function — observe behavior.

const intro = () =>{
    console.log( `Hello my name is ${student3.name}, Aged ${student3.age} and classied as ${student3.Gender}`)
}

intro()

console.log("\n")

//--------------------------

//9.	Use this inside a constructor function.

function Func1(name, age) {
    this.name = name;
    this.age = age;
    this.JS = true;
}

const outfunc1 = {
    ...new Func1("Hamzah", 20)
}
console.log(outfunc1);

console.log("\n")

//-------------------------

//10. Write a pure function and an impure function.

function add2(a, b) {
  return a + b;
}

add2(1,2) //Cannot be mutable by anything outside.

let b = 10;

function sum(a, b) {
   return a + b;
}

sum(10); //Can be mutable by an outside variable.

console.log("\n")

//--------------------------------

//11. Observe this inside a callback function.

const user = {
  name: "Hamzah",
  greet: (function () {
   
      console.log(this.name);
    })
};

user.greet();

console.log("\n")

//----------------------------

//12.	Pass a function as an argument and call it

function greet() {
    console.log("hello")
}

function callFunction(fn) {
    fn()
}

callFunction(greet)

console.log("\n")

//------------------------

//13.	Use map() with an arrow function

const arr1 = [1, 2, 3, 4];

const doubled = arr1.map(num => num * 2);
console.log(doubled);

console.log("\n")

//------------------------

//14.	Write one function that does one thing only

function greet() {
    console.log("hello")
}

greet()

console.log("\n")

//------------------------------------

//15.	Write a function that returns another function 

function func1() {
    return function func2(){
    console.log("hello")
   }
}

const returnedFunction = func1(); 
returnedFunction();       

console.log("\n")

//---------------------------------

//17.	Write a function that validates input type before processing.

function validator(num) {
    if( typeof(num) === "number"){
        console.log(`Valid input`)
    } else{
        console.log(" Invalid input")
    }
}

validator("5")

console.log("\n")

//-----------------------------

