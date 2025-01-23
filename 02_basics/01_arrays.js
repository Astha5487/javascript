// array

const myArr = [0, 1, 4, 2, 4,5]
const myheroes = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
console.log(myArr[3]);

// array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9); // get placed in the starting of the array
// myArr.shift(); // remove first element

// console.log(myArr.includes(4));
// console.log(myArr.indexOf(4));

const newArr = myArr.join()

// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr);


// slice, splice

console.log("A", myArr);

const myn1 = myArr.slice(1, 3) // range not include means 3 index not included onlye 1 and 2 indexing in spice
console.log(myn1);
console.log("B", myArr);


const myn2 = myArr.splice(1, 3)
console.log("C", myArr); // [0,4, 5] ,  ->the 1,2,3 indexed element got i.e. 1,4,2 removed and the removed element are result, [0,1,4,2,4,5];
// splice -> original array got manipulated
console.log(myn2);// [1,4,2]