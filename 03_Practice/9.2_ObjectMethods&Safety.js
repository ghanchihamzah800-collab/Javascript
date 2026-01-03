//1.	Iterate using Object.keys()

const user = {
  name: "Ayaan",
  age: 22,
  city: "Delhi"
};


Object.keys(user).forEach(key => {
    console.log(user[key], key)
});

console.log("\n")

//----------------------------------------

//2.	Iterate using Object.values()

Object.values(user).forEach(value => {
    console.log(value)
})

console.log("\n")

//------------------------------------

//3.	Check property using hasOwnProperty

console.log(user.hasOwnProperty("name"));
console.log(user.hasOwnProperty("email"));

console.log("\n")

//--------------------------------------

//4.	Check property using Object.hasOwn

console.log(Object.hasOwn(user, "name")); 

console.log("\n")

//-------------------------------------------

//5.	Difference between in vs hasOwn

//-----------------------------------------

//6.	Deep copy using structuredClone

const deepCopy = structuredClone(user);
console.log(deepCopy)

//--------------------------------------------

//7.	Compare freeze vs seal vs preventExtensions

Object.preventExtensions(obj);

obj.city = "Delhi";   // ❌ not added
obj.age = 23;         // ✅ allowed
delete obj.name;      // ✅ allowed


Object.seal(obj);

obj.city = "Delhi";   // ❌ not added
obj.age = 23;         // ✅ allowed
delete obj.name;      // ❌ not allowed

Object.freeze(obj);

obj.city = "Delhi";   // ❌ not added
obj.age = 23;         // ❌ not allowed
delete obj.name;      // ❌ not allowed
