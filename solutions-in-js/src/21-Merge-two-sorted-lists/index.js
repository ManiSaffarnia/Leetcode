/*
* @param {ListNode} list1
* @param {ListNode} list2
* @return {ListNode}
* Definition for singly-linked list.
* function ListNode(val, next) {
*     this.val = (val===undefined ? 0 : val)
*     this.next = (next===undefined ? null : next)
* }
*/

function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

const list1 = new ListNode(1, new ListNode(2, new ListNode(4)));
const list2 = new ListNode(1, new ListNode(3, new ListNode(4)));
// const list1 = new ListNode(2, null);
// const list2 = new ListNode(1, null);


const mergeTwoListsSolutionOne = function (list1 = null, list2 = null) {
  let mergedList = new ListNode(0);
  let mergedListTail = mergedList;
  let item1 = list1;
  let item2 = list2;

  if (list1 !== null && list2 !== null) {
    if(item1.val === 0 && item2.val === 0){
      return null;
    }
    while (item1?.val !== null || item2?.val !== null) {
      if (!item1) {
        if (item2 && item2.value !== null && item2.value !== undefined) {
          mergedList = new ListNode(item2.value);
          break;
        }
      }
      
      if (!item2) {
        if (item1 && item1.value !== null && item1.value !== undefined) {
          mergedList = new ListNode(item1.value);
          break;
        }
      }
      
      if (item1.val < item2.val) {
        if (mergedList) {
          const newItem = new ListNode(item1.val);
          mergedListTail.next = newItem;
          mergedListTail = newItem;
          item1 = item1.next;
        }
        else {
          mergedList = new ListNode(list1.val);
          mergedListTail.next = mergedList;
        }
      }
      else if (item1.val > item2.val) {
        if (mergedList) {
          console.log('inaj')
          const newItem = new ListNode(item2.val);
          mergedListTail.next = newItem;
          mergedListTail = newItem;
          item2 = item2.next;
        }
        else {
          mergedList = new ListNode(list2.val);
          mergedListTail = mergedList.next;
        }
      }
      else {
        if (mergedList) {
          const newItem = new ListNode(item1.val, new ListNode(item2.val));
          mergedListTail.next = newItem;
          mergedListTail = newItem.next;
        }
        else {

          mergedList = new ListNode(list1.val, new ListNode(list2.val));
          mergedListTail = mergedList.next;
        }
        item1 = item1.next;
        item2 = item2.next;
      }

      if (!item1 || !item2) {
        if(!item1 && item2){
          mergedListTail.next = item2
        }
        else if (item1 && !item2){
          mergedListTail.next = item1
        }

        break
      }
    }
  }
  else {
    if(list1 === null && list2 !== null) {
      mergedList = list2;
    }
    else if (list1 !== null && list2 === null) {
      mergedList = list1;
    }
    else {
      mergedList = null;
    }
  }

  return  mergedList.next;
};

const mergeTwoListsSolutionTwo = function (list1, list2) {
  const mergedList = new ListNode(0);

  if(list1 === null && list2 !== null) {
    return list2;
  }
  else if(list2 === null && list1 !== null){
    return list1;
  }
  else if( list1 === null && list2 === null){
    return null;
  }
  else if(list1?.val === 0 && list2?.val === 0 ){
    return mergedList
  }

  const arrayOfList1 = []
  while(list1!=null)
  { 
    arrayOfList1.push(list1.val);
    list1 = list1.next;
  }

  const arrayOfList2 = []
  while(list2!=null)
  { 
    arrayOfList2.push(list2.val);
    list2 = list2.next;
  }

  const mergedArray = arrayOfList1.concat(arrayOfList2).sort((a, b) => {return (a-b)});
  
  let temp = mergedList;
  for(let i of mergedArray){
    temp.next = new ListNode(i);
    temp = temp.next;
  }

  return mergedList.next;
}


module.exports = {
  mergeTwoListsSolutionOne,
  mergeTwoListsSolutionTwo,
  ListNode
}