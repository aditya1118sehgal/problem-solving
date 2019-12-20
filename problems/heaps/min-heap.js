/*

             13 (0)
          /         \
     16 (1)        31 (2)
    /    \          /    \
41 (3)   51 (4)  100(5)   41 (6)



                    2 (0)
                  /   \
              5 (1)

*/
class MinHeap {

  constructor() {
    this.clear();
  }

  get size() {
    return this._size;
  }

  clear() {
    this._size = 0;
    this.items = [];
  }

  insert(item, i) {
    let {items, _size} = this;
    if(_size) {
      if(!items[i]) {
        items[i] = item;
      } else if(item > items[i]) {
        this.insert(item, 2*i + 2);
      } else {
        insert(item, 2*i + 1);
      }
    } else {
      this._size = 1;
      this.items[0] = item;
    }
  }

  insert(item) {
    insert(item, 0);
  }
}

(
  () => {
    let m = new MinHeap();
  }
)();
