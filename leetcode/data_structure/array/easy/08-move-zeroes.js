/**
 * @see https://leetcode.com/problems/move-zeroes/
 *
 * Time Complexity : O(n)
 * Space Complexity : O(1)
 *
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const moveZeroes = nums => {
  let lastIndexNonZero = 0

  for (let i = 0; i < nums.length; i++) {
    // If the current element is not 0, then we need to
    // append it just in front of last non 0 element we found.
    if (nums[i] !== 0) {
      nums[lastIndexNonZero++] = nums[i]
      nums[i] = lastIndexNonZero - 1 !== i ? 0 : nums[i]
    }
  }

  return nums
}

console.log(moveZeroes2([0, 1, 0, 3, 12]))
console.log(moveZeroes2([1, 1]))
