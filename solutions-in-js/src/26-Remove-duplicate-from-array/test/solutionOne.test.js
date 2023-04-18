const { removeDuplicatesSolutionOne } = require('../index')

test('Test #1 Solution 1', () => {
  expect(removeDuplicatesSolutionOne([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])).toEqual(5);
});

test('Test #2 Solution 1', () => {
  expect(removeDuplicatesSolutionOne([1, 1, 2])).toEqual(2);
});

test('Test #3 Solution 1', () => {
  expect(removeDuplicatesSolutionOne([1,2])).toEqual(2);
});

test('Test #4 Solution 1', () => {
  expect(removeDuplicatesSolutionOne([1,1])).toEqual(1);
});
