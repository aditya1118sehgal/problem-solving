/**
 * @param {string} digits
 * @return {string[]}
 */
const letterCombinations = digits => {
  if(digits.length < 1) {
    return null;
  }

  const mapping = {
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r' , 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z']
  };

  const digs = digits.split('');
  console.log(digs);

  let combinations = [...mapping[digs[0]]];

  digs.forEach(dig => {
    dig.forEach((dig, i) => {
      if(i !== 0) {
      }
    })
  })
};
/*

234
[a, b, c]
[ad, ae, af, bd, be, bf, cd, ce, cf],
[adg, adh, adi, aeg, aeh, aei, afg, afh, afi, ....]

*/


(() => {
  letterCombinations('23');
})();
