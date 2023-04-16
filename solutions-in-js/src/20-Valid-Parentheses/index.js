const startingOne = "({[";
const endingOne = ")}]";
const matchingPair = {
  "{": "}",
  "[": "]",
  "(": ")"
}

const isValidParentheses = (str) => {
  const stack = []
  for (let character of str) {
    if (startingOne.includes(character)) {
      stack.push(character);
    }
    else {
      if (matchingPair[stack[stack.length - 1]] === character) {
        stack.pop();
      }
      else {
        return false
      }
    }
  }
  return stack.length === 0 ? true : false
}

module.exports = {
  isValidParentheses
}