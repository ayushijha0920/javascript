console.log("Dates")

//Dates

// let myDate = new Date()


// console.log(myDate.toString());
// console.log(myDate.toDateString())
// console.log(myDate.toLocaleDateString())
// console.log(typeof myDate)

// let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
let myCreatedDate = new Date("2023-08-23") 

// console.log(myCreatedDate.toLocaleString())

//TimeStamp

let myTimeStamp = Date.now()
//  console.log(myTimeStamp);
//  console.log(myCreatedDate.getTime())
  console.log(Math.floor(Date.now()/1000))

//methods 

let newDate =new Date()

console.log(newDate.getMonth()+1)
console.log(newDate.getDay())

//what is string interpolation??

console.log(`${newDate.getDay()} and the time is`)


//toLocaleString is an object 
