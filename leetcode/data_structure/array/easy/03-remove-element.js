/**
 * @see https://leetcode.com/problems/remove-element/
 *
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
const removeElement = (nums, val) => {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === val) {
      nums.splice(i, 1)
      i--
    }
  }

  return nums.length
}

/**
 * Time Complexity : O(n). Assume the array has a total of n elements, both i and j traverse at most  2n steps.
 * Space Complexity : O(1)
 *
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
const removeElement2 = (nums, val) => {
  let index = 0

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[index] = nums[i]
      index++
    }
  }

  return index
}

console.log(removeElement([3, 2, 2, 3], 3))
console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2))
