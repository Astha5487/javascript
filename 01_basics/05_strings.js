const name = "astha"
const repoCount = 50

console.log(name+ repoCount+ "value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); // known as string interpolation

const gameName = new String(`hitesh-hc`) 

console.log(gameName[0]);

console.log(gameName.__proto__); // {}

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));

console.log(gameName.indexOf('t'));


//substring by index
const newString = gameName.substring(0, 4)
console.log(newString);

//slice
const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

// trim
const newStringOne = "  hitesh  "
console.log(newStringOne);
console.log(newStringOne.trim());

// replace
const url = "https://hitesh.com/hitesh%20choudhary"
console.log(url.replace('%20', '-'));

console.log(url.includes('hitesh'));
console.log(url.includes('astha'));

//split
console.log(gameName.split('-'))





