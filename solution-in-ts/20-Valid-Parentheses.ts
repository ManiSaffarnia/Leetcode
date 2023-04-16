type MatchingMap = {
  "{": "}",
  "[": "]",
  "(": ")"
};

const startingOne = "({[";
const matchingPair: MatchingMap = {
  "{": "}",
  "[": "]",
  "(": ")"
};

export const isValidParentheses = (str: string): boolean => {
  const stack = []
  for (let character of str) {
    if (startingOne.includes(character)) {
      stack.push(character);
    }
    else {
      if (matchingPair[stack[stack.length - 1] as keyof MatchingMap] === character) {
        stack.pop();
      }
      else {
        return false
      }
    }
  }
  return stack.length === 0 ? true : false
}
