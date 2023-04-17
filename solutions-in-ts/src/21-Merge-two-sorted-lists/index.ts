type NullableList = null | IListNode
interface IListNode {
  val: number | undefined,
  next: NullableList
}

/* Definition for singly-linked list. */
class ListNode implements IListNode {
  constructor(public val: number | undefined, public next: NullableList = null) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next)
  }
}

/** Solution Two - way better performance */
export const  mergeTwoLists = (list1:NullableList = null, list2: NullableList = null): NullableList => {
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

  const mergedArray = arrayOfList1.concat(arrayOfList2).sort((a, b) => {return (a!-b!)});
  
  let temp = mergedList;
  for(let i of mergedArray){
    temp.next = new ListNode(i);
    temp = temp.next;
  }

  return mergedList.next;
};
