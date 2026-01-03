//1.	Log "Hello" after 2 seconds using setTimeout.

setTimeout(() => {
    console.log("Hello");
}, 2000);


console.log("\n")

//-------------------------------------------

//2.	Pass arguments to a function executed by setTimeout.

function greet(name) {
    console.log("Hello", name);
}

setTimeout(greet, 2000, "Alex");

console.log("\n")

//-----------------------------------------------

//3.	Cancel a scheduled setTimeout before it executes.

function sayHello() {
    console.log("Hello");
}

const timeoutId = setTimeout(sayHello, 2000);

// Cancel the timeout before it runs
clearTimeout(sayHello)

console.log("\n")

//----------------------------------

//4.	Create a repeating task using setInterval and stop it automatically after a fixed number of executions.

let count = 0;

let counter = setInterval(() => {
    count++
    console.log("task executed", count)

    if(count === 5){
        clearInterval(counter);
        console.log("end of task")
    }
}, 1000)

