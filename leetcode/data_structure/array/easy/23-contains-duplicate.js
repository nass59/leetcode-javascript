/**
 * @see https://leetcode.com/problems/contains-duplicate/
 *
 * Time complexity: O(n)
 * Space complexity: O(1)
 *
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = nums => {
  const hashMap = new Map()

  for (let i = 0; i < nums.length; i++) {
    if (hashMap.get(nums[i])) {
      return true
    }

    hashMap.set(nums[i], 1)
  }

  return false
}

/**
 * Time complexity: O(n log n)
 * Space complexity: O(1)
 *
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = nums => {
  nums = nums.sort()

  for (let i = 1; i < nums.length; i++) {
    if (nums[i - 1] === nums[i]) {
      return true
    }
  }

  return false
}

/**
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = nums => new Set(nums).size !== nums.length

console.log(containsDuplicate([1, 2, 3, 1]))
console.log(containsDuplicate([1, 2, 3, 4]))
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]))
