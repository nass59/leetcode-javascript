/**
 * @see https://leetcode.com/problems/remove-duplicates-from-sorted-array/
 *
 * Time Complexity : O(n). Assume the array has a total of n elements
 * Space Complexity : O(1)
 *
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = nums => {
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === nums[i - 1]) nums.splice(i--, 1)
  }

  return nums.length
}

/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = nums => {
  let start = 1

  while (start < nums.length) {
    if (nums[start] === nums[start - 1]) nums.splice(start, 1)
    else start++
  }

  return nums.length
}

console.log(removeDuplicates([1, 1, 2]))
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]))
