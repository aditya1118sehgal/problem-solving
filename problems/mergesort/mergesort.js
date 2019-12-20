

const mergeArrays = (arr1, arr2) => {
  let arr = [];
  let i = j = 0;

  while(i < arr1.length && j < arr2.length) {
    if(arr1[i] < arr2[i]) {
      arr.push(arr1[i ++]);
    } else {
      arr.push(arr2[j ++]);
    }
  }

  while(i < arr1.length) {
    arr.push(arr1[i ++]);
  }

  while(j < arr2.length) {
    arr.push(arr2[j ++]);
  }

  return arr;
}

/*
[5, 4, 3, 2, 1]

merge([5, 4], [3, 2, 1])
= merge([4, 5], [1, 2, 3])
= [1, 2, 3, 4, 5]

[5, 4]
merge([5], [4]) = [4, 5]

[3, 2, 1]
merge([3], [2, 1])
= merge([3], [1, 2])
= [1, 2, 3]

[2, 1]
merge([2], [1]) = [1, 2]
*/
const mergesort = (arr) => {
  if(arr.length <= 1) {
    return arr;
  } else {
    console.log(arr.length/2-1);
    return mergeArrays(
      mergesort(
        arr.slice(0, arr.length/2)
      ),
      mergesort(
        arr.slice(arr.length/2, arr.length)
      )
    );
  }
}

(() => {

  console.log(
    mergesort(
      [5, 4, 3, 2, 1]
    )
  )

})();
