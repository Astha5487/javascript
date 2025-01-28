// Immediately Invoked Functional Expressions (IIFE)

(function chai(){
    // named iife
    console.log(`DB CONNECTED`); // global scope ke pollution se bachane ke liye iife ka use krte hai

})();

( (name) => {
    console.log(`DB CONNECTED TO ${name}`);
})('hitesh')

/*
     Javascript execution context
     1). global execution context->  allocated in this 
     2). function execution context
     3). eval ec 

     {}-> memory creation phase
    -> execution phase

 */