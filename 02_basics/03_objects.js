// singleton

// object literal 

//Object.create // constructor method

const mySym = Symbol("key1")

const JsUser = {
    name: "astha",
    "full name" : "astha jaiswal",
    [mySym]: "mykey1",
    age: 19,
    location: "varanasi",
    email: "astha@google.com",
    isLoggedIn: false,
    lastLoginDays: ["monday", "saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])


JsUser.email = "astha@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "astha@microsoft.com"
// console.log(JsUser)




JsUser.greetings = function(){
    console.log("hello JS user");
}

console.log(JsUser.greeting);

