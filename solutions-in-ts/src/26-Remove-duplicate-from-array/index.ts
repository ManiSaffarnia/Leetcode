/**
 * @param {number[]} nums
 * @return {number}
 */
export const removeDuplicatesSolutionOne = (nums: number[]):number => {
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

export const removeDuplicatesSolutionTwo = (nums: number[]): number => {
  for (let i = 1; i <= nums.length-1; i++) {

    if(nums[i-1] === nums[i]){
      nums.splice(i, 1);
      i--;
    }
  }
  return nums.length;
}
