/**
 * @see https://leetcode.com/problems/max-consecutive-ones/
 *
 * Approach ONE PASS
 *
 * Time Complexity : O(n), where n is the number of the elements in the array
 * Space Complexity : O(1). We do not use any extra space
 *
 * @param {number[]} nums
 * @return {number}
 */
const findMaxConsecutiveOnes = nums => {
  let maxConsecuiveOnes = 0
  let count = 0

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      count++
    } else {
      maxConsecuiveOnes = Math.max(maxConsecuiveOnes, count)
      count = 0 // Reset count of 1
    }
  }

  return Math.max(maxConsecuiveOnes, count)
}

/**
 * Approach SPLIT
 *
 * Time Complexity : O(n), where n is the number of the elements in the array
 * Space Complexity : O(1). We do not use any extra space
 *
 * @param {number[]} nums
 * @return {number}
 */
const findMaxConsecutiveOnes2 = nums => {
  let split = nums
    .join('')
    .split('0')
    .map(value => value.length)

  return Math.max(...split)
}

console.log(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1]))
console.log(findMaxConsecutiveOnes2([1, 1, 0, 1, 1, 1]))
