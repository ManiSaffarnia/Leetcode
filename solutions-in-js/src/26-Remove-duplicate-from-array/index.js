/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicatesSolutionOne = (nums) => {
  let uniqueCount = 1;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] != nums[i - 1]) {
      nums[uniqueCount] = nums[i];
      uniqueCount++;
      continue;
    }
  }

  return uniqueCount;

}

const removeDuplicatesSolutionTwo = (nums) => {
  for (let i = 1; i <= nums.length-1; i++) {

    if(nums[i-1] === nums[i]){
      nums.splice(i, 1);
      i--;
    }
  }
  return nums.length;
}

module.exports = {
  removeDuplicatesSolutionOne,
  removeDuplicatesSolutionTwo
}