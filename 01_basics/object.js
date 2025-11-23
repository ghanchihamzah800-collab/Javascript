// Object literals:

const mySymbol = Symbol("key1");

const jsUser= {
    name: "Hamzah",
    "Full name": "Ghanchi Hamzah",
    [mySymbol]: "Mykey1",
    age: 20,
    location: "Ahmedabad",
    email: "ghanchihamzah800@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Tuesday"]

}


console.log(jsUser.name);
console.log(jsUser["Full name"]);
console.log(jsUser["location"]);

//Checking symbols:
console.log(jsUser[typeof mySymbol]);
console.log(jsUser[mySymbol]);

//Change in object.
jsUser.email= "ghanchihamzah@ebay.com";
console.log(jsUser.email);


//Creating a new function "User greeting":
jsUser.greeting = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(jsUser.greeting());

//Freezing the object so that no changes are made on the object.
Object.freeze(jsUser);
jsUser.email= "ghanchihamzah@outlook.com";
console.log(jsUser.email);

//Object combination with divided blocks:
const obj1= {a : 1, b : 2};
const obj2= {c : 3, d : 4};

const obj3= {obj1, obj2};
console.log(obj3);

//Object combination within single blocks:

const obj4= Object.assign({}, obj1, obj2);
console.log(obj4);

//

const obj5= {...obj1, ...obj2};
console.log(obj5);
console.table(obj5);