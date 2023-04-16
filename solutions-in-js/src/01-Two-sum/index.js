/** Solution one */
const twoSumSolutionOne = function (nums, target) {
  const length = nums.length;
  for (i = 0; i < length; i++) {
    for (j = i + 1; j < length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j]
      }
    }
  }
};

/** Solution Two */
// const twoSumSolutionTwo = (nums, target)=> {
//   for (let i = 0; i < nums.length; i++) {
//     const diff = target - nums[i];
//     const isSecondItemFound = nums.slice(i, 1).includes(diff);
//     console.log('isSecondItemFound = ', isSecondItemFound);
//     if(isSecondItemFound){
//       const resultArray = [i];
//       nums.forEach((item, index) => {
//         if(item === diff && index !== i){
//           resultArray.push(index);
//           return;
//         }
//       });
//       console.log('resultArray = ', resultArray)
//       return resultArray
//     }
//   }
// }

module.exports = {
  twoSumSolutionOne,
  // twoSumSolutionTwo
}