//1.	Write an immediately invoked function that logs "Started".

(function (){
    console.log("Started")
})

();

//-----------------------

//2.	Write an IIFE that returns a random number.

const number = (function (){
    return (Math.floor(Math.random() *100 ) +1)
}) ();

console.log(number)