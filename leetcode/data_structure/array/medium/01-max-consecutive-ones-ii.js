/**
 * @see https://leetcode.com/problems/max-consecutive-ones-ii/
 *
 * @param {number[]} nums
 * @return {number}
 */
const findMaxConsecutiveOnes = nums => {
  let count = 0,
    left = 0,
    right = 0
  let flipZero = false

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      left++
      if (flipZero) right++
    } else if (nums[i] === 0 && !flipZero) {
      left++
      flipZero = true
    } else {
      left = right
      right = 0
      flipZero = false
      i--
    }

    count = Math.max(count, left)
  }

  return count
}

console.log(findMaxConsecutiveOnes([1, 0, 1, 1, 0]))
console.log(findMaxConsecutiveOnes([1, 0, 1, 1, 0, 1]))
console.log(findMaxConsecutiveOnes([0]))
