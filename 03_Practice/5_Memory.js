// 1.	Create two variables with primitive values, assign one to the other, change the first — does second change?

let a = 10;
let b = a;

a = 20;

console.log(a);
console.log(b);
console.log("\n")

//-----------------------

//2.	Create two objects, assign one to another, change a property — what happens?

let obj1 = {
    id: 1,
    name: "Hamzah",
    age: 20
}

let obj2 = obj1;

obj1.name = "Sultan";

console.log(obj1.name);
console.log(obj2.name);

//--------------------

//3.	Create an array and pass it to a function — modify inside function. Does original change?

let arr1= [1,2,3,4]

function arrays() {
    arr1[0]= 7;
    console.log(arr1)
}

arrays()
console.log(arr1)
console.log("\n");


// 4.	What is the difference between mutating an object and reassigning an object reference?

//Mutation:
obj1 = {
    id: 1,
    name: "Hamzah",
    age: 20
}

obj2 = obj1;

obj1.name = "Sultan";

console.log(obj1.name);
console.log(obj2.name);
console.log("\n");

//Reassigning:

obj1 = {
    id: 1,
    name: "Hamzah",
    age: 20
}
console.log(obj1.name);

obj2 = obj1;

obj1 = {
     id: 1,
    name: "Manju",
    age: 20
}
console.log(obj1.name);
console.log("\n");

//------------

//5. If two variables reference the same object and one variable is reassigned, what happens to the other reference?

obj3 = {
     id: 3,
    name: "Manju",
    age: 20
}

let x = obj3;
x = {
     id: 3,
    name: "Manju",
    age: 22
}
console.log(x)

let y= obj3;
console.log(y)
console.log("\n")

//------------

//6.	  When an object or array is passed to a function, how does mutation vs reassignment affect the original value?

//Mutation:

arr1 = [1,2,3,4]

function muatetedArr() {
    arr1[0]= 7;
    console.log(arr1);
}

muatetedArr()
console.log(arr1) //Affects both

//Ressignment

arr1 = [1,2,3,4]

function reassArr() {
    arr1= [7,8,9,0];
    console.log(arr1);
}

reassArr()
console.log(arr1) //Affects both too
console.log("\n")

//------------

