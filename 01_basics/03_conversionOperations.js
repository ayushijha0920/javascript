// let score = "33abc"
let score = null

// console.log(typeof score);


let valueInNumber = Number(score)
// console.log(typeof (valueInNumber)); //NaN in case of "33abc" , 0 in case of null, 1 in case of boolean, NaN in case of string 

// console.log(valueInNumber);

//"33" => 33
//"33abc" => NaN


let isLoggedIn = 1 
let booleanIsLoggedIn = Boolean(isLoggedIn);
// console.log(booleanIsLoggedIn);

//1 => true; 0=> false
//" " => false
// "Ayushi" => true




let someNumber =33

let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);
