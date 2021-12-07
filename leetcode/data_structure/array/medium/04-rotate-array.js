/**
 * @see https://leetcode.com/problems/rotate-array/
 *
 * Time complexity: O(n)
 * Space complexity: O(1)
 *
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const rotate = (nums, k) => {
  const length = nums.length - 1
  k %= nums.length

  reverse(nums, 0, length)
  reverse(nums, 0, k - 1)
  reverse(nums, k, length)

  return nums
}

const reverse = (nums, start, end) => {
  while (start < end) {
    let tmp = nums[start]
    nums[start] = nums[end]
    nums[end] = tmp
    start++
    end--
  }
}

console.log(rotate([1, 2, 3, 4, 5, 6, 7], 40))
