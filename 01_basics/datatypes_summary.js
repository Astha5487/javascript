/*  there are 2 types of datatypes according to official document

these are classified on the basis of how we store the data and access it in the memory

1). primitive
it has 7 types ->
string : call be value, we can change it in its copy 
number
boolean
null
undefined
symbol
BigInt 

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId); // false 

const bigNumber = 34452453455n



2). non-primitive or Reference type
array
objects
functions

const heroes = ["shaktiman", "naagraj", "doga"]
let myObj = {
   name: "astha",
   age: 22, 
}

const myFunction = function() {
   console.log("hello world");
 }

 console.log(typeof bigNumber); // undefined
 console.log(typeof outsideTemp);  // object

 console.log(typeof scoreValue); //number
console.log(typeof anotherId);  // symbol

 console.log(typeof mFunction); // function known as object function


 stack memory and heap memory

 primitive -> stack --- variable declare kiya toh uska copy milega
 non primitive -> heap --- refernce milta hai original value ka means koi bhi change krenge wo original me change hoga


 let myYoutubename = "asthajaiswaldotcom" // store in stack

 let anothername = myYoutubename
 anothername = "chaiaurcode"

 console.log(myYoutubename) //asthajaiswaldotcom
 console.log(anothername) // chaiaurcode 

 let userOne = {
   email: "user@google.com"
   upi: "user@ybl"

 }

 let userTwo = userOne

 userTwo.email = "astha@google.com"

 console.log(userOne.email); // astha@google.com
 console.log(userTwo.email); //astha@google.com


*/
