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

//7. Clone an object so changes do not affect the original.

//soft clone:
const original = {Name: "Hamzah", age: 20};

const clone= {...original};
clone.age = 22;

console.log(original)
console.log(clone)

console.log("\n")

//Nested cloning only /structured clone
const original2 = {
    name: "Manju",
    age: 20,
    skills: {
        js: true
    }
};

const clone2 = structuredClone(original2);

clone2.skills.js = false;

console.log(original2.skills.js);
console.log(clone2.skills.js); 

console.log("\n")

//--------------

//8. Explain pass-by-value vs pass-by-reference in JavaScript.

let x1 = 10;
let x2 = x1 + 10; //variables are primitive type

console.log(x2)
console.log(x1) //pass-by-value, where you make any changes to referance value primitive value never changes.

console.log("\n")

let obj1 ={ name: "Manju", age: 20} //objects are refernce type

obj1.age = 21;

console.log(obj1)
console.log(obj1.age) //pass-by-referance, refrence value changes, both ways

console.log("\n")

//---------------------------------

//10.	Create a deep copy using structuredClone() or JSON.

const original3 = {
  name: "Hamzah",
  address: {
    city: "Ahmedabad",
    pin: 380001
  }
};

const deepCopy = structuredClone(original3);

deepCopy.address.city = "Surat";

console.log(original3.address.city); // "Ahmedabad"
console.log(deepCopy.address.city); // "Surat"

//------------------------

//