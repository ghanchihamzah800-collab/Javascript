//1.	Check if a number is positive, negative, or zero.

let num = 2;

if (num % 2 == 0) {
    console.log(`the entered number ${num} is even `)

} else if( num % 2== 1){
  console.log(`the entered number ${num} is odd`)

} else if( num == 0){
  console.log(`the entered number ${num} is 0`)

}

else{
    console.log(`The enetred number is invalid`)
}

console.log("\n")

//--------------------------

//2.	Create a grading system using if/else.

let Marks = 32;

if( Marks >= 80 ){
    console.log(`You got a "A" Grade`)

} else if( Marks < 80  && Marks >= 50){
    console.log(`You got a "B" Grade`)

} else if( Marks < 50  && Marks >= 33){
    console.log(`You got a "C" Grade`)

} else if( Marks < 33){
    console.log(`You Failed`)

}else{
    console.log(`No entery.`)
}

console.log("\n")

//------------------------------

//3.	Convert the grading system to a switch statement.

let Grade = "B"

switch (Grade) {
    case "A":
        console.log("You got an 'A'")
        break;

    case "B":
        console.log("You got an 'B'")
        break;

    case "C":
        console.log("You got an 'C'")
        break;

    default:
        console.log("You failed")
        break;
}

console.log("\n")