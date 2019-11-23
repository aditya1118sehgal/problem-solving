/*
{
  -1: [-1, 0],
  0: [-1, 1],
  1: [-1, 2],
  -2: [-1, -1],
  ....
}

*/

/**
 * @param {number[]} elems
 * @return {number[][]}
 */
const threeSum = (elems) => {
  let result = [];
  let map = {};
  const TARGET = 0;

  // (O(n*n))
  for (let i = 0; i < elems.length; i ++) {
    let iElem = elems[i];
    for (let k = 0;  k < elems.length; k ++) {
      let kElem = elems[k];
      let sum = iElem + kElem;
      if(!map[sum] && i !== k) {
        if(iElem < kElem) {
          map[sum] = [iElem, kElem];
        } else {
          map[sum] = [kElem, iElem];
        }
      }
    }
  }


  // O(n)
  for (let i = 0; i < elems.length; i ++) {
    let iElem = elems[i];
    let diff = TARGET - iElem;
    if(map[diff]) {
      let arr;
      if(iElem < map[diff][0]) {
        arr = [iElem, ...map[diff]];
        result.push(arr);
      } else if (iElem < map[diff][1]) {
        let arr = [map[diff][0], iElem, map[diff][1]];
        result.push(arr);
      } else {
        let arr = [...map[diff], iElem];
        result.push(arr);
      }
    }
  }

  let resultMap = {};
  // O(n)
  for(let i = 0; i < result.length; i ++) {
    let arrStr = result[i].join(',');
    if(!resultMap[arrStr]) { resultMap[arrStr] = result[i]; }
  }


  let uniqueResults = [];
  // O(n)
  for(let k in resultMap) {
    uniqueResults.push(resultMap[k]);
  }

  return uniqueResults;
}

/*
(() => {
  console.log(
    threeSum(
      [-1, 0, 1, 2, -1, -4]
    )
  );
})();
*/
