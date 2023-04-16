/**
 * @param {string} romanSymbol
 * @return {number}
 */

enum ROMAN_SYMBOL {
  I = 1,
  V = 5,
  X = 10,
  L = 50,
  C = 100,
  D = 500,
  M = 1000
}

type RomanSymbol = "I" | "V" | "X" | "L" | "C" | "D" | "M";

export const romanToIntSolutionOne = (romanSymbol: string): number => {
  /** Solution One  */
  const current = romanSymbol.split("") as RomanSymbol[];
  const numberArray = current.map((symbol: RomanSymbol) => ROMAN_SYMBOL[symbol]);
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


/** Solution two */ /** Faster one */
export const romanToIntSolutionTwo = function (romanSymbol: string): number {
  const current = romanSymbol.split("") as RomanSymbol[];
  const numberArray = current.map((symbol: RomanSymbol) => ROMAN_SYMBOL[symbol]);
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
