/**
 * @see https://leetcode.com/problems/4sum-ii/
 *
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @param {number[]} nums4
 * @return {number}
 */
const fourSumCount = (nums1, nums2, nums3, nums4) => {
  const map = new Map()
  let count = 0

  for (let num1 of nums1) {
    for (let num2 of nums2) {
      const sum = num1 + num2
      map.set(sum, (map.get(sum) || 0) + 1)
    }
  }

  for (let num3 of nums3) {
    for (let num4 of nums4) {
      count += map.get(-(num3 + num4)) || 0
    }
  }

  return count
}

console.log(fourSumCount([1, 2], [-2, -1], [-1, 2], [0, 2]))
