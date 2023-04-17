const { mergeTwoListsSolutionTwo, ListNode } = require('../index')

const list1 = new ListNode(1, new ListNode(2, new ListNode(4)));
const list2 = new ListNode(1, new ListNode(3, new ListNode(4)));
const result = new ListNode(1, new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(4))))));

test('Test #1 Solution 1', () => {
  expect(mergeTwoListsSolutionTwo(list1, list2)).toEqual(result);
});
