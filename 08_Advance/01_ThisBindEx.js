//1.	Create a class method that works when called directly but fails when passed as a callback, and explain why the call-site changes this.

class User {
    constructor(name){
        this.name = name;
    }

    showName() {
    console.log("Name: ", this.name);
    console.log("this is: ", this)
}

}

const user = new User("David");

user.showName();

setTimeout(user.showName, 1000);

////2.	Destructure a method from an object or class instance, call it separately, and observe how this is lost.

//const { showName } = user;


//3.	Fix a broken callback using .bind() and explain what binding permanently changes.

//setTimeout(user.showName.bind(user), 1000);


//4.	Fix the same this issue using an arrow function and compare the behavior with .bind().

//setTimeout(() => user.showName(), 1000);

//5.	Implement a constructor function using this, then rewrite it as a factory function and compare how this behaves in both.

function User1(name) {
  this.name = name;

  this.showName = function() {
    console.log("Name:", this.name);
  };
}

const user1 = new User1("Biden");
user1.showName();

//6.	Pass a class method to Promise.then and observe how the execution context changes.

class User3 {
  constructor(name) {
    this.name = name;
  }

  showName() {
    console.log("Name:", this.name);
    console.log("this is:", this);
  }
}

const user3 = new User3("David");

Promise.resolve().then(user3.showName);