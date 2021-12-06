/**
 * @see https://leetcode.com/problems/find-pivot-index/
 *
 * @param {number[]} nums
 * @return {number}
 */
const pivotIndex = nums => {
  const total = nums.reduce((a, b) => a + b)
  let sum = 0

  for (let i = 0; i < nums.length; i++) {
    if (sum * 2 === total - nums[i]) return i
    sum += nums[i]
  }

  return -1
}

console.log(pivotIndex([-1, -1, -1, -1, 0, -1]))
console.log(pivotIndex([-1, -1, -1, -1, -1, 0]))
console.log(pivotIndex([1, 7, 3, 6, 5, 6]))
console.log(pivotIndex([1, 2, 3]))
console.log(pivotIndex([2, 1, -1]))
