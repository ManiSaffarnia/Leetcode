const twoSum = require('./solutions/01-Two-sum'); /** 01-Palindrome-Number */
const isPalindrome = require('./solutions/09-Palindrome-Number'); /** 09-Palindrome-Number */
const romanToInt = require("./solutions/13-Roman-to-Integer"); /** 13-Roman-to-Integer */


/** 13-Roman-to-Integer */
console.time('performance');
for(let i=0; i<1000 ; i++){
  // twoSum([3,3], 6) /** Solution of problem 01-Palindrome-Number */
  // isPalindrome(-123) /** Solution of problem 09-Palindrome-Number */
  romanToInt("MMXXII"); /** Solution of problem 13-Roman-to-Integer */
}
console.timeEnd('performance');