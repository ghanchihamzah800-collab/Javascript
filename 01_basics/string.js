const name= new String(`Hamzah`); // "new String" is used to have an object wrapper [String: 'Hamzah']

console.log(name);

console.log (name.__proto__); //shows proto-type blue print in inspect. ( Shows all funtions you need to know. )

console.log (name.toUpperCase());
console.log (name.toLowerCase());
console.log (name.charAt(2));
console.log (name.indexOf(`m`));

const newName= name.substring(0,4);

console.log(newName);