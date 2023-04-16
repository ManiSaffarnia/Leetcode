const { longestCommonPrefixSolutionTwo } = require('../index');

test('Test #1 Solution 1', () => {
  expect(longestCommonPrefixSolutionTwo(["flower","flow","flight"])).toBe("fl");
});

test('Test #2 Solution 1', () => {
  expect(longestCommonPrefixSolutionTwo(["dog","racecar","car"])).toBe("");
});

test('Test #3 Solution 1', () => {
  expect(longestCommonPrefixSolutionTwo(["flower","flower","flower"])).toEqual("flower");
});
