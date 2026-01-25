//1.	Create a Promise that resolves after 2 seconds.

const promise1 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Resolved after 2 seconds")
    }, 2000);
})

promise1.then((msg) =>{
    console.log(msg)
})

//2.	Create a Promise that rejects based on a condition.
//3.	Handle a rejected Promise safely without crashing the app.

const isLoggedIn = false;

const promise2 = new Promise((resolve,reject) => {
    if(isLoggedIn){
        resolve("Access Granted")
    } else {
        reject("Access Denied")
    }
});

promise2
    .then((msg) => {
        console.log(msg)
    })
    .catch((err) => {
        console.log(err)
    })

    console.log("App still running without any crash.")

//4.	Demonstrate what happens when a Promise is neither resolved nor rejected.

const promise3 = new Promise((resolve, reject) => {
    
})


promise3   
    .then((msg) => {
        console.log("Accepted")
    })
    .catch((err) => {
        console.log("Denied")
    })

    console.log("End")

//5.	Show what happens when you forget to return a Promise inside .then().

function step1(){
    return Promise.resolve(10);
}

function step2(value) {
    return Promise.resolve(value * 2);
}

step1()
    .then((value) => {
        return step2(value);
    })
    .then((result) => {
        console.log(result)
    })