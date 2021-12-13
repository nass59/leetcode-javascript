/**
 * @see https://leetcode.com/problems/happy-number/
 *
 * @param {number} n
 * @return {boolean}
 */
const isHappy = n => {
  let sum = Infinity
  let tmpArr = []

  while (sum !== 1) {
    sum = n
      .toString()
      .split('')
      .map(x => Math.pow(Number(x), 2))
      .reduce((b, a) => a + b)

    if (sum === 1) return true
    if (tmpArr.includes(sum)) return false

    n = sum
    tmpArr.push(sum)
  }

  return isHappy
}

console.log(isHappy(0))
console.log(isHappy(1))
console.log(isHappy(2))
console.log(isHappy(4))
console.log(isHappy(7))
console.log(isHappy(19))
console.log(isHappy(20))
