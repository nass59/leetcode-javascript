/**
 * @see https://leetcode.com/problems/plus-one/
 *
 * Time Complexity : O(n)
 * Space Complexity : O(1)
 *
 * @param {number[]} digits
 * @return {number[]}
 */
const plusOne = digits => {
  let index = digits.length - 1

  while (digits[index] + 1 === 10) {
    digits[index] = 0
    index--
  }

  if (index >= 0) digits[index]++
  else digits.unshift(1)

  return digits
}

console.log(plusOne([9, 8, 9, 9]))
console.log(plusOne([1, 2, 3]))
console.log(plusOne([4, 3, 2, 1]))
console.log(plusOne([0]))
console.log(plusOne([9]))
