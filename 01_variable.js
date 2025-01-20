const accountId = 1445567 // assigned in memory cant change 
let accountEmail = "astha_j@mt.iitr.ac.in"
var accountPassword = "123445"
accountCity = "jaipur" // not a good idea btw 

let accountState; // it will show undefined 

// accountId = 2 // not allowed 



accountEmail = "hc@gmail.com"
accountPassword = "21212112"
accountCity = "Bengaluru"

console.log(accountId);
/* 
prefer not to use var becuase of issue in block scope and functional scope
 */
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])