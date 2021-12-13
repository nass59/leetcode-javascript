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
  const setNums1 = new Set(nums1)
  const setNums2 = new Set(nums2)

  if (setNums1.length < setNums2.length) {
    ;[setNums1, setNums2] = [setNums2, setNums1]
  }

  setNums1.forEach(num => {
    if (setNums2.has(num)) {
      intersection.push(num)
    }
  })

  return intersection
}

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
  const setNums1 = new Set(nums1)

  return [...new Set(nums2.filter(num => setNums1.has(num)))]
}

console.log(intersect([1, 2, 2, 1], [2, 2]))
console.log(intersect([9, 4, 5], [4, 9]))
