const { twoSumSolutionOne } = require('../index');

/** twoSumSolutionOne */
test('Test #1 of Solution #1: input=[2,7,11,15],9 => output=[0,1] ', () => {
  expect(twoSumSolutionOne([2, 7, 11, 15], 9)).toEqual([0, 1]);
});

test('Test #2 of Solution #1: input=[3,2,4],6 => output=[1,2] ', () => {
  expect(twoSumSolutionOne([3, 2, 4], 6)).toEqual([1, 2]);
});

test('Test #1 of Solution #1: input=[3,3],6 => output=[0,1] ', () => {
  expect(twoSumSolutionOne([3, 3], 6)).toEqual([0, 1]);
});
