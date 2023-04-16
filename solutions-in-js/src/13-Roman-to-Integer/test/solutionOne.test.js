const { romanToIntSolutionOne } = require('../index');

test('Test #1 Solution 1', () => {
  expect(romanToIntSolutionOne("III")).toBe(3);
});

test('Test #2 Solution 1', () => {
  expect(romanToIntSolutionOne("LVIII")).toBe(58);
});

test('Test #3 Solution 1', () => {
  expect(romanToIntSolutionOne("MCMXCIV")).toEqual(1994);
});
