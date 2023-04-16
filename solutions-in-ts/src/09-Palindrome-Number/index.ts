/**
 * @param {number} num
 * @return {boolean}
 */
export const isPalindrome = function(num: number) {
  const reversed = `${num}`.split('').reverse().join('');
  return (Number(reversed) === num) 
};