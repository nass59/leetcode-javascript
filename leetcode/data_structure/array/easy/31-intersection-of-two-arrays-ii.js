/**
 * @see https://leetcode.com/problems/intersection-of-two-arrays/
 *
 * Time complexity: O(n)
 * Space complexity: O(n)
 *
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const intersect = (nums1, nums2) => {
  let intersection = []

  if (nums1.length < nums2.length) {
    ;[nums1, nums2] = [nums2, nums1]
  }

  const setNums1 = new Set(nums1)
  const setNums2 = nums2

  setNums2.forEach(num => {
    if (setNums1.has(num)) {
      intersection.push(num)
    }
  })

  return intersection
}

/**
 * @see https://leetcode.com/problems/intersection-of-two-arrays/
 *
 * Time complexity: O(n1+n2)
 * Space complexity: O(min(n1, n2))
 *
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const intersect = (nums1, nums2) => {
  const map = new Map()
  const res = []

  nums1.forEach(num => map.set(num, (map.get(num) || 0) + 1))

  for (let i = 0; i < nums2.length; i++) {
    if (map.has(nums2[i]) && map.get(nums2[i]) > 0) {
      res.push(nums2[i])
      map.set(nums2[i], map.get(nums2[i]) - 1)
    }
  }

  return res
}

console.log(intersect([1, 2, 2, 1], [2, 2]))
console.log(intersect([1, 2, 2, 1], [2]))
console.log(intersect([9, 4, 5], [9, 4, 9, 8, 4]))
console.log(intersect([1, 2], [1, 1]))
