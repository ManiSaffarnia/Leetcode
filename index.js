const twoSum = require('./solutions/01-Two-sum'); /** 01-Palindrome-Number */
const isPalindrome = require('./solutions/09-Palindrome-Number'); /** 09-Palindrome-Number */
const romanToInt = require("./solutions/13-Roman-to-Integer"); /** 13-Roman-to-Integer */
const { longestCommonPrefixSolutionOne, longestCommonPrefixSolutionTwo } = require("./solutions/14-Longest-common-prefix"); /** 14-Longest-common-prefix */
const { isValidParentheses } = require("./solutions/20-Valid-Parentheses"); /** 20-Valid-Parentheses */

/** 13-Roman-to-Integer */
console.time('performance');
for (let i = 0; i < 1000; i++) {
  // twoSum([3,3], 6) /** Solution of problem 01-Palindrome-Number */
  // isPalindrome(-123) /** Solution of problem 09-Palindrome-Number */
  // romanToInt("MMXXII"); /** Solution of problem 13-Roman-to-Integer */
  // longestCommonPrefixSolutionTwo(["flower", "flower", "flower", "flower"]); /** Solution of problem 14-Longest-common-prefix */
  isValidParentheses("()[]{}"); /** Solution of problem 20-Valid-Parentheses */

}
console.timeEnd('performance');