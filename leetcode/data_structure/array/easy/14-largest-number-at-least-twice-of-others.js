/**
 * @see https://leetcode.com/problems/largest-number-at-least-twice-of-others/
 *
 * @param {number[]} nums
 * @return {number}
 */
const dominantIndex = nums => {
  let max = Math.max(...nums)
  let indexMax = nums.indexOf(max)

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] * 2 > max && nums[i] !== max) {
      return -1
    }
  }

  return indexMax
}

console.log(dominantIndex([3, 6, 1, 0]))
console.log(dominantIndex([1, 2, 3, 4]))
console.log(dominantIndex([1]))
console.log(dominantIndex([0, 0, 3, 2]))
