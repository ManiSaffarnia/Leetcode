import { 
  twoSumSolutionOne, /** 01-Two-sum solution one */
  twoSumSolutionTwo, /** 01-Two-sum solution two */
  isPalindrome, /** 09-Palindrome-Number */
  romanToIntSolutionOne, /** 13-Roman-to-Integer solution one */
  romanToIntSolutionTwo, /** 13-Roman-to-Integer solution two */
  longestCommonPrefixSolutionOne, /** 14-Longest-common-prefix solution one */
  longestCommonPrefixSolutionTwo, /** 14-Longest-common-prefix solution two */
  isValidParentheses /** 20-Valid-Parentheses */
 } from './src'

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