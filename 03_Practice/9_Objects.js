//1.	Create an object: name, age, email, isStudent.

let student = {
    name: "Ghanchi Hamzah",
    age: 20,
    email: "ghanchi800@gmail.com",
    isStudent: true
}

console.log("\n")

//----------------------

//2.	Add a new property dynamically.

student["gender"]= "Male";

student= {
    id: 1,
    ...student
}

console.log(student)
console.log("\n")


//-----------------

//3.	Delete a property.

delete student.gender;

console.log(student)
console.log("\n")


//------------------

//4.	Loop through keys using for...in.

for (const key in student) {
    console.log(key)
    
    
}

console.log("\n")

//-------------------

//5.	Nest another object inside.

student= {
    ...student,
        student2 : {
            id: 2,
            name: "Manazil",
            age: 20,
            isStudent: true,
            Gender: "Male"
        }
}

//----------------

//6. Check if a property exists.

console.log("name" in student); 
console.log("\n") 

//------------------

//7.	Destructure name and age from an object.

const { name, age } = student; 

console.log(name);
console.log(age);


console.log("\n")

//---------------------

//8.	Rename destructured property using alias.

const{ name: studentName, email: studentEmail} = student;

console.log(studentName)
console.log(studentEmail);

console.log("\n")

//-------------------------

//9.	Convert object to JSON.

let toJson = JSON.stringify(student);

console.log(toJson)
console.log("\n")

//-----------------------------

//10.	Convert JSON string back to object.

let notoJson =JSON.parse(toJson)

console.log(notoJson)
console.log("\n")

//--------------------------

//11.	Destructure nested values.

const {
    student2: {
        name: studentName2,
        age: studentAge2
    }
} = student;

console.log(studentName2);
console.log(studentAge2); 

console.log("\n")

//----------------

//12. Freeze an object and attempt to modify it.

Object.freeze(student)

student.name= "Sultan";
console.log(student)

console.log("\n")

//---------------------------------

//13.  Count the number of keys in an object

let count = 0

for (const key in student) {
    count++
     
}

console.log(count)

console.log("\n")

//---------------------------------

//14. Check if an object is empty

let obj = {};

let isEmpty = Object.keys(obj).length === 0;

console.log(isEmpty);


