/**
 * @see https://leetcode.com/problems/squares-of-a-sorted-array/
 *
 * Approach 1: SORT
 *
 * Time complexity : O(n log n)
 * Space complexity : O(n)
 *
 * @param {number[]} nums
 * @return {number[]}
 */
const sortedSquares = nums => {
  // square => O(n)
  // sort => O(n log n)
  return nums.map(num => num * num).sort((a, b) => a - b)
}

/**
 * Approach 2: TWO POINTERS
 *
 * Time complexity : O(n)
 * Space complexity : O(n)
 *
 * @param {number[]} nums
 * @return {number[]}
 */
const sortedSquares2 = nums => {
  const length = nums.length
  const result = []

  let left = 0
  let right = length - 1

  for (let i = length - 1; i >= 0; i--) {
    if (Math.abs(nums[left]) < Math.abs(nums[right])) {
      result[i] = nums[right] * nums[right]
      right--
    } else {
      result[i] = nums[left] * nums[left]
      left++
    }
  }

  return result
}

console.log(sortedSquares([-4, -1, 0, 3, 10]))
console.log(sortedSquares2([-4, -1, 0, 3, 10]))
