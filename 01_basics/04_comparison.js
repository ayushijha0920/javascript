console.log(2 > 1);
console.log(2 == 1);




console.log("2" > 1);  //javaScript automatically converts 2 into number ,  TypeScript does not allow to compare two different data types
console.log("02" > 1);

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);


console.log(undefined > 0);
console.log(undefined == 0);
console.log(undefined >= 0);
//we avoid this type of conversion in JS

// Comparison and equality check are two different things in JS


//Strict Check 

// ===

console.log("2" === 2);
