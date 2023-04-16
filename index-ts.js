const { twoSumSolutionOne, twoSumSolutionTwo } = require('./solution-in-ts/dist/01-Two-sum'); /** 01-Palindrome-Number */
const { isPalindrome } = require('./solution-in-ts/dist/09-Palindrome-Number'); /** 09-Palindrome-Number */
const { romanToIntSolutionOne, romanToIntSolutionTwo } = require("./solution-in-ts/dist/13-Roman-to-Integer"); /** 13-Roman-to-Integer */
const { longestCommonPrefixSolutionOne, longestCommonPrefixSolutionTwo } = require("./solution-in-ts/dist/14-Longest-common-prefix"); /** 14-Longest-common-prefix */
const { isValidParentheses } = require("./solution-in-ts/dist/20-Valid-Parentheses"); /** 20-Valid-Parentheses */


/** 13-Roman-to-Integer */
console.time('performance');
for (let i = 0; i < 1000; i++) {
  // twoSumSolutionOne([3,3], 6) /** Solution of problem 01-Palindrome-Number */
  // isPalindrome(-123) /** Solution of problem 09-Palindrome-Number */
  // romanToIntSolutionTwo("MMXXII"); /** Solution of problem 13-Roman-to-Integer */
  // longestCommonPrefixSolutionTwo(["flower", "flower", "flower", "flower"]); /** Solution of problem 14-Longest-common-prefix */
  isValidParentheses("()[]{}"); /** Solution of problem 20-Valid-Parentheses */

}
console.timeEnd('performance');