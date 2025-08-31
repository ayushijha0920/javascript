//Stack (Primitive, Copy) and Heap (Non-Primitive, Original value) memory


//Stack

let myYoutubeName = "ayushijhadotcom"

let anotherName = "refreshyourcode"

// console.log(anotherName);
// console.log(myYoutubeName);


let userOne = { // Heap
    email: "user@gmail.com",
    upi : "user@ybl"
}

let userTwo = userOne

userTwo.email = "ayushi@gmail.com"


console.log(userOne.email);
console.log(userTwo.email);

