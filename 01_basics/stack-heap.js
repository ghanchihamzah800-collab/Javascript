/* Stack (used in Primitive data types),
Heap (Used in Non-primitive data types)

Example of both:
Primitive: number, string, boolean, null(obj), undefined, bigint, symbol.
Non-primitive: object, array, function (obj).
*/

let a = 10;
let b = a;   // Copy of value a

b = 20;

console.log(a); // 10 (unchanged)
console.log(b); // 20 (changed)

/*
In primitives, values are stored separately in stack memory.
Updating 'b' does NOT affect 'a'.
*/

//---------------------------------------------------------------------------------------

let obj1 = { name: "Hamzah" };
let obj2 = obj1;  // Reference copy

obj2.name = "Ghanchi";

console.log(obj1.name); // "Ghanchi"
console.log(obj2.name); // "Ghanchi"

/*
In non-primitives, the actual data is stored in the heap.
Both obj1 and obj2 point to the SAME object.
So updating through obj2 also updates obj1.
*/