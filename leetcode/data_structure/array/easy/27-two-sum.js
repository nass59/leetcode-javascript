/**
 * @see https://leetcode.com/problems/two-sum/
 *
 * Time complexity: O(n)
 * Space complexity: O(n)
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target) => {
  const hashMap = new Map()

  for (let i = 0; i < nums.length; i++) {
    const valueToFind = target - nums[i]

    if (hashMap.has(valueToFind)) {
      return [hashMap.get(valueToFind), i]
    }

    hashMap.set(nums[i], i)
  }

  return null
}

console.log(twoSum([2, 7, 11, 15], 9))
console.log(twoSum([3, 2, 4], 6))
console.log(twoSum([3, 3], 6))
