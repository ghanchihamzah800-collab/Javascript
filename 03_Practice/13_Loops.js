//1.	Print numbers 1–50 using: (For, while, Do while)

for (let i = 1; i <= 50 ; i++) {
   console.log(i)
    
}

let i = 1
while (i <= 50) {
    console.log(i)

i++
}

i =1
do {
    console.log(i)
    i++
} while (i <= 50);

console.log("\n")

//----------------------

//2.	Loop through a string and print characters.

let str1="Hamzah"

for (let i = 0; i < str1.length; i++) {
   console.log(str1[i])
}

//----------------

//3.	Skip multiples of 3 using continue.

for (let i = 0; i <= 50 ; i++) {

    if(i % 3 === 0){continue}
    console.log(i);
      
}

console.log("\n")

//-----------------

//4.	Stop loop if number reaches 25 using break.

for (let i = 0; i <= 50 ; i++) {

    if(i === 25){break}
    console.log(i);

}

console.log("\n")

//--------------------------------

