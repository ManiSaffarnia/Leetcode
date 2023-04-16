const { isValidParentheses } = require('../index');

test('Test #1 Solution 1', () => {
  expect(isValidParentheses("()")).toBe(true);
});

test('Test #2 Solution 1', () => {
  expect(isValidParentheses("()[]{}")).toBe(true);
});

test('Test #3 Solution 1', () => {
  expect(isValidParentheses("(]")).toBe(false);
});

test('Test #4 Solution 1', () => {
  expect(isValidParentheses("([)]")).toBe(false);
});

test('Test #5 Solution 1', () => {
  expect(isValidParentheses("{[]}")).toBe(true);
});

test('Test #6 Solution 1', () => {
  expect(isValidParentheses("{")).toBe(false);
});
