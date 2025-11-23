//function to print name:

function sayMyName(){
    console.log("H");
    console.log("a");
    console.log("m");
    console.log("z");
    console.log("a");
    console.log("H");
}

// sayMyName();

//Function to add 2 numbers:

function sumOfTwo(num1, num2){

    // console.log(num1 + num2);

    /*
    let result = num1 + num2;
    return result;
    */

    return num1 + num2;
    }

sumOfTwo(2, 3);

const result = sumOfTwo(2, 3);
console.log(`returned value is ${result}`)

//How to pass multiple values in function using, rest operators:

function myCart(...num1){

    return num1;
}

console.log(myCart(100,200,300));