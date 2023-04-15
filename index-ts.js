const {twoSumSolutionOne, twoSumSolutionTwo} = require('./solution-in-ts/dist/01-Two-sum'); /** 01-Palindrome-Number */
const {isPalindrome} = require('./solution-in-ts/dist/09-Palindrome-Number'); /** 09-Palindrome-Number */
const {romanToIntSolutionOne , romanToIntSolutionTwo} = require("./solution-in-ts/dist/13-Roman-to-Integer"); /** 13-Roman-to-Integer */

console.log(twoSumSolutionOne([3,3], 6));
console.log(twoSumSolutionTwo([3,3], 6));
console.log(isPalindrome(-123));
console.log(romanToIntSolutionOne("MMXXII"));
console.log(romanToIntSolutionTwo("MMXXII"));

/** 13-Roman-to-Integer */
console.time('performance');
for(let i=0; i<1000 ; i++){
  // twoSum([3,3], 6) /** Solution of problem 01-Palindrome-Number */
  // isPalindrome(-123) /** Solution of problem 09-Palindrome-Number */
  //romanToInt("MMXXII"); /** Solution of problem 13-Roman-to-Integer */
}
console.timeEnd('performance');