// if 
// const isUserloggedIn = true
// const temperature = 55

// if(temperature < 50){
//     console.log("less than 50 ");
// }

// else{
//     console.log("greater than 50")
// }


// if (2 === "2") {
//     console.log("executed");
// }

const score = 200

// if(score > 100) {
//     const power = "fly"
//     console.log(`User power: ${power}`);
// }

// const balance = 1000
// if (balance < 500){
//   console.log("less than 500");
// }
// else if(balance < 750){
//     console.log("less than 750");
// }

// else if(balance < 900) {
//     console.log("less than 900");
// }

// else{
//     console.log("less than 1200");
// }

const userloggedin = true
const debitcard = true
const loggedinfromgoogle = false
const loggedfromemail= true

if(userloggedin && debitcard ) {
    console.log("allow to buy course");
}

if(loggedinfromgoogle || loggedfromemail){
    console.log("user logged in ");
}