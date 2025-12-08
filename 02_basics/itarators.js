//For loop:

let arr1= [1,2,3,4,6]

for (let index = 0; index < arr1.length; index++) {
    const element = arr1[index];
    
    console.log(arr1[index])
};

//"for of" used to print each sub-part of an object/array/etc:

str1= `Hello world!`

for (const string of str1) {
    console.log(`This is each char of ${string}`);
};
console.log("\n")

// "Maps" used to create and assing values as an unique identifiers, Different from variables:

const map= new Map()
map.set('IN', "India")
map.set('UK', "United Kingdom")
map.set('FR', "France")
map.set('IN', "India")

console.log(map)
console.log("\n")

// To print "key" and "value" different from maps:

for (const [key, value] of map) {
    console.log(`${key} : ${value}`)
}

console.log("\n")