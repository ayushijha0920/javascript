const accountId = 12345 // const keyword is used for constant declaration
let accountEmail = "ayushi@gmail.com" // let keyword is used for variable declaration
var accountPassword = "12344"
accountCity  ="Gurugram"
let accountState;

/*
When you declare a variable in javaScript and do not assign any value to it , bydefault its value is undefined
*/

// accountId =2



accountEmail = "ayu@gmail.com"
accountPassword = "1098"
accountCity = "Madhubani"


/*
prefer not to use var , because of issue in block scope and functional scope
*/
console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])