// Two types of Datatypes 

// # Primitive data Type (call by value):

//  7 categories : String, Number, Boolean, null, undefined, Symbol, BigInt


// ## Is JS a dynamically or statically type language??????????

// JavaScript is a dynamic language and not static,
//  which means that variables can hold values of different types during runtime.
//  Unlike languages such as Typescript or Java, you don't need to declare the data type of a variable explicitly.

const score = 100
const scoreValue = 100.3


const isLoggedIn = false
const outsideTemp = null

let userEmail; //undefined

//How  to declar a Symbol

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 123456765432111111n   // when we are declaring BigInt



// 2. Non-Primitive data Type (reference datatype):

// Array, Objects, Functions

//Array
const heros = ["shaktiman", "naagraj", "doga"]


//Object
let myObj =
{
    name: "Ayushi",
    age: 26,
}


//Function

//we declare functions like this 
//function(){} 
//here we are storing the function in a variable

const myFunction = function(){
console.log("Hello")
}


console.log(typeof heros);

// datatype of non-primitive data are object except for function , it is function object
//for Study purposes
//
