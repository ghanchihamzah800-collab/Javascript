//1.	Rewrite a Promise chain using async/await.

function fetchUser() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id: 1, name: "Sir" });
    }, 1000);
  });
}

function fetchPosts(userId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        `Post 1 of user ${userId}`,
        `Post 2 of user ${userId}`
      ]);
    }, 1000);
  });
}

async function loadPosts() {
  try {
    const user = await fetchUser();
    const posts = await fetchPosts(user.id);
    console.log(posts);
  } catch (error) {
    console.log(error);
  }
}

loadPosts();


//2.	Handle errors using try/catch in async functions.

function fetchUser2(shouldFail){
    return new promise ((resolve, reject) => {
        if (shouldFail){
            reject(new error("failed to fetch user"))
        } else{
            resolve({id:1 , name: "Hamzah"})
        }
    }, 1000)
}

async function loadUser() {
    try{
        const user = await fetchUser2(true);
        console.log(user)
    } catch(error){
        console.error("error caught:", error.message)
    }
}

loadUser();

//3.	Write an async function that always returns a value.

async function getUserName(shouldFail) {
  try {
    if (shouldFail) {
      throw new Error("Something went wrong");
    }
    return "Sir";
  } catch (error) {
    return "Guest";
  }
}

//

