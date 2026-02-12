//1. Missing await.

async function getName() {
  return "sir";
}

async function test(){
  const value = getName();
  console.log(value);
}

test();


// 2. With await.

async function getName2() {
  return Promise.resolve("Hamzah");
}

async function test2() {
  console.log(await getName2());
}

test2();

//3. Sequential or Parallel.

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function test3() {
  await delay(1000);
  await delay(1000);
  console.log("Done");
}

test3();

//4. Parallel version.

function delay(ms){
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function test4() {
  const a = delay (1000);
  const b = delay (1000);

  await a;
  await b;

  console.log("Done");
}

test4();

//5.	Write an async function that always returns a value.

async function getUserName(shouldFail) {
  try {
    if (!shouldFail) {
      throw new Error("Something went wrong");
    }
    return "Sir";
  } catch (error) {
    return "Guest";
  }
}


  console.log(getUserName());

//6. A function that returns a Promise with setTimeout.

function logger() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve ([{id: 1, name: `user1`},
      {id:2, name: `user2`}]
    )
    }, 1000)
    
  })
}

async function userLogs() {
  const user = await logger();

  user.forEach(users => {
    console.log(`Users Logged ${users.id} in are ${users.name} `)

  });

}

userLogs();

//7. Conditional Rejection.
//8. Handle With try/catch.

function logCheck(num) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (num <= 5) {
        resolve({ user: `LoggedIN` });
      } else{
        reject ("Error")
      }
    }, 1000);
  });
}

async function loggedIn() {

  try {
      const logs = await logCheck(6);
      console.log(logs);
  } catch (error) {
    console.log(`User not Logged In`);
    
  }

}

loggedIn();

//10. Multiple Async Calls.

function delayTask1(name, time) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(name);
      resolve(name);
    }, time);
  });
}

async function Executor() {
  const tasks = [
    delayTask1("Task A1", 1000),
    delayTask1("Task B2", 500),
  ];

  const result = await Promise.all(tasks);
  console.log(result);

  console.log("Task C3");
}

Executor();

//11. Controlled Parallel Execution.

function delayTask2(name, ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Task executed ${name} at ${ms} ms`)
      resolve(name);
    }, ms);
  })
}

async function Executor2() {
  const promise = [
    delayTask2("Task 1",1000),
    delayTask2("Task 2", 500)
  ];

  const result = await Promise.all(promise);

  console.log("All task done " , result);
}

Executor2();


//12.	Rewrite a Promise chain using async/await.

function fetchUser(){
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve ({id: 1, name: "Sir"});
    },1000)
  })
}

function postId(userID){
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        `Post 1 of user ${userID}`,
        `Post 2 of user ${userID}`
      ])
    }, 1000)
  })
}

async function loadUser() {
  try {
    const user = await fetchUser();
    const post = await postId(user.id);
    console.log(post)
  } catch (error) {
    console.log(error)
  }
}

loadUser();

//13. First-Settled Control.

function delayTask3(name, ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(name);
    }, ms);
  });
}

async function Executor3() {
  const result = await Promise.race([
    delayTask3("Task One", 1000),
    delayTask3("Task Two", 500)
  ]);

  console.log("Winner:", result);
}

Executor3();

//14. Promise.allSettled()

function delayTask4(name, ms, shouldFail = false) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(shouldFail){
        reject(name + 'Failed');
      } else{
        resolve(name + 'Succeed');
      }
    }, ms);
  });
}

async function Executor4() {
  const result = await Promise.allSettled([
    delayTask4("Task 3 ", 1000),
    delayTask4("Task 4 ", 500, true)
  ])

  console.log(result);
}

Executor4();

//15.Promise.any()

function delayTask5(name, ms, shouldFail = false) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldFail) {
        reject(name + " failed");
      } else {
        resolve(name + " success");
      }
    }, ms);
  });
}

async function Executor5() {
  const result = await Promise.any([
    delayTask5("Task 1", 500, true),
    delayTask5("Task 2", 1000, false),
    delayTask5("Task 3", 300, true)
  ]);

  console.log("First success:", result);
}

Executor5();

//16. Timeout Guard Using Promise.race

function fetchData(ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data received");
    }, ms);
  });
}

function timeout(ms) {
  return new Promise((_, reject) => {
    setTimeout(() => {
      reject(new Error("Request timed out"));
    }, ms);
  });
}

async function safeFetch() {
  try {
    const result = await Promise.race([
      fetchData(1000),
      timeout(2000)
    ]);

    console.log(result);
  } catch (error) {
    console.log("Error:", error.message);
  }
}

safeFetch();

//17.	Handle errors using try/catch in async functions.

function fetchUser2(shouldFail){
    return new Promise ((resolve, reject) => {
        if (shouldFail){
            reject(new Error("failed to fetch user"))
        } else{
            resolve({id:1 , name: "Hamzah"})
        }
    }, 1000)
}

async function loadUser2() {
    try{
        const user = await fetchUser2(false);
        console.log(user)
    } catch(error){
        console.error("error caught:", error.message)
    }
}

loadUser2();

//18. Awaiting multiple async calls safely inside try/catch.

function fetchUser3() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("User fetch failed");
    }, 1000);
  });
}

function fetchOrder() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Fulfilled");
    }, 1000);
  });
}

async function Executor6() {
  try {
    const [user, order] = await Promise.all([
      fetchUser3(),
      fetchOrder()
    ]);

    console.log(user, order);
  } catch (error) {
    console.error("At least one failed:", error);
  }
}

Executor6();

//19.	Async Function Without Return. 

async function test() {
  console.log("Inside async function");
}

const result = test();

console.log("Returned:", result);

//20.	Error Swallowing Inside try/catch

async function fetchData() {
  throw new Error("Network failed");
}

async function run() {
  try {
    await fetchData();
  } catch (error) {
  }

  console.log("Program continues...");
}

run();
