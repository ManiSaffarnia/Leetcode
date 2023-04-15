/**
 * Problem Description:
 * Write a function to find the longest common prefix string amongst an array of strings.
 * If there is no common prefix, return an empty string "".
 * 
 * Sample Inputs: 
 * ["flower", "flow", "flight"]) => output: fl
 * ["dog", "racecar", "car"]) => output: ""
 * ["reflower", "flow", "flight"]) => => output: ""
 * ["flower", "flower", "flower", "flower"]) => "flower"
 */

/**
 * Solution number one
 * @param {string[]} strs
 * @return {string}
 */
export const longestCommonPrefixSolutionOne = function (strs: string[]): string {
  const longestPrefixResult = strs.reduce((longestPrefix, current) => {
    for(let subStringlength=1; subStringlength<=current.length; subStringlength++){
      const subStr = current.slice(0, subStringlength);
      const hasThisPrefix = strs.every((item) => item.indexOf(subStr) === 0);
      if (hasThisPrefix && subStr.length > longestPrefix.length) {
        longestPrefix = subStr;
      }
    }

    return longestPrefix;
  }, "");

  return longestPrefixResult;
};

/**
 * Solution number 2
 * This solution has a better performance
 * @param {string[]} strs
 * @return {string}
 */
export const longestCommonPrefixSolutionTwo = function (strs: string[]): string {
  let longestPrefix = "";
  for( let word of strs){
    let shouldBreak = false;
    for (let subStringlength = 1; subStringlength <= word.length; subStringlength++) {
      const subStr = word.slice(0, subStringlength);
      const hasThisPrefix = strs.every((item) => item.indexOf(subStr) === 0);
      if (hasThisPrefix && subStr.length > longestPrefix.length) {
        longestPrefix = subStr;
      }
      else {
        shouldBreak = true;
        break;
      }
    }
  }

  return longestPrefix;
};