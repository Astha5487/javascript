// console.log("H");
// console.log("I");
// console.log("T");
// console.log("E");
// console.log("S");
// console.log("H");

function sayMyName(){
     console.log("H");
     console.log("I");
     console.log("T");
     console.log("E");
     console.log("S");
     console.log("H");

}
//sayMyName()

// function addTwoNumbers(number1, number2){
//    console.log( number1 + number2);
// }

 function addTwoNumbers(number1, number2){
  // let result = number1 + number2
   //return result

  // console.log("astha"); // it will not get print
  return number1 + number2
 }

const result = addTwoNumbers(3, 5)

// console.log("result:" , result );

function loginUserMessage(username){
    if(username === undefined){
        console.log("please enter a username");
        return 
    }
    return `${username} just logged in`
}

//console.log(loginUserMessage("hitesh"))

function calculateCartPrice(val1, val2,...num1){
   return num1
}

// console.log(calculateCartPrice(200, 300, 400, 2000))

const user = {
    username: "astha",
    price: 199
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

//console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 10000]));


