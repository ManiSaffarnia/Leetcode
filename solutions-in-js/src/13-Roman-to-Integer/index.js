const ROMAN_SYMBOL = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000
}

/**
 * Solution One
 * @param {string} s
 * @return {number}
 */
const romanToIntSolutionOne = function (romanSymbol) {
  const current = romanSymbol.split("");
  const numberArray = current.map((symbol) => ROMAN_SYMBOL[symbol]);
  const length = current.length;

  let finalNumber = 0;
  for (let i = 0; i < length; i++) {
    const currentNumber = numberArray[i];
    const nextNumber = numberArray[i + 1];

    if (!nextNumber || currentNumber >= nextNumber) {
      finalNumber += currentNumber;
    }
    else {
      finalNumber -= currentNumber;
    }
  }

  return finalNumber;
}


/** Solution two is the Faster one */
var romanToIntSolutionTwo = function (romanSymbol) {

  const current = romanSymbol.split("");
  const numberArray = current.map(symbol => ROMAN_SYMBOL[symbol]);
  return numberArray.reduce((acc, current, currentIndex) => {
    const nextItem = numberArray[currentIndex + 1];
    if (!nextItem || current >= nextItem) {
      return acc + current
    }
    else {
      return acc - current
    }
  }, 0);
};

module.exports = {
  romanToIntSolutionOne,
  romanToIntSolutionTwo
}