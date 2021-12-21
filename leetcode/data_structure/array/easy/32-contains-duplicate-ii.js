/**
 * @see https://leetcode.com/problems/contains-duplicate-ii/
 *
 * Time complexity: O(n)
 * Space complexity: O(n)
 *
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
const containsNearbyDuplicate = (nums, k) => {
  const map = new Map()

  for (let i = 0; i < nums.length; i++) {
    if (Math.abs(i - map.get(nums[i])) <= k) {
      return true
    }

    map.set(nums[i], i)
  }

  return false
}

console.log(containsNearbyDuplicate([1, 2, 3, 1], 3))
console.log(containsNearbyDuplicate([1, 0, 1, 1], 1))
console.log(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2))
