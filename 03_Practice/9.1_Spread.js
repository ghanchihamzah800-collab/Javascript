// 1.	Create a copy of an array using the spread operator.

let arr1 = [1,2,3,4]

let copy = [...arr1]
copy.push(5)

console.log(arr1);
console.log(copy);

console.log("\n");

//------------------

//2.	Merge two arrays using the spread operator.

let arr2 = [5,6,7]

let merge = [...arr1, ...arr2]
console.log(merge.join(","))
console.log(JSON.stringify(merge))

console.log("\n")

//-------------

//3.	Convert a string into an array of characters using the spread operator.

let str1 ="JavaScript"

let spr = [...str1]

console.log(spr)
console.log(JSON.stringify(spr))

//--------------

//4.	Create a copy of an object using the spread operator.

let obj1 = { a: 10}

copy = {...obj1}
console.log(JSON.stringify(copy))
console.log("\n")

//--------------

//5.	Merge two objects using the spread operator.

let obj2 = { b: 20}

merge= {...obj1, ...obj2}
console.log(merge)

console.log("\n")

//---------------

//6.	Update a property in an object immutably using the spread operator.

let mutable = {...obj1, a: 20}
console.log(mutable)

console.log(obj1)

console.log("\n")

//------------

//7.	Pass array elements as arguments to a function using the spread operator.

function func1(a, b, c) {
    console.log(a, b, c)
}

arr1= [1, 2, 3]

func1(...arr1)
console.log("\n")

//------------

//8.	Use the spread operator with Math.max() or Math.min().

console.log(Math.min(...arr1))
console.log("\n")

//-------------

//9.	Insert elements at the beginning of an array using the spread operator.

let modify = [17, ...arr1]

console.log(modify)
console.log("\n")

//--------------

//10.	Insert elements at the end of an array using the spread operator.

modify = [...arr1, 20]

console.log(modify)
console.log("\n")