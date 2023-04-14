/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  const reversed = `${x}`.split('').reverse().join('');
  console.log(reversed)
  return (Number(reversed) === x) 
};

module.exports = isPalindrome