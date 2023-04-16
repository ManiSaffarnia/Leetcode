const isPalindrome = require('../index');

test('Test One with input of 121', () => {
  expect(isPalindrome(121)).toBe(true);
});

test('Test Two with input of -121', () => {
  expect(isPalindrome(-121)).toBe(false);
});

test('Test Three with input of 10', () => {
  expect(isPalindrome(10)).toEqual(false);
});

test('Test Four with input of 6', () => {
  expect(isPalindrome(6)).toEqual(true);
});
