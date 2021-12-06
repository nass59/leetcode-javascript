/**
 * @see https://leetcode.com/problems/merge-sorted-array/
 *
 * Time Complexity : O(n + m)
 * Space Complexity : O(1). We do not use any extra space
 *
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
const merge = (nums1, m, nums2, n) => {
  let left = m - 1
  let right = n - 1

  for (let i = nums1.length - 1; i >= 0; i--) {
    if (right < 0) {
      break
    }

    if (left >= 0 && nums1[left] > nums2[right]) {
      nums1[i] = nums1[left--]
    } else {
      nums1[i] = nums2[right--]
    }
  }
}

console.log(merge([0, 0, 0, 0, 0], 0, [1, 2, 3, 4, 5], 5))
console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3))
console.log(merge([2, 0], 1, [1], 1))
console.log(merge([1, 2, 3, 0, 0, 0], 3, [-1, -10, -5], 3))
console.log(merge([1], 1, [], 0))
