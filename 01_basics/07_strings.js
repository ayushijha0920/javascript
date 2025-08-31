const name = "Ayushi"
const repoCount = 50

// concatenation

// console.log(name + repoCount + "value"); 



//now in modern days we use interpolation

console.log(`hello my name is ${name} and my repo count is ${repoCount}`)

// why do we use interpolation??????????????????????????????????



//Declaration of Strings as an object (constructor)
 

// thre are some methods in javascript

const gameName = new String('Ayushi-ak-com')

console.log(gameName[0]);
console.log(gameName.__proto__); 
console.log(gameName.length) // to check the length of the string

console.log(gameName.toUpperCase()) // converts it to uppercase
console.log(gameName.charAt(4))  // to check what is in the 4th position to the index
console.log(gameName.indexOf('h'))  


const newString = gameName.substring(0, 4)


console.log(newString)


const anotherString = gameName.slice(-4, 4)
console.log(anotherString);


const newStringOne = "    Ayushi    "

console.log(newStringOne);
console.log(newStringOne.trim()); //to cut of the extra space 

const url = "https://google.com/google%20ayushi"


console.log(url.replace('%20', '-'));
console.log(url.includes('ayushi'));


console.log(gameName.split('-'));
