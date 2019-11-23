
function Node(val) {
  this.val = val;
  this.next = null;
}

/**
 * @param {Node} list1
 * @param {Node} list2
 * @return {Node}
 */
const mergeLists = function(list1, list2) {
  let listElement1 = list1,
      listElement2 = list2
      mergedList = new Node(null)
      result = mergedList;

  while(listElement1 && listElement2) {
    if(listElement1.val < listElement2.val) {
      mergedList.next = new Node(listElement1.val);
      mergedList = mergedList.next;
      listElement1 = listElement1.next;
    } else {
      mergedList.next = new Node(listElement2.val);
      mergedList = mergedList.next;
      listElement2 = listElement2.next;
    }
  }

  if(listElement1 !== null) {
    while(listElement1) {
      mergedList.next = new Node(listElement1.val);
      mergedList = mergedList.next;
      listElement1 = listElement1.next;
    }
  } else if(listElement2 !== null) {
    while(listElement2) {
      mergedList.next = new Node(listElement2.val);
      mergedList = mergedList.next;
      listElement2 = listElement2.next;
    }
  }

  return result.next;
};

const printList = (list) => {
  if(list === null) {
    console.log(null);
  } else {
    let s = '';
    while(list) {
      s = s + ' => ' + list.val;
      list = list.next;
    }
    console.log(s.substring(4, s.length));
  }

}


/*
(() => {
  let l11 = new Node(1);
  let l12 = new Node(2);
  let l13 = new Node(4);
  l11.next = l12;
  l12.next = l13;

  let l21 = new Node(1);
  let l22 = new Node(3);
  let l23 = new Node(4);
  l21.next = l22;
  l22.next = l23;

  let result = mergeLists(l11, l21);

  printList(l11);
  printList(l21);
  printList(result);

  printList(mergeLists(null, null));
})();
*/
