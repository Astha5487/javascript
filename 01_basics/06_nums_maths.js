const score = 400
console.log(score);

const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2)); // decimal ya prescision value 

const otherNumber = 123.8966
console.log(otherNumber.toPrecision(3)); // 124 --- gives and round of value

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN')); // gives in comma


// +++++++ Maths +++++++++
console.log(Math); // object
console.log(Math.abs(-4)); //4


console.log(Math.round(4.6));  //5
console.log(Math.ceil(4.6)); // 5-> top value choose
console.log(Math.floor(4.6)); //4-> lower value choosed

console.log(Math.min(4, 3, 6, 8)); //3
console.log(Math.max(4, 3, 6, 8));  //8

console.log(Math.random()); // alwys between 0 and 1
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1); // 1 added because 1 to chahiye he am se kam aur 0 ka case avoid krne ke liye

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min +1)) + min) // important 

