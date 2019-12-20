/**
 * Implements Quicksort
 */
class Quicksort {

  static sortAscending(arr, low, high, pivot) {
    if(arr.length <= 1) {
      return arr;
    } else {
      let less = [];
      let more = [];
      let pElement = arr[pivot];

      arr.slice(low, pivot).forEach((e) => {
        if(e < pElement) {
          less.push(e);
        } else {
          more.push(e);
        }
      });

      return (
        Quicksort.sortAscending(less, 0, less.length-1, less.length-1)
        .concat(
          [pElement]
        ))
        .concat(
          Quicksort.sortAscending(more, 0, more.length-1, more.length-1)
        );
    }
  }

  static ascending(arr) {
    if(!arr || arr.length <= 1) {
      return arr;
    } else {
      return Quicksort.sortAscending(arr, 0, arr.length-1, arr.length-1);
    }
  }

  static sortDescending(arr, low, high, pivot) {
    if(arr.length <= 1) {
      return arr;
    } else {
      let less = [];
      let more = [];
      let pElement = arr[pivot];

      arr.slice(low, pivot).forEach((e) => {
        if(e > pElement) {
          less.push(e);
        } else {
          more.push(e);
        }
      });

      return (
        Quicksort.sortDescending(less, 0, less.length-1, less.length-1)
        .concat(
          [pElement]
        ))
        .concat(
          Quicksort.sortDescending(more, 0, more.length-1, more.length-1)
        );
    }
  }

  static descending(arr) {
    if(!arr || arr.length <= 1) {
      return arr;
    } else {
      return Quicksort.sortDescending(arr, 0, arr.length-1, arr.length-1);
    }
  }
}

module.exports = Quicksort;

/*
(() => {
  let arrDesc = [5, 4, 3, 2, 1];
  let arrAsc = [1, 2, 3, 4, 5];

  console.log(Quicksort.ascending(arrDesc));
  console.log(Quicksort.descending(arrAsc));
})();
*/
