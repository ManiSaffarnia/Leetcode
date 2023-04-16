const {romanToIntSolutionTwo} = require('../index');

test('Test #1 Solution 1', () => {
  expect(romanToIntSolutionTwo("III")).toBe(3);
});

test('Test #2 Solution 1', () => {
  expect(romanToIntSolutionTwo("LVIII")).toBe(58);
});

test('Test #3 Solution 1', () => {
  expect(romanToIntSolutionTwo("MCMXCIV")).toEqual(1994);
});