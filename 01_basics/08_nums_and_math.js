// const score = 400 
// console.log(score);

// const balance = new Number(100)

// console.log(balance);

// //we can change number into string to check its length using toString method

// console.log(balance.toString().length);

// console.log(balance.toFixed(2));


// //precision value
// const otherNumber = 23.8999
// console.log(otherNumber.toPrecision(3));

// const otherNumberOne = 123.8999
// console.log(otherNumberOne.toPrecision(3));



// // gives value in exponential 
// const otherNumbertwo = 1123.8999
// console.log(otherNumbertwo.toPrecision(3));



// //to ease the representation of large numbers like 1000000


//  const hundreds = 10000000
// console.log(hundreds.toLocaleString('en-IN'));

// //max value mi value

// //+++++++++++++++++++++++++++++++++++++++++++++  MATHS ++++++++++++++++++++++++++++++++++++++++++++++++++++

// console.log(Math);


// // absolute value  make positive value

// console.log(Math.abs(-4));

// //Round off

// console.log(Math.round(4.5));
// console.log(Math.ceil(4.5));

// console.log(Math.floor(4.5));

// //to find the lowest value of the array we use min 

// console.log(Math.min(4,5,3,6));

console.log(Math.random());
console.log(Math.random()*10);

//but value can be 0.045678 in this case we will get 0 and to avoid this situation we write it like this


console.log((Math.random()*10) +1);
console.log(Math.floor(Math.random()*10) +1);



//min and max


 const min = 10
 const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min);
