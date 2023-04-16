type ResultTuple = [number, number];

/** Solution one */
export const twoSumSolutionOne = function (nums: number[], target: number): ResultTuple {
  const length = nums.length;
  for (let i = 0; i < length; i++) {
    for (let j = i + 1; j < length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j]
      }
    }
  }
  throw new Error('This wont happen');
};

/** Solution Two */
export const twoSumSolutionTwo = (nums: number[], target: number): ResultTuple=> {
  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];
    const isSecondItemFound = nums.slice(i, 1).includes(diff);
    if(isSecondItemFound){
      const resultArray = [i];
      nums.forEach((item, index) => {
        if(item === diff && index !== i){
          resultArray.push(index);
          return;
        }
      });
      return resultArray as ResultTuple
    }
  }

  throw new Error('This wont happen');
}
