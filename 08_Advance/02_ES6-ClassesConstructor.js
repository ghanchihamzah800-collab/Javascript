//1.	Design constructors that validate and initialize object state safely.

class User{
    constructor(name, age){
        if (typeof name !== "string" || name.trim() === ""){
            throw new Error("Name must be a non-empty string");
        }

        if (typeof age !== "number" || age < 0) {
            throw new Error("Age must be a positive number");
        }

        this.name = name.trim();
        this.age = age;
    }

    greet() {
        console.log(`hello, my name is ${this.name}`);
    }
}

const u1 = new User ("Hamzah", 20);
u1.greet();

//2.	Decide what logic belongs in constructors versus instance methods.

class User2{
    constructor(name, age){
        if(!name || typeof name !== "string") {
            throw new Error("Invalid name");
        }

        if (typeof age !== "number" || age < 0) {
            throw new Error("Invalid age");
        }

        this.name = name.trim();
        this.age = age;

    }

        greet() {
        console.log(`Hello, I'm ${this.name}`);
    }

    birthday(){
        this.age += 1;
    }

}

const u2 = new User2(" Hamzah ", 20);
console.log(u2)

u2.birthday();
console.log(u2.age);

//3.	Prevent side effects (API calls) inside constructors.

// class User3 {
//   constructor(userId) {
//     this.userId = userId;
//     this.name = null;
//   }

//   async load() {
//     const res = await fetch(``);
//     const data = await res.json();

//     this.name = data.name;
//   }

// }

// const u3 = new User(1);
// await u3.load();

//4.	Implement inheritance using extends and correctly initialize state with super().

class Animal {
    constructor(name) {
        this.name = name;
    }

    speaks() {
        console.log(this.name, "speaks")
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name);

        this.breed = breed;
    }

    bark() {
        console.log(this.name, "barks");
    }
}

const dog = new Dog("Boxer", "Bull");

dog.speaks();
dog.bark();

//5.	Use static methods for utilities without coupling them to instances.

class MathUtils {
  static add(a, b) {
    return a + b;
  }
}

console.log(MathUtils.add(5, 3)); //Dependency on class can be extender and super().

//7. Understand Where Class Methods Actually Live (Prototype).

class User3 {
    greet() {
        console.log("hello");
    }
}

const u3 = new User3();

console.log(u3.hasOwnProperty("greet"));
console.log(User3.prototype.hasOwnProperty("greet"));

//8. Debug this Loss When Class Methods Are Used as Callbacks.

class User4 {
    constructor(name) {
        this.name = name;
    }

    greet() {
        console.log(this.name, ",hello");
    }
}

const u4 = new User4("Sultan");

setTimeout(u4.greet.bind(u4), 1000)