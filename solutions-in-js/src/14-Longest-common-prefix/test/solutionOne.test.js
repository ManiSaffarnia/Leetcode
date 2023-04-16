const { longestCommonPrefixSolutionOne } = require('../index');

test('Test #1 Solution 1', () => {
  expect(longestCommonPrefixSolutionOne(["flower","flow","flight"])).toBe("fl");
});

test('Test #2 Solution 1', () => {
  expect(longestCommonPrefixSolutionOne(["dog","racecar","car"])).toBe("");
});

test('Test #3 Solution 1', () => {
  expect(longestCommonPrefixSolutionOne(["flower","flower","flower"])).toEqual("flower");
});
