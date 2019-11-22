
/* fibonacci numbers */

let fibs = {};

/**
 * @param {Number} n
 * @return {Number} the nth fibonacci number
 */
const getFib = (n) => {
  if(n < 3) {
    return 1;
  } else {
    let fib_n1, fib_n2;

    if(fibs[n-1]) {
      fib_n1 = fibs[n-1];
    } else {
      fib_n1 = getFib(n-1);
      fibs[n-1] = fib_n1;
    }

    if(fibs[n-2]) {
      fib_n2 = fibs[n-2];
    } else {
      fib_n2 = getFib(n-2);
      fibs[n-2] = fib_n2;
    }

    return getFib(n-1) + getFib(n-2);
  }
}

/**
 * @param {Number} n
 */
const printFibs = (n) => {
  for(let i = 1; i <= n; i ++) {
    console.log(getFib(i));
  }
}

/*
(() => {
  printFibs(9);
})();
*/

module.exports = {
  printFibs
}
