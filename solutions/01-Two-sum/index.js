/** Solution one */
var twoSum = function (nums, target) {
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
// const twoSum = (nums, target)=> {
//   for (let i = 0; i < nums.length; i++) {
//     const diff = target - nums[i];
//     const isSecondItemFound = nums.slice(i, 1).includes(diff);
//     if(isSecondItemFound){
//       const resultArray = [i];
//       nums.forEach((item, index) => {
//         if(item === diff && index !== i){
//           resultArray.push(index);
//           return;
//         }
//       });
//       return resultArray
//     }
//   }
// }

module.exports = twoSum