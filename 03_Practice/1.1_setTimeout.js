//16. Write a bug caused by var inside a loop and fix it using let.

for (let i = 0; i < 3; i++) {
  setTimeout(function () {
        console.log(i)
    }, 1000)
    
}
console.log("\n")

//-------------------

/* 19. Predict output:
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 0);
} */

for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 0); // exection (i) times under 0ms, if setTimeout is inscrease, it will take the (x) seconds.
}

console.log("\n")

//--------------------------

// 20.	Fix the above bug using let.

for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 0);
} 

console.log("\n")
